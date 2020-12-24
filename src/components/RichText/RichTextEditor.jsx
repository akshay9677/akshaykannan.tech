import React, { Fragment, useRef, useState } from "react";
import { Editor, EditorState, RichUtils, CompositeDecorator } from "draft-js";
import RichTextButton from "./RichTextButtons";
import RichTextBlockType from "./RichTextBlockType";
import { convertToHTML } from "draft-convert";

function RichText(props) {
  const Link = (props) => {
    const { url } = props.contentState.getEntity(props.entityKey).getData();
    return (
      <a
        href={url}
        target='_blank'
        rel='noopener noreferrer'
        style={{ color: "#3b5998", textDecoration: "underline" }}
      >
        {props.children}
      </a>
    );
  };
  const decorator = new CompositeDecorator([
    {
      strategy: findLinkEntities,
      component: Link,
    },
  ]);
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty(decorator)
  );
  const [placeholderText, setplaceholderText] = useState(
    "Write something awesome"
  );
  const [url, seturl] = useState("");
  const editorRef = useRef(null);

  const styleMap = {
    STRIKETHROUGH: {
      textDecoration: "line-through",
    },
  };

  const onChange = (editor) => {
    const currentContent = editor.getCurrentContent();
    const oldContent = editorState.getCurrentContent();
    setEditorState(editor);
    if (currentContent !== oldContent) {
      const html = convertToHTML({
        entityToHTML: (entity, originalText) => {
          if (entity.type === "LINK") {
            return (
              <a
                href={entity.data.url}
                target='_blank'
                rel='noopener noreferrer'
              >
                {originalText}
              </a>
            );
          }
          return originalText;
        },
      })(editorState.getCurrentContent());
      props.onChange(html);
    }
  };

  const toggleInlineStyle = (command) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, command));
  };

  const toggleBlockType = (command) => {
    setEditorState(RichUtils.toggleBlockType(editorState, command));
  };

  const handleKeyCommand = (command, editorState) => {
    toggleInlineStyle(command.toUpperCase());
  };

  const handleReturn = (e) => {
    if (e.shiftKey) {
      let changedEditor = RichUtils.insertSoftNewline(editorState);
      onChange(changedEditor);
      return "handled";
    } else {
      return "not-handled";
    }
  };

  function findLinkEntities(contentBlock, callback, contentState) {
    contentBlock.findEntityRanges((character) => {
      const entityKey = character.getEntity();
      return (
        entityKey !== null &&
        contentState.getEntity(entityKey).getType() === "LINK"
      );
    }, callback);
  }

  const addLink = () => {
    let urlLink = window.prompt("Paste link here");
    seturl(urlLink);
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      "LINK",
      "MUTABLE",
      { url: urlLink }
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.set(editorState, {
      currentContent: contentStateWithEntity,
    });

    let changedEditor = RichUtils.toggleLink(
      newEditorState,
      newEditorState.getSelection(),
      entityKey
    );
    onChange(changedEditor);
    editorRef.current.focus();
  };

  return (
    <Fragment>
      <div
        className='flex flex-row py-3'
        style={{
          backgroundColor: props.dark ? "#18191A" : "#fafbff",
          color: props.dark ? "white" : "black",
          borderRadius: "0.4rem",
        }}
      >
        <RichTextBlockType dark={props.dark} blockTypeClick={toggleBlockType} />
        <RichTextButton
          dark={props.dark}
          styleName='BOLD'
          iconClick={toggleInlineStyle}
          buttonIcon={<i className='fas fa-bold text-base'></i>}
        />

        <RichTextButton
          dark={props.dark}
          styleName='ITALIC'
          iconClick={toggleInlineStyle}
          buttonIcon={<i className='fas fa-italic text-base'></i>}
        />

        <RichTextButton
          dark={props.dark}
          styleName='UNDERLINE'
          iconClick={toggleInlineStyle}
          buttonIcon={<i className='fas fa-underline text-base mt-1'></i>}
        />
        <RichTextButton
          dark={props.dark}
          styleName='STRIKETHROUGH'
          iconClick={toggleInlineStyle}
          buttonIcon={<i className='fas fa-strikethrough text-base'></i>}
        />

        <RichTextButton
          dark={props.dark}
          styleName='CODE'
          iconClick={toggleInlineStyle}
          buttonIcon={<i className='fas fa-code text-base'></i>}
        />
        <RichTextButton
          dark={props.dark}
          styleName='LINK'
          iconClick={addLink}
          buttonIcon={<i className='fas fa-link'></i>}
        />
      </div>
      <div className='draft-editor-wrapper'>
        <div
          style={{
            cursor: "text",
            border: props.dark ? "solid 0.5px black" : "solid 0.5px #ccc",
            backgroundColor: "white",
            color: "black",
            padding: "10px",
            minHeight: "10rem",
            borderBottomLeftRadius: "0.4rem",
            borderBottomRightRadius: "0.4rem",
          }}
          onClick={() => {
            editorRef.current.focus();
            setplaceholderText("");
          }}
        >
          <Editor
            handleReturn={handleReturn}
            ref={editorRef}
            handleKeyCommand={handleKeyCommand}
            style={{ maxHeight: "200px", overflow: "auto" }}
            editorState={editorState}
            onChange={onChange}
            customStyleMap={styleMap}
            placeholder={placeholderText}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default RichText;
