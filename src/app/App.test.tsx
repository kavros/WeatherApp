import { render, screen } from '@testing-library/react';
import App, { InputProps } from './App';

//TODO: experiment with mock service
let props = { 
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
