var KeyActions = require('../action/key_actions');

var Mapping = {
	65: 'X',
	83: 'Y'
};


var KeyListener = {

	keyUp: function() {
		$(document).on("keyup", function(e) {
			KeyActions.keyPressed(Mapping[e.keyCode]);
		});
	},

	keyDown: function() {
		$(document).on("keydown", function(e) {
			KeyActions.keyReleased(Mapping[e.keyCode]);
		});

	},

	bindKeys: function () {
	  this.keyUp();
		this.keyDown();
	}

};

module.exports = KeyListener;
