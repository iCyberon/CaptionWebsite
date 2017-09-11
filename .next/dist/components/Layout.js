"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Layout = function Layout(_ref) {
  var children = _ref.children;
  return _react2.default.createElement("main", {
    "data-jsx": 3854319246
  }, children, _react2.default.createElement(_style2.default, {
    styleId: 3854319246,
    css: "html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}body{font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto, Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\", \"Segoe UI Symbol\";line-height:1.6;margin:0;font-size:16px;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;background:url(\"/static/images/bg.jpg\") no-repeat center center;background-size:cover}a{text-decoration:none;color:#0095ff;-webkit-transition:opacity 0.2s ease;transition:opacity 0.2s ease}a:hover{opacity:0.6}ol,ul{list-style:none}table{border-collapse:collapse;border-spacing:0}main{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;max-width:660px;min-height:100vh;margin:0 auto;padding:60px 20px 20px 20px}@media (max-width:550px){main{padding:32px 20px}}"
  }));
};

exports.default = Layout;