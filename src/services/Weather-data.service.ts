import { WeatherData } from "./Weather-data.interface";
export interface IWeatherDataService{
    GetWeatherData(jsonData: string): WeatherData[];
}

export class WeatherDataService implements IWeatherDataService{
    public GetWeatherData(jsonData: string): WeatherData[] {
        let weatherData: WeatherData[] = JSON.parse(jsonData); 
        weatherData.map(x => x.status = x.temperature >= 15 ? 'taps aff': 'taps Oan');
        return weatherData;
    }
}