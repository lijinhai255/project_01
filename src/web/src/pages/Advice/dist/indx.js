"use strict";
exports.__esModule = true;
var react_1 = require("react");
function indx(props) {
    return (react_1["default"].createElement("div", null,
        "\u8FD9\u662F\u4E00\u4E2A\u9875\u9762 \u90FD\u662F\u5218\u5FB7\u534E",
        react_1["default"].createElement("p", { onClick: function () { return props.history.push("/a"); } }, "12121212")));
}
exports["default"] = indx;
