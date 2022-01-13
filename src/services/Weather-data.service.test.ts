import { WeatherData } from '../interfaces/Weather-data.dto';
import { IWeatherDataService } from '../interfaces/Weather-data.service.interface';
import { WeatherDataService } from './Weather-data.service';

describe("validates WeatherDataService logic", () => {
    let service: IWeatherDataService;

    beforeEach(() => {
        service =  new WeatherDataService();
    });

    test('returns `tap aff` when temprature is equal or above 15', () => {
    
        const jsonData = [ 
                        {"temperature": 30, "location": "Greece"}, 
                        {"temperature": 30, "location": "Hawaii"}
                    ];
        let expectedResponse: WeatherData[] = [ 
            {temperature: 30, location: "Greece", status: 'taps aff'}, 
            {temperature: 30, location: "Hawaii", status: 'taps aff' }
        ];

        const weatherData = service.GetWeatherData(JSON.stringify(jsonData));

        expect(weatherData).toEqual(expectedResponse);
    });

    test('returns `tap Oan` is less or equal to 15.', () => {
        const jsonData = [ 
                        {"temperature": 12, "location": "Poland"}, 
                        {"temperature": 13, "location": "German"}
                    ];
        let expectedResponse: WeatherData[] = [ 
            {temperature: 12, location: "Poland", status: 'taps Oan'}, 
            {temperature: 13, location: "German", status: 'taps Oan' }
        ];

        const weatherData = service.GetWeatherData(JSON.stringify(jsonData));

        expect(weatherData).toEqual(expectedResponse);
    });
});