var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/app_dispatcher');
var KeyConstants = require('../constants/key_constants');

var KeyStore = new Store(AppDispatcher);

var _keys = [];
var _callbacks = [];

var resetKeys = function (key) {
	_keys = [];
	_keys.push(key);

};

KeyStore.keys = function() {
	return _keys.slice();
};

KeyStore.__onDispatch = function (payload) {
	switch (payload.actionType) {
		case KeyConstants.KEY_PRESSED:
			//do some stuff
			resetKeys(payload.noteName);
			KeyStore.__emitChange();
			break;

		case KeyConstants.KEY_RELEASED:
			// debugger;
			_keys = [];
			KeyStore.__emitChange();
			break;
	}

};


module.exports = KeyStore;
