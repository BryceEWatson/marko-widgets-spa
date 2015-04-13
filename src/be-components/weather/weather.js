var Promise = require('q');
var Client = require('node-rest-client').Client;

var Weather = {};

function getWeatherByCity(cityName) {
	var dataPromise = Promise.defer();
	client = new Client();
	args ={
	    
	};
	 
	client.get("http://api.openweathermap.org/data/2.5/weather?q="+cityName, args, 
        function(data, response){
	        // try {
	        	var data = JSON.parse(data);
	        	dataPromise.resolve(data);
	    	// } catch(e) {
	    	// 	console.log('getWeatherByCity response parse fail.')
	    	// 	//dataPromise.fail();
	    	// }
	});
	return dataPromise.promise;
}
Weather.getWeatherByCity = getWeatherByCity;
module.exports = Weather;