document.getElementById("sbm").addEventListener("click", function (event) {
  event.preventDefault();

  let city = document.getElementById("inp-city").value;
  let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=217d9466fcece181f108ef7574f237b4`;

  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.getElementById("weather").textContent = data.weather[0].main;

      let icon = document.getElementById("icon");

      let iconUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

      icon.src = iconUrl;
    })
    .catch((error) => {
      console.error('Error fetching weather data:', error);
      document.getElementById("weather").textContent = 'City not found';
      document.getElementById("icon").src = ''; 
    });
});