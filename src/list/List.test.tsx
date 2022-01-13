import { render, screen } from '@testing-library/react';
import { IWeatherDataService } from '../interfaces/Weather-data.service.interface';
import { WeatherDataContext } from '../providers/weather-data.provider';
import { WeatherDataService } from '../services/Weather-data.service';
import List, { InputProps } from './List';

let props = { 
  name : "Scotland's" 
} as InputProps;

test('renders marketing title', () => {
  render(<List {...props} />);
  const title = screen.getByText(/Scotland's most accurate weather service/);
  expect(title).toBeInTheDocument();
});

function renderList(theService: IWeatherDataService) {
  return render(
    <WeatherDataContext.Provider value={{service: theService}}>
      <List {...props}/>
    </WeatherDataContext.Provider>
  );
}

test('uses the phrase /the weather is/', () => {

  renderList(new WeatherDataService());

  const phrase = screen.getAllByText(/, the weather is/)[0];

  expect(phrase).toBeInTheDocument();
});
