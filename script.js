
const apiKey = "c9c952a5baf085db8d594a0771fe6638";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.querySelector('.header input');
  const searchBtn = document.querySelector('.searchBtn');

  const weatherIcon = document.querySelector('.weatherlogo');

  async function checkWeather(city) {
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
    const data = await response.json();

    console.log(data);

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector('.forcast').innerHTML = data.weather[0].description;
    document.querySelector('.windSpeed').innerHTML = `${data.wind.speed} km/h`;
    document.querySelector('.chances').innerHTML = `${data.main.feels_like}%`;
    document.querySelector('.humidity').innerHTML = `${data.main.humidity}%`;

    if(data.weather[0].main == 'Clouds'){
        weatherIcon.src = "assets/clouds.png";
    } else if(data.weather[0].main == 'Clear'){
        weatherIcon.src = "assets/clear.png";
    } else if(data.weather[0].main == 'Drizzle'){
        weatherIcon.src = "assets/drizzle.png";
    } else if(data.weather[0].main == 'Mist'){
        weatherIcon.src = "assets/mist.png";
    } else if(data.weather[0].main == 'Rain'){
        weatherIcon.src = "assets/rain.png";
    }else if(data.weather[0].main == 'Snow'){
        weatherIcon.src = "assets/snow.png";
    }else if (data.weather[0].main == 'Wind'){
        weatherIcon.src = "assets/wind.png";
    }else if(data.weather[0].main == 'Humidity'){
        weatherIcon.src = "assets/humidity.png";
    }else{
        weatherIcon.src =" ";
    }

  }


  searchBtn.addEventListener("click", () => {
    checkWeather(searchInput.value);
  });
});
