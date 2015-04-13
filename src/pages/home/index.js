'use strict';
var Promise = require('q');

module.exports = function(req, res, next) {

	function getData(params, callback) {
		require('src/be-components/weather/weather.js').getWeatherByCity(params.city)
		.then(function(data) {
			callback(data);
		}).fail(function(result) {
			console.log('fail: ' + result);
			//callback(result);
		});
	}

	function renderTemplate(data) {
		var template = require('marko').load(require.resolve('./template.marko'));
		template.render(data, res);
	}

	function handleRequest() {
		 var api = req.params.api;
		 if(typeof api !== 'undefined' && api === 'api') {
		 	getData({},function(model) {
		 		res.setHeader('Content-Type', 'text/json; charset=utf-8');
				res.end(JSON.stringify(model));
		 	});
		 } else {
		 	getData({},function(model) {
		 		res.setHeader('Content-Type', 'text/html; charset=utf-8');
			 	renderTemplate(model);
			 })
		 }
	}
	handleRequest();
}