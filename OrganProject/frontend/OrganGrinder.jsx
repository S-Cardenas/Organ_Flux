var React = require("react");
var ReactDOM = require("react-dom");
var KeyListener = require('./util/KeyListener.js');
var KeyReact = require('./components/key_react.jsx');

$(document).ready(function (e) {
	ReactDOM.render(
		(<div>
		<KeyReact noteName='a'></KeyReact>
		<KeyReact noteName='s'></KeyReact>
		</div>),
		$("main")[0]
	);
});
