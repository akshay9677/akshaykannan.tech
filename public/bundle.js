(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? factory(exports, require("react"))
    : typeof define === "function" && define.amd
    ? define(["exports", "react"], factory)
    : ((global =
        typeof globalThis !== "undefined" ? globalThis : global || self),
      factory((global.MyLib = {}), global.React));
})(this, function (exports, React) {
  "use strict";

  function _interopDefaultLegacy(e) {
    return e && typeof e === "object" && "default" in e ? e : { default: e };
  }

  var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);

  function _slicedToArray(arr, i) {
    return (
      _arrayWithHoles(arr) ||
      _iterableToArrayLimit(arr, i) ||
      _unsupportedIterableToArray(arr, i) ||
      _nonIterableRest()
    );
  }

  function _toConsumableArray(arr) {
    return (
      _arrayWithoutHoles(arr) ||
      _iterableToArray(arr) ||
      _unsupportedIterableToArray(arr) ||
      _nonIterableSpread()
    );
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
      return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
      return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (
        var _i = arr[Symbol.iterator](), _s;
        !(_n = (_s = _i.next()).done);
        _n = true
      ) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError(
      "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }

  function _nonIterableRest() {
    throw new TypeError(
      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }

  function ChatButton(props) {
    return /*#__PURE__*/ React__default["default"].createElement(
      "div",
      {
        style: {
          overflow: "hidden",
        },
      },
      /*#__PURE__*/ React__default["default"].createElement(
        "div",
        {
          style: props.clickSense ? styles.btn : styles.btn2,
          onClick: props.onPress,
        },
        /*#__PURE__*/ React__default["default"].createElement("img", {
          alt: "logos",
          style: {
            overflow: "hidden",
          },
          src: "https://image.flaticon.com/icons/svg/838/838479.svg",
        })
      )
    );
  }

  var styles = {
    btn: {
      position: "fixed",
      width: 50,
      height: 50,
      borderTopRightRadius: 25,
      borderBottomRightRadius: 25,
      borderBottomLeftRadius: 25,
    },
    btn2: {
      position: "fixed",
      width: 50,
      height: 50,
      borderRadius: 25,
    },
  };

  var colors = {
    primary: "#0779e4",
  };

  function ChatHeader(props) {
    return /*#__PURE__*/ React__default["default"].createElement(
      "div",
      {
        style: styles$1.chatHeader,
      },
      /*#__PURE__*/ React__default["default"].createElement("div", {
        style: styles$1.chatHeader.chatLogo.online,
      }),
      /*#__PURE__*/ React__default["default"].createElement(
        "div",
        {
          style: styles$1.chatHeader.chatLogo,
        },
        /*#__PURE__*/ React__default["default"].createElement("img", {
          alt: "logo",
          style: {
            overflow: "hidden",
          },
          src: "https://image.flaticon.com/icons/svg/838/838479.svg",
        })
      ),
      /*#__PURE__*/ React__default["default"].createElement(
        "div",
        {
          style: styles$1.chatHeader.chatText,
        },
        /*#__PURE__*/ React__default["default"].createElement(
          "div",
          null,
          "Chat Bot"
        )
      ),
      /*#__PURE__*/ React__default["default"].createElement(
        "div",
        {
          onClick: props.onClicks,
          style: styles$1.chatHeader.chatClose,
        },
        /*#__PURE__*/ React__default["default"].createElement(
          "svg",
          {
            width: "1.5em",
            height: "1.5em",
            viewBox: "0 0 16 16",
            className: "bi bi-arrow-right",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
          },
          /*#__PURE__*/ React__default["default"].createElement("path", {
            fillRule: "evenodd",
            d:
              "M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z",
          })
        )
      )
    );
  }

  var styles$1 = {
    chatHeader: {
      height: "2rem",
      backgroundColor: colors.primary,
      flex: 1,
      display: "flex",
      flexDirection: "row",
      chatLogo: {
        height: "2.6rem",
        width: "2.6rem",
        borderRadius: "1rem",
        backgroundColor: "white",
        margin: "0.9rem 0.2rem 0.2rem 0.6rem",
        overflow: "hidden",
        online: {
          height: "0.8rem",
          width: "0.8rem",
          borderRadius: "0.4rem",
          backgroundColor: "#16FA11",
          left: "2.8rem",
          top: "2.7rem",
          position: "absolute",
        },
      },
      chatText: {
        color: "white",
        margin: "0.1rem 0rem 0rem 0.8rem",
        fontSize: "20px",
        marginTop: "1rem",
      },
      chatClose: {
        position: "absolute",
        color: "white",
        right: "0.9rem",
        top: "1.4rem",
      },
    },
  };

  function ChatBox(props) {
    var _useState = React.useState(""),
      _useState2 = _slicedToArray(_useState, 2),
      text = _useState2[0],
      setText = _useState2[1];

    var optionsForTextInput = props.optionsForTextInput;
    console.log(optionsForTextInput);

    function handleChange(event) {
      var value = event.target.value;
      setText(value);
    }

    return /*#__PURE__*/ React__default["default"].createElement(
      "div",
      null,
      /*#__PURE__*/ React__default["default"].createElement(
        "div",
        {
          style: styles$2.chatBar,
        },
        /*#__PURE__*/ React__default["default"].createElement("input", {
          value: text,
          style: styles$2.chatBar.textInput,
          onChange: handleChange,
          placeholder: "Leave a message....",
          disabled: !optionsForTextInput,
        }),
        /*#__PURE__*/ React__default["default"].createElement(
          "a",
          {
            href: "#akshay",
          },
          /*#__PURE__*/ React__default["default"].createElement(
            "button",
            {
              type: "button",
              className: "btn btn-primary",
              onClick: function onClick() {
                props.sendMessage(text);
                setText("");
              },
              style: styles$2.chatBar.send,
            },
            /*#__PURE__*/ React__default["default"].createElement(
              "svg",
              {
                width: "1em",
                height: "1em",
                viewBox: "0 0 16 16",
                className: "bi bi-chat-right-dots",
                fill: "currentColor",
                xmlns: "http://www.w3.org/2000/svg",
              },
              /*#__PURE__*/ React__default["default"].createElement("path", {
                fillRule: "evenodd",
                d:
                  "M2 1h12a1 1 0 0 1 1 1v11.586l-2-2A2 2 0 0 0 11.586 11H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z",
              }),
              /*#__PURE__*/ React__default["default"].createElement("path", {
                d:
                  "M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z",
              })
            )
          )
        )
      ),
      /*#__PURE__*/ React__default["default"].createElement("div", {
        style: styles$2.chatBar,
      })
    );
  }

  var styles$2 = {
    chatBar: {
      height: "3.4rem",
      backgroundColor: "#f4f4f4",
      flex: 2,
      display: "flex",
      textInput: {
        outline: "none",
        border: 0,
        backgroundColor: "#f4f4f4",
        padding: "1rem",
        alignContent: "flexStart",
        width: "20rem",
      },
      send: {
        margin: "0.5rem 0.5rem 0 0.5rem",
        alignContent: "flexEnd",
      },
    },
  };

  function ChatConversation(props) {
    var divRef = React.useRef(null);

    var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showoptions = _useState2[0],
      setShowoptions = _useState2[1];

    var dummyData = props.messageData;
    var options = props.options;
    var typing = props.typing;
    React.useEffect(function () {
      divRef.current.scrollIntoView({
        behavior: "smooth",
      });
    });
    setTimeout(function () {
      setShowoptions(false);
    }, 5000);
    return /*#__PURE__*/ React__default["default"].createElement(
      "div",
      {
        className: "convo",
      },
      /*#__PURE__*/ React__default["default"].createElement(
        "div",
        {
          style: styles$3.chatBubble,
        },
        /*#__PURE__*/ React__default["default"].createElement(
          "div",
          {
            style: {
              width: "100%",
              display: "flex",
              flexDirection: "column",
            },
          },
          dummyData.map(function (value, index) {
            return /*#__PURE__*/ React__default["default"].createElement(
              "div",
              {
                key: index,
                style: value.bot
                  ? styles$3.chatBubble.botBubble
                  : styles$3.chatBubble.senderBubble,
              },
              value.message
            );
          }),
          typing &&
            /*#__PURE__*/ React__default["default"].createElement(
              "div",
              null,
              /*#__PURE__*/ React__default["default"].createElement("div", {
                className: "typing-loader",
              })
            ),
          /*#__PURE__*/ React__default["default"].createElement(
            "div",
            {
              className: "options-list",
            },
            !showoptions &&
              options.map(function (value, index) {
                return /*#__PURE__*/ React__default["default"].createElement(
                  "div",
                  {
                    key: index,
                    className: "options",
                    onClick: function onClick() {
                      props.selectOptions(value);
                      setShowoptions(true); // window.scrollTo(0,100)
                    },
                  },
                  value
                );
              })
          )
        ),
        /*#__PURE__*/ React__default["default"].createElement("div", {
          id: "akshay",
          style: {
            height: "1rem",
          },
          ref: divRef,
        })
      )
    );
  }

  var styles$3 = {
    chatBubble: {
      flex: 1,
      height: "27rem",
      overflowY: "scroll",
      senderBubble: {
        borderRadius: "1rem 0 1rem 1rem",
        margin: "0.4rem 0.4rem 0.4rem 10rem",
        display: "inlineBlock",
        padding: "0.5rem",
        backgroundColor: colors.primary,
        color: "white",
        textSize: "0.9rem",
        justifyContent: "flexEnd",
      },
      botBubble: {
        borderRadius: "0 1rem 1rem 1rem",
        margin: "0.4rem 10rem 0.4rem 0.4rem",
        display: "inlineBlock",
        padding: "0.2rem 0.5rem 0.2rem 0.5rem",
        textSize: "0.9rem",
        backgroundColor: "#f1f1f1",
      },
    },
  };

  function ChatScreen(props) {
    return /*#__PURE__*/ React__default["default"].createElement(
      "div",
      {
        style: styles$4.chatBox,
      },
      /*#__PURE__*/ React__default["default"].createElement(ChatHeader, {
        onClicks: props.closeClick,
      }),
      /*#__PURE__*/ React__default["default"].createElement(
        "div",
        null,
        /*#__PURE__*/ React__default["default"].createElement(
          ChatConversation,
          {
            messageData: props.messages,
            selectOptions: function selectOptions(value) {
              return props.selectOptions(value);
            },
            options: props.options,
            typing: props.typing,
          }
        )
      ),
      /*#__PURE__*/ React__default["default"].createElement(ChatBox, {
        optionsForTextInput: props.optionsForTextInput,
        sendMessage: function sendMessage(value) {
          return props.onSend(value);
        },
      })
    );
  }

  var styles$4 = {
    chatBox: {
      backgroundColor: "white",
      width: "24rem",
      height: "38rem",
      borderRadius: "1rem",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      boxShadow: "6px 6px 8px #CCC",
    },
  };

  function styleInject(css, ref) {
    if (ref === void 0) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === "undefined") {
      return;
    }

    var head = document.head || document.getElementsByTagName("head")[0];
    var style = document.createElement("style");
    style.type = "text/css";

    if (insertAt === "top") {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z =
    "/* This is for Chat conversation file for animations and hovers */\n.options {\n  border: 0.15rem solid black;\n  border-radius: 1rem 1rem 1rem 1rem;\n  margin: 0.2rem 0.4rem 0.2rem 0.2rem;\n  display: inlineBlock;\n  padding: 0.1rem 0.5rem 0.1rem 0.5rem;\n  border-color: #0779e4;\n  background-color: white;\n  cursor: pointer;\n}\n.options:hover {\n  background-color: #0779e4;\n  color: white;\n}\n.options-list {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  margin-left: 1.5rem;\n}\n.typing-loader {\n  width: 6px;\n  height: 6px;\n  margin: 1rem 0 0 0.8rem;\n  -webkit-animation: line 1s linear infinite alternate;\n  -moz-animation: line 1s linear infinite alternate;\n  animation: line 1s linear infinite alternate;\n}\n@-webkit-keyframes line {\n  0% {\n    background-color: rgba(0, 0, 0, 1);\n    box-shadow: 12px 0px 0px 0px rgba(0, 0, 0, 0.2),\n      24px 0px 0px 0px rgba(0, 0, 0, 0.2);\n  }\n  25% {\n    background-color: rgba(0, 0, 0, 0.4);\n    box-shadow: 12px 0px 0px 0px rgba(0, 0, 0, 2),\n      24px 0px 0px 0px rgba(0, 0, 0, 0.2);\n  }\n  75% {\n    background-color: rgba(0, 0, 0, 0.4);\n    box-shadow: 12px 0px 0px 0px rgba(0, 0, 0, 0.2),\n      24px 0px 0px 0px rgba(0, 0, 0, 2);\n  }\n}\n\n@-moz-keyframes line {\n  0% {\n    background-color: rgba(0, 0, 0, 1);\n    box-shadow: 12px 0px 0px 0px rgba(0, 0, 0, 0.2),\n      24px 0px 0px 0px rgba(0, 0, 0, 0.2);\n  }\n  25% {\n    background-color: rgba(0, 0, 0, 0.4);\n    box-shadow: 12px 0px 0px 0px rgba(0, 0, 0, 2),\n      24px 0px 0px 0px rgba(0, 0, 0, 0.2);\n  }\n  75% {\n    background-color: rgba(0, 0, 0, 0.4);\n    box-shadow: 12px 0px 0px 0px rgba(0, 0, 0, 0.2),\n      24px 0px 0px 0px rgba(0, 0, 0, 2);\n  }\n}\n\n@keyframes line {\n  0% {\n    background-color: rgba(0, 0, 0, 1);\n    box-shadow: 12px 0px 0px 0px rgba(0, 0, 0, 0.2),\n      24px 0px 0px 0px rgba(0, 0, 0, 0.2);\n  }\n  25% {\n    background-color: rgba(0, 0, 0, 0.4);\n    box-shadow: 12px 0px 0px 0px rgba(0, 0, 0, 2),\n      24px 0px 0px 0px rgba(0, 0, 0, 0.2);\n  }\n  75% {\n    background-color: rgba(0, 0, 0, 0.4);\n    box-shadow: 12px 0px 0px 0px rgba(0, 0, 0, 0.2),\n      24px 0px 0px 0px rgba(0, 0, 0, 2);\n  }\n}\n";
  styleInject(css_248z);

  var data = new Map();
  data.set("start", {
    bot: ["Hey how are u doing , what would you like to know? 😀"],
    options: [
      "Just Testing the bot 🤖",
      "I have a question 📱",
      "Just surfing 💻",
    ],
  });
  data.set("I have a question 📱", {
    bot: ["What would you like to know?"],
    options: [
      "How was this bot built?",
      "Is it possible to integrate chat  bot to my website? 🤔",
    ],
  });
  data.set("Just surfing 💻", {
    bot: ["Ok fine, Happy surfacing...."],
    options: [],
  });
  data.set("How was this bot built?", {
    bot: [
      "This chat bot is built on React js and server is handled by nodejs and mongoDb",
      "Do you want to know more?",
    ],
    options: ["Yes of course! 😀", "No it's ok 🙃"],
  });
  data.set("Is it possible to integrate chat  bot to my website? 🤔", {
    bot: [
      "Well.. this chat bot can be easily integrated with your website and can really keep track of people vist your website ",
      "This can really help in getting leads!!",
    ],
    options: ["Get in touch 📱", "No it's ok 🙃"],
  });
  data.set("Just Testing the bot 🤖", {
    bot: [
      "Oh.. My name is AK and I was built to assit the users who visit this website",
      " do you want to know more?",
    ],
    options: ["Yes of course! 😀", "No it's ok 🙃"],
  });
  data.set("No it's ok 🙃", {
    bot: ["Ok fine, Happy surfacing...."],
    options: [],
  });
  data.set("Yes of course! 😀", {
    bot: [
      "Well.. I can be easily integrated with your website and really keep track of people vist your website ",
      "This can really help in getting leads!!",
    ],
    options: ["Get in touch 📱", "No it's ok 🙃"],
  });
  data.set("Get in touch 📱", {
    bot: ["Can I have your email ?"],
    options: [],
  });
  data.set("email", {
    bot: ["Thank you will get in Touch 😀"],
    options: [],
  });

  var options = null;
  var datas = data;

  function App(props) {
    var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      chatScreen = _useState2[0],
      setChatScreen = _useState2[1];

    var _useState3 = React.useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      data = _useState4[0],
      setData = _useState4[1];

    var _useState5 = React.useState(true),
      _useState6 = _slicedToArray(_useState5, 2),
      initMessage = _useState6[0],
      setInitMessage = _useState6[1];

    var _useState7 = React.useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      typing = _useState8[0],
      setTyping = _useState8[1];

    var _useState9 = React.useState(false),
      _useState10 = _slicedToArray(_useState9, 2),
      initDelay = _useState10[0],
      setInitDelay = _useState10[1];

    var _useState11 = React.useState(false),
      _useState12 = _slicedToArray(_useState11, 2),
      textInputActive = _useState12[0],
      setTextInputActive = _useState12[1];

    var comp = null;
    var currentData = null;
    setTimeout(function () {
      setInitDelay(true);
    }, 2000);
    React.useEffect(
      function () {
        currentData = datas.get("start");
        var newData = [];
        currentData.bot.map(function (value) {
          newData.push({
            message: currentData.bot,
            bot: true,
          });
        });
        setData([].concat(newData));
        options = currentData.options;
      },
      [currentData]
    );

    function handleClick() {
      setInitMessage(false);
      setChatScreen(!chatScreen);
    }

    function handleSendMessage(textM) {
      if (options) {
        var newData = {
          message: textM,
          bot: false,
        };

        var _currentData = datas.get("email");

        var newdata = [];

        _currentData.bot.map(function (value) {
          newdata.push({
            message: value,
            bot: true,
          });
        });

        setData(function (prevData) {
          return [].concat(_toConsumableArray(prevData), [newData]);
        });
        setTyping(true);
        setTimeout(function () {
          setTyping(false);
          setData(function (prevData) {
            return [].concat(_toConsumableArray(prevData), newdata);
          });
        }, 3000);
      }
    }

    function handleOptions(value) {
      currentData = datas.get(value);
      var newSenderData = {
        message: value,
        bot: false,
      };
      options = [];
      setData(function (prevData) {
        return [].concat(_toConsumableArray(prevData), [newSenderData]);
      }, 3000);
      setTyping(true);
      setTimeout(function () {
        setTyping(false);

        if (currentData && currentData.options.length === 0) {
          setTextInputActive(true);
        }

        options = currentData.options;
        var newdata = [];
        currentData.bot.map(function (value) {
          newdata.push({
            message: value,
            bot: true,
          });
        });
        setData(function (prevData) {
          return [].concat(_toConsumableArray(prevData), newdata);
        });
      }, 3000);
    }

    if (chatScreen) {
      comp = /*#__PURE__*/ React__default["default"].createElement(
        "div",
        null,
        /*#__PURE__*/ React__default["default"].createElement(
          "div",
          {
            style: {
              textAlign: "center",
            },
          },
          /*#__PURE__*/ React__default["default"].createElement(ChatScreen, {
            onSend: handleSendMessage,
            messages: data,
            closeClick: handleClick,
            selectOptions: handleOptions,
            options: options,
            optionsForTextInput: textInputActive,
            typing: typing,
          })
        )
      );
    }

    return /*#__PURE__*/ React__default["default"].createElement(
      "div",
      null,
      initDelay &&
        /*#__PURE__*/ React__default["default"].createElement(
          "div",
          null,
          !chatScreen &&
            initMessage &&
            /*#__PURE__*/ React__default["default"].createElement(
              "div",
              {
                style: styles$5.chatInitMessage,
              },
              "Hey how are u doing , what would you like to know? \uD83D\uDE00"
            ),
          /*#__PURE__*/ React__default["default"].createElement(
            "div",
            {
              style: chatScreen ? styles$5.chatContainer : styles$5.chatBtn,
            },
            chatScreen
              ? comp
              : /*#__PURE__*/ React__default["default"].createElement(
                  ChatButton,
                  {
                    clickSense: chatScreen,
                    onPress: handleClick,
                  }
                )
          )
        )
    );
  }

  var styles$5 = {
    chatContainer: {
      position: "fixed",
      bottom: "2rem",
      right: "1.7rem",
    },
    chatBtn: {
      position: "fixed",
      bottom: "5rem",
      right: "5rem",
    },
    chatInitMessage: {
      position: "fixed",
      bottom: "2rem",
      right: "6rem",
      borderRadius: "1rem 1rem 0 1rem",
      display: "inlineBlock",
      padding: "0.5rem",
      backgroundColor: colors.primary,
      color: "white",
      fontSize: "16px",
      justifyContent: "flexEnd",
      textSize: "0.9rem",
    },
  };

  exports.default = App;
  const ak = React.createElement;
  const domContainer = document.querySelector("#like_button_container");
  ReactDOM.render(ak(App), domContainer);

  Object.defineProperty(exports, "__esModule", { value: true });
});
