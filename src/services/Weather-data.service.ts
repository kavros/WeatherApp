import { injectable } from "inversify";
import { WeatherData } from "../interfaces/Weather-data.dto";
import { IWeatherDataService } from "../interfaces/Weather-data.service.interface";
import "reflect-metadata";

@injectable()
export class WeatherDataService implements IWeatherDataService {
    public GetWeatherData(jsonData: string): WeatherData[] {
        let weatherData: WeatherData[] = JSON.parse(jsonData); 
        weatherData.map(x => x.status = x.temperature >= 15 ? 'taps aff': 'taps Oan');
        return weatherData;
    }

    public async GetWeatherDataFromApi(): Promise<WeatherData[]> {        
        var url = 'https://localhost:5001/WeatherForecast';
        let response  = await fetch(url);        
        return response.json();
    }
}
