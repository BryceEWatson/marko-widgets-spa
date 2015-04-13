function Widget(config) {

}

Widget.prototype = { 
	handleSearchSubmit: function(event, el) {
		console.log('handleSearchSubmit called');
	}
}

exports.Widget = Widget;