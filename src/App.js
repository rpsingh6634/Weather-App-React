import React, { useState } from 'react';
import { fetchWeather } from './api/fetchWeather';
import './App.css';

const App = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    
    const search = async (e) => {
        if(e.key === 'Enter') {
            const data = await fetchWeather(query);

            setWeather(data);
            setQuery('');
        }
    }

    return (
        <div className="main-container">
            <input type="text"className="search"placeholder="Search"value={query}onChange={(e) => setQuery(e.target.value)}onKeyPress={search}/>
            {weather.main && (
                <div className="city">
                    <h2 className="city-name">
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                    <div className="city-temp">
                        {Math.round(weather.main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                    <div className="info">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                        <p>{weather.weather[0].description}</p>
                    </div>
                    <div className="flex">
                    <div className="city-temp">
                        {Math.round(weather.main.temp_max)}
                        <sup>&deg;C</sup>
                        <p>Max Temp</p>
                    </div>
                    &emsp;&emsp;&emsp;&emsp;
                    <div className="city-temp">
                        {Math.round(weather.main.temp_min)}
                        <sup>&deg;C</sup>
                        <p>Min Temp</p>
                    </div>
                    &emsp;&emsp;&emsp;&emsp;
                    <div className="city-temp">
                        {Math.round(weather.main.humidity)}
                        <sup>%</sup>
                        <p>Humidity</p>
                    </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;