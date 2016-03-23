var React = require("react");

var Organ = React.createClass({
	getInitialState: function() {
		return {};
	}


	render: function() {
		return (
			var allKeys = TONES.map(function(el) {
				<li>{el}</li>
			});


			<ul>
				{allKeys}
			</ul>
		)
	};
});
