import { injectable } from "inversify";
import { WeatherData } from "../interfaces/Weather-data.dto";
import { IWeatherDataService } from "../interfaces/Weather-data.service.interface";
import jsonData from './weather-data.json'

@injectable()
export class WeatherDataService implements IWeatherDataService {
    public GetWeatherData(jsonData: string): WeatherData[] {
        let weatherData: WeatherData[] = JSON.parse(jsonData); 
        weatherData.map(x => x.status = x.temperature >= 15 ? 'taps aff': 'taps Oan');
        return weatherData;
    }

    public async GetWeatherDataNew(): Promise<WeatherData[]> {
        
        var url = 'https://localhost:44363/WeatherForecast';
        let response  = await fetch(url);/*.then((response) => response.json())
          .then(
              data => 
                { 
                    weatherData = JSON.parse(JSON.stringify(data));
                    weatherData.map(x => x.status = x.temperature >= 15 ? 'taps aff': 'taps Oan');
                }
            )*
          .catch((error) => console.log(error));*/
        //let weatherData: WeatherData[] = JSON.parse(JSON.stringify(jsonData));
        //weatherData.map(x => x.status = x.temperature >= 15 ? 'taps aff': 'taps Oan');

//        response.json().then(data => console.log(data));
//        weatherData = JSON.parse(JSON.stringify(response.json()));
   
 //       weatherData.map(x => x.status = x.temperature >= 15 ? 'taps aff': 'taps Oan');
        let weatherData = response.json();
        return weatherData;
    }
}
