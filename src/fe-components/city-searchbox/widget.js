function Widget() {
	var _this = this;
}

Widget.prototype = {
	handleFormSubmit: function(event,el) {
		event.preventDefault();
		var inputTxt = this.$('#inputTxt').val()
		console.log('inputTxt: '+inputTxt);
		this.emit('searchSubmit', { value: inputTxt });
	}
}

exports.Widget = Widget;