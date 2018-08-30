import React, { Component } from 'react';

class WeatherDisplay extends Component {

    constructor() {
        super();
        this.state = {
            weatherData: null
        }
    }

    componentDidMount() {
        const zip = this.props.zip;
        const URL = "https://api.openweathermap.org/data/2.5/weather?q=" +
            zip +
            "&appid=422cb3d906b20d5f9b7627b948a4e1f4&units=imperial";
        fetch(URL)
            .then(res => res.json())
            .then(json => {
                this.setState({ weatherData: json })
            })
    }

    render() {
        const weatherData = this.state.weatherData;
        if (!weatherData) return <div>Loading</div>
        const weather = weatherData.weather[0];
        const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
        return (
            <div>
                <h1>
                    {weather.main} in {weatherData.name}
                    <img src={iconUrl} alt={weatherData.description} />
                </h1>
                <p> Current: {weatherData.main.temp} </p>
                <p> High: {weatherData.main.temp_max} </p>
                <p> Low: {weatherData.main.temp_min} </p>
                <p> Wind Speed: {weatherData.wind.speed} mi/hr</p>
            </div>
        );
    }
}

export default WeatherDisplay;