import React, { useEffect, useState } from "react";
import axios from 'axios';

function Weather() {
    const [city, setCity] = useState(null)
    const [Weather, setWeather] = useState('')
    const key = '265fd091148d1b92fff8d35ec04de0cc'

    const fetchwheather = async () => {

        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=es`);

        setWeather(response.data);

    }
    console.log(Weather)


    return (
        <div>
            <input type='text'
                placeholder='busca tu ciudad'
                value={city}
                onChange={(e) => setCity(e.target.value)}>
            </input>
            <button onClick={fetchwheather}>Buscar</button>
            {Weather && (
                <div>
                    <h1>{Weather.name}</h1>
                    <h1>{Weather.main.temp}</h1>
                    <h1>{Weather.main.humidity}</h1>
                    <h1>{Weather.weather[0].description}</h1>
                    <h1>{Weather.sys.country}</h1>
                </div>

            )}

        </div>)

}
export default Weather;