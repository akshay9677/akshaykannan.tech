"use strict";

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Index() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    style: styles.btn,
    src: "https://image.flaticon.com/icons/svg/838/838479.svg"
  }));
}

var styles = {
  btn: {
    width: 50,
    height: 50,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    position: 'fixed',
    bottom: '5rem',
    right: '5rem'
  },
  btn2: {
    position: 'fixed',
    width: 50,
    height: 50,
    borderRadius: 25
  }
};