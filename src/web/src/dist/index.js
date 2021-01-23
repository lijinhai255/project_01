"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var App_1 = require("./App");
require("./index.scss");
var react_router_dom_1 = require("react-router-dom");
react_dom_1["default"].render(react_1["default"].createElement(react_1["default"].Fragment, null,
    react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement(App_1["default"], null))), document.getElementById('app'));
