import { WeatherData } from "./Weather-data.dto";
import { IWeatherDataService } from "./weather-data.interface";

export class WeatherDataService implements IWeatherDataService {
    public GetWeatherData(jsonData: string): WeatherData[] {
        let weatherData: WeatherData[] = JSON.parse(jsonData); 
        weatherData.map(x => x.status = x.temperature >= 15 ? 'taps aff': 'taps Oan');
        return weatherData;
    }
}