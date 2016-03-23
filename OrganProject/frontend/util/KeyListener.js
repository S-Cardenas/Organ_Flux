var KeyActions = require('../actions/key_actions');

var Mapping = {
	65: 'a',
	83: 's'
};


var KeyListener = {

	keyUp: function() {
		$(document).on("keyup", function(e) {
			KeyActions.keyReleased(Mapping[e.keyCode]);
		});
	},

	keyDown: function() {
		$(document).on("keydown", function(e) {
			KeyActions.keyPressed(Mapping[e.keyCode]);
		});

	},

	bindKeys: function () {
	  this.keyUp();
		this.keyDown();
	}

};

module.exports = KeyListener;
