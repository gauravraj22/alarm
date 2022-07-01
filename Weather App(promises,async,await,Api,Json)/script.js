const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
const form = document.querySelector("form");
const search = document.getElementById("search");
const weather = document.getElementById("weather");

 const  getWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);//await for fetching url and then console.log response
    // console.log(response);

    //now changing the response in json data
    const data = await response.json()
    return ShowWeather(data)
    // console.log(data);
 }

 function ShowWeather(data) {
    // console.log(data);
    // console.log(data.weather[0].icon)
    // console.log(data.weather[0].main);
    // console.log(data.main.temp);
    weather.innerHTML = `
    <div>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
    </div>
    <div>
      <h2>${data.main.temp}</h2>
      <h4>${data.weather[0].main}</h4>
    </div>`;
}

form.addEventListener("submit",function(event){
    getWeather(search.value)
    // console.log(search.value);
    event.preventDefault();
});

