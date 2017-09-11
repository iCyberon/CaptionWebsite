"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("next/dist/lib/link.js");

var _link2 = _interopRequireDefault(_link);

var _Title = require("./Title");

var _Title2 = _interopRequireDefault(_Title);

var _Button = require("./Button");

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      download = _ref.download;
  return _react2.default.createElement("header", {
    "data-jsx": 3843127833
  }, _react2.default.createElement(_Title2.default, { title: title }), subtitle && _react2.default.createElement("p", {
    "data-jsx": 3843127833
  }, subtitle), download && _react2.default.createElement("div", {
    "data-jsx": 3843127833
  }, _react2.default.createElement(_link2.default, { href: "/thanks" }, _react2.default.createElement("a", {
    "data-jsx": 3843127833
  }, _react2.default.createElement(_Button2.default, { value: "Download for Mac" }))), _react2.default.createElement("small", {
    "data-jsx": 3843127833
  }, "Coming soon for Windows & Linux.")), _react2.default.createElement(_style2.default, {
    styleId: 3843127833,
    css: "header[data-jsx=\"3843127833\"]{text-align:center}p[data-jsx=\"3843127833\"]{font-size:46px;font-weight:200;color:rgba(0,0,0,0.6)}small[data-jsx=\"3843127833\"]{display:block;font-size:12px;color:rgba(0,0,0,0.5)}"
  }));
};

exports.default = Header;