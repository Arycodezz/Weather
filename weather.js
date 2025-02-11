const city = document.querySelector('#city');
const btn = document.querySelector('#btn');
const upper = document.querySelector('.weather-info');
btn.addEventListener('click', async function (e) {
    const Cty = city.value;
    const api_key = "94ece910efa5201ec915cee252338acf";
    try {
        const url = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${Cty}&appid=${api_key}&units=metric`);
        const icon = url.data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        upper.innerHTML = `<h3>${Cty} Weather is: <span style = "color: blue"> ${url.data.main.temp}  degrees</span></h3>` +
            `<p>Weather Condition: <span style = "color: red">${url.data.weather[0].main}</span></p>` +
            `<p>Humidity: <span style = "color: yellow">${url.data.main.humidity}%</span></p>` +
            `<img src = "${iconUrl}" alt = "Weather Icon">`;
        city.value = "";
    }
    catch (e) {
        upper.innerHTML = `<h5>Your ${Cty} city is invalid.Pls enter a valid city</h5>`;
    }
})
