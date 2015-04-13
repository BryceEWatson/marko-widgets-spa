function Widget() {

}

Widget.prototype = {
	handleFormSubmit: function(event,el) {
		event.preventDefault();
		var inputTxt = this.$('#inputTxt').val()
		console.log('inputTxt: '+inputTxt);
	}
}

exports.Widget = Widget;