function showweatherDetails(event) {
  event.preventDefault();

  const city = document.getElementById("city").value;
  const lon = document.getElementById("lon").value;
  const lat = document.getElementById("lat").value;
  const apiKey = "6e0a34a69f0c5581b6562cd9220f36be";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const apiUrlDetail = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  if (city) {
    fetch(apiUrl)
      .then((Response) => Response.json())
      .then((data) => {
        const weatherInfo = document.getElementById("weatherInfo");
        weatherInfo.innerHTML = `<h2> Weather in ${data.name} </h2>
                                <p> Temperature: ${data.main.temp} &#8451; </p>
                                <p> Weather: ${data.weather[0].description} &#8451; </p>`;
      })
      .catch((error) => {
        console.error("Error fetching weather:", error);
        const weatherInfo = document.getElementById("weatherInfo");
        weatherInfo.innerHTML = `<p>Gagal mengambil cuaca. Silakan coba lagi.</p>`;
      });
  } else {
    fetch(apiUrlDetail)
      .then((Response) => Response.json())
      .then((data) => {
        const weatherInfoDetail = document.getElementById("weatherInfoDetail");
        weatherInfoDetail.innerHTML = `<h2>Location Details</h2>
                                             <p>Lat: ${data.coord.lat}</p>
                                             <p>Lon: ${data.coord.lon}</p>
                                             <p>Location: ${data.name}</p>
                                             <p> Temperature: ${data.main.temp} &#8451; </p>
                                <p> Weather: ${data.weather[0].description} &#8451; </p>
                                `;
      })
      .catch((error) => {
        console.error("Error fetching weather:", error);
        const weatherInfoDetail = document.getElementById("weatherInfoDetail");
        weatherInfoDetail.innerHTML = `<p>Gagal mengambil cuaca. Silakan coba lagi.</p>`;
      });
  }
}

document
  .getElementById("weatherForm")
  .addEventListener("submit", showweatherDetails);
