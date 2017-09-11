"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Layout = require("../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _Header = require("../components/Header");

var _Header2 = _interopRequireDefault(_Header);

var _Video = require("../components/Video");

var _Video2 = _interopRequireDefault(_Video);

var _Footer = require("../components/Footer");

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Index = function Index() {
  return _react2.default.createElement(_Layout2.default, null, _react2.default.createElement(_Header2.default, {
    title: "Caption",
    subtitle: "Find the right subtitles. Easy.",
    download: true
  }), _react2.default.createElement(_Video2.default, null), _react2.default.createElement(_Footer2.default, null));
};

exports.default = Index;