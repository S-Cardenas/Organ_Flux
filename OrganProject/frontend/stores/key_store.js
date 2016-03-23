var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/app_dispatcher');

var KeyStore = new Store(AppDispatcher);

var _keys = [];
var _callbacks = [];

var resetKeys = function (key) {
	_keys = [];
	_keys.push(key);

};

Keystore.__onDispatch = function (payload) {
	switch (payload.actionType) {
		case KeyConstants.KEY_PRESSED:
			//do some stuff
			resetKeys(payload.noteName);
			KeyStore.emitChange();
			break;

		case KeyConstants.KEY_RELEASED:
			_keys = [];
			KeyStore.emitChange();
			break;
	}

};


module.exports = KeyStore;
