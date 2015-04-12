var Promise = require('q');
var Client = require('node-rest-client').Client;

var Weather = {};

function getWeatherByCity(cityName) {
	console.log('here2');
	var dataPromise = Promise.defer();
	client = new Client();
	args ={
	    
	};
	 
	client.get("http://api.openweathermap.org/data/2.5/weather?q="+cityName, args, 
        function(data, response){
	        // parsed response body as js object 
	        console.log('data: ' + data);
	        // raw response 
	        console.log('response: ' + response);
	        // try {
	        	dataPromise.resolve(JSON.parse(data));
	    	// } catch(e) {
	    	// 	console.log('getWeatherByCity response parse fail.')
	    	// 	//dataPromise.fail();
	    	// }
	});
	return dataPromise.promise;
}
Weather.getWeatherByCity = getWeatherByCity;
module.exports = Weather;