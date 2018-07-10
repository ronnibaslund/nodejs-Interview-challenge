const WeatherData = require('../../data/weather.json');

class WeatherController {

  static async getWeather (req, res) {
		/*
		Loop over all weather data and every time the state change from good to bad or bad to good, 
		create a new object and add it the items

		Every new object you add to "items" need to have a start time and an end time.

		Good:  "waveheigth" is less then 1.29
		Bad:  "waveheigth" is greater or equal to 1.3

		example of an object:

		[{
			"startTime": timestep,
			"endTime": timestep,
			"state": "good" or "bad"
		}]
		*/
		
		let items = [];
		
		// TODO: Write your implementation here

		try {
			res.json(items);
		} catch (e) {
			console.error(e.message);
		}
  }
}

module.exports = WeatherController;
