var React = require("react");
var ReactDOM = require("react-dom");
var KeyListener = require('./util/KeyListener.js');

$(document).ready(function (e) {
	ReactDOM.render(
		<h1 x={KeyListener.keyUp()}>Hey</h1>,
		$("main")[0]
	);
});
