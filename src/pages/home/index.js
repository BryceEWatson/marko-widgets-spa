'use strict';
var Promise = require('q');

module.exports = function(req, res, next) {

	function getData() {
		console.log('here');
		var dataPromise = Promise.defer();
		require('src/be-components/weather/weather.js').getWeatherByCity('Vancouver')
		.then(function(data) {
			var dataResponse = {
				data: data
			};
			//console.log(data.coord.lon);
			dataPromise.resolve(dataResponse);
		});
		return dataPromise.promise;
	}

	function renderTemplate(data) {
		var template = require('marko').load(require.resolve('./template.marko'));
		template.render(data, res);
	}

	function handleRequest() {
		 var api = req.params.api;
		 console.log(api);
		 getData().then(function(model) {
			 if(typeof api !== 'undefined' && api === 'api') {
				res.setHeader('Content-Type', 'text/json; charset=utf-8');
				res.end(JSON.stringify(model));
			 } else {
			 	res.setHeader('Content-Type', 'text/html; charset=utf-8');
			 	renderTemplate(model.data);
			 }
		});
	}
	handleRequest();
}