import { myContainer } from '../IoC.config';
import { WeatherData } from './Weather-data.dto';
import { IWeatherDataService } from './weather-data.interface';
import { WeatherDataService } from './Weather-data.service';

describe("validates WeatherDataService logic", () => {
    let service: IWeatherDataService;

    beforeEach(() => {
        service =  myContainer.get(WeatherDataService);
    });
    
    test('returns `tap aff` for Grece and Hawaii', () => {
    
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

    test('returns `tap Oan` for Poland and German', () => {
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