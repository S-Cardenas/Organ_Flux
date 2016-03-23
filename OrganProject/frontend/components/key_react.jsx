var React = require("react");
var KeyStore = require("../stores/key_store");
var AppDispatcher = require('../dispatcher/app_dispatcher');
var Note = require('../util/Note');
var KeyListener = require('../util/KeyListener');
var TONES = require('../constants/Tones');

var KeyReact = React.createClass({
	getInitialState: function() {
		return { keyBeingPressed: [] };
	},

	componentDidMount: function() {
		this.note = new Note(TONES[this.props.noteName]);

		KeyStore.addListener(this.registerPressedKeys);
		KeyListener.bindKeys();
	},

	registerPressedKeys: function() {
		// debugger
		this.setState({ keyBeingPressed: [KeyStore.keys()[0]]});
		debugger;
		if (this.state.keyBeingPressed.length) {
				if (this.state.keyBeingPressed[0] === this.props.noteName) {
					this.note.start();
				}
				else {
					this.note.stop();
				}
			}

	},

	render: function() {
		return (
			<span>{this.props.noteName}</span>
		);
	}

});

module.exports = KeyReact;
