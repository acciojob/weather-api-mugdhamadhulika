//your JS code here. If required.
function getweather(){
	const api_key = 'd0e0b07b4bf57d39d5d7b142ad87efe1';
	const city = 'London';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

	fetch(url)
		.then(res => res.json());
		.then(data=>{
			const weather = data.weather[0].main;
			document.getElementById('weatherData').innerText = `Current weather in London: ${weather}`;
		})
		.catch(error=>{
			console.log(`Error in fetching weather Data:`, error);
		})
}