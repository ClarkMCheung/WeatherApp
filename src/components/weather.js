import React from 'react';
import './styles.css';
import { Card } from 'semantic-ui-react'
import moment from 'moment';

const WeatherCard = ({ weatherData }) => {
    let tempF = (weatherData.main.temp * 9/5) + 32
    return(
    <Card>
        <Card.Content>
            <div className="main">
                <p className="header">{weatherData.name}</p>
                <div className="flex">
                    <p className="day">Day: {moment().format('dddd')}</p>
                    <p className="day">{moment().format('LL')}</p>
                </div>

                <div className="flex">
                    <p className="temp">Temprature: {tempF} &deg;F</p>
                    <p className="temp">Humidity: {weatherData.main.humidity} %</p>
                </div>
            </div>
        </Card.Content>
    </Card>
    )}

export default WeatherCard;