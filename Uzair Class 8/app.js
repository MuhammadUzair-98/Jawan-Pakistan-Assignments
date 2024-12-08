const api_key = "59f5462b42ee5ee9e71eefeff05a6fcd";
const input = document.getElementById("location-input");
const showData = document.getElementById("showData")

const weatherApi = async () => {
    const searchWeather = input.value 
    showData.innerHTML = `<div class="loader"></div>`
    const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${searchWeather}&appid=${api_key}&units=metric`

    try {
        const fetchApiResponse = await fetch(api_url);
        const jsonResponse = await fetchApiResponse.json();
        console.log(jsonResponse)
        showUi(jsonResponse)

    }catch(err) {
        console.log(err.message)
    }

}

const showUi = (data) => {
    showData.innerHTML = `<div class="weather-info">
        <div class="temperature">
          <p id="temperature">${data.main.temp} °C</p>
        </div>
      </div>
      
      <div class="additional-info">
        <p id="humidity">Humidity: ${data.main.humidity}: %</p>
        <p id="wind">Wind: ${data.wind.speed} km/h</p>
      </div>`
}
