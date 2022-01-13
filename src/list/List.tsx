import { useContext } from 'react';
import './List.css';
import { WeatherData } from '../interfaces/Weather-data.dto';
import jsonData from '../services/weather-data.json'
import { WeatherDataContext } from '../providers/weather-data.provider';
import React from 'react';

export interface InputProps {
  name: string;
  }

const List: React.FunctionComponent<InputProps> = (props) => {
  let weatherService = useContext(WeatherDataContext);
  let weatherData: WeatherData[] | undefined =  weatherService
    .service?.GetWeatherData(JSON.stringify(jsonData));
  return (
    <div className="List" >
      <div className="List-header">
        <h2> {props.name} most accurate weather service</h2>
        <p>
          {
            weatherData?.map((d, idx) => 
            { return (<li key={idx}> {d.location + ', the weather is ' + d.status} </li>) })
          }
        </p>
      </div>
    </div>
  );
}

export default List;
