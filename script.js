let searchBtn = document.getElementById("searchBtn");


async function fetchWeather(city = "nyc"){
    let inputCity = document.getElementById("search").value.trim();
    if(inputCity){
        city = inputCity
    }
    let apiKey = "1ac05829336b4c7ebef125326252602"; // enter your api key
    let api = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
  
    // sabhi fealds
    let currTemp = document.querySelector(".currTemp");
    let cityName = document.querySelector(".city");
    let currentcondition = document.querySelector(".currentcondition");
    let feelsLikeVal = document.querySelector(".feelsLikeVal");
    let humidityVal = document.querySelector(".humidityVal");
    let uvVal = document.querySelector(".uvVal");
    let windKphVal = document.querySelector(".windKphVal");
    let windGustKphVal = document.querySelector(".windGustKphVal");
    let dewPointVal = document.querySelector(".dewPointVal");
    let pressureVal = document.querySelector(".pressureVal");
    let cloudCoverVal = document.querySelector(".cloudCoverVal");
    let visibilityVal = document.querySelector(".visibilityVal");
    let lastUpdatedVal = document.querySelector(".lastUpdatedVal");
  
    console.log(search);
    console.log(api);
  
    // api se data fetch karana
    let response = await fetch(api);
    let data = await response.json();
    console.log(data);
  
    // data ko show karana
    currTemp.innerHTML = `${data.current.temp_c}<span>&degC</span>`;
    cityName.innerHTML = `<p>${data.location.name}</p><span class="countryAndReg">${data.location.region}, ${data.location.country}</span>`;
    currentcondition.innerHTML = `<img src="${data.current.condition.icon}" alt="">${data.current.condition.text}`;
    feelsLikeVal.innerHTML = `${data.current.feelslike_c}&degC`;
    humidityVal.innerHTML = `${data.current.humidity}%`;
    feelsLikeVal.innerHTML = `${data.current.feelslike_c}&degC`;
    uvVal.innerHTML = `${data.current.uv}%`;
    windKphVal.innerHTML = `${data.current.wind_dir} ${data.current.wind_kph} kp/h`;
    windGustKphVal.innerHTML = `${data.current.gust_mph}%`;
    dewPointVal.innerHTML = `${data.current.dewpoint_c}&degC`;
    pressureVal.innerHTML = `${data.current.pressure_mb} mb`;
    cloudCoverVal.innerHTML = `${data.current.cloud}%`;
    visibilityVal.innerHTML = `${data.current.vis_km}km`;
    lastUpdatedVal.innerHTML = `${data.current.last_updated}`;
}

searchBtn.addEventListener("click", async () => {
    fetchWeather()
});

fetchWeather()