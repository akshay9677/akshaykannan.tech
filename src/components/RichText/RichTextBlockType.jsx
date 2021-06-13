import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function RichTextBlockType(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    let command = event.currentTarget.getAttribute("data-style");
    props.blockTypeClick(command);
    setAnchorEl(null);
  };

  return (
    <div className='mx-1.5'>
      <Button
        aria-controls='simple-menu '
        aria-haspopup='true'
        onMouseDown={handleClick}
        style={
          props.dark
            ? { textTransform: "none", color: "white" }
            : { textTransform: "none", color: "black" }
        }
      >
        Normal <i className='fas fa-chevron-down mx-1.5'></i>
      </Button>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={props.dark ? { color: "white" } : { color: "black" }}
      >
        <MenuItem onMouseDown={handleClose} data-style='header-one'>
          Heading One
        </MenuItem>
        <MenuItem onMouseDown={handleClose} data-style='header-two'>
          Heading Two
        </MenuItem>
        <MenuItem onMouseDown={handleClose} data-style='header-three'>
          Heading Three
        </MenuItem>
        <MenuItem onMouseDown={handleClose} data-style='header-four'>
          Heading Four
        </MenuItem>
        <MenuItem onMouseDown={handleClose} data-style='header-five'>
          Heading Five
        </MenuItem>
        <MenuItem onMouseDown={handleClose} data-style='header-six'>
          Heading Six
        </MenuItem>
      </Menu>
    </div>
  );
}
