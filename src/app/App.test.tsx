import { render, screen } from '@testing-library/react';
import { WeatherDataService } from '../services/Weather-data.service';
import App, { InputProps } from './App';

let props = { 
  weatherService : new WeatherDataService(),
  name : "Scotland's" 
} as InputProps;

test('renders marketing title', () => {
  render(<App {...props} />);
  const title = screen.getByText(/Scotland's most accurate weather service/);
  expect(title).toBeInTheDocument();
});

test('uses the phrase /the weather is/', () => {
  render(<App {...props} />);
  const phrase = screen.getAllByText(/, the weather is/)[0];

  expect(phrase).toBeInTheDocument();
});
