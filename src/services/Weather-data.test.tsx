import { WeatherData } from './Weather-data.dto';
import { WeatherDataService } from './Weather-data.service';

test('returns `tap aff` for Grece and Hawaii', () => {
    const service = new WeatherDataService();
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
    const service = new WeatherDataService();
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