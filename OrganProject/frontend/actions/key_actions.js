var AppDispatcher = require('../dispatcher/app_dispatcher');

var KeyActions = {
	keyPressed: function(note) {
		var action = {
			actionType: "KEY_PRESSED",
			noteName: note
		};
		AppDispatcher.dispatch(action);
	},

	keyReleased: function(note) {
		var action = {
			actionType: "KEY_RELEASED",
			noteName: note
		};
		AppDispatcher.dispatch(action);
	}
};
