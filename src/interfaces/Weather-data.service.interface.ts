import { WeatherData } from "./Weather-data.dto";

export interface IWeatherDataService {
    GetWeatherData(jsonData: string): WeatherData[];
    //GetWeatherDataNew():  Promise<WeatherData[]> ;
}