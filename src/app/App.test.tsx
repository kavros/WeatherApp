import { render, screen } from '@testing-library/react';
import App from './App';

test('renders marketing title', () => {
  render(<App />);
  const title = screen.getByText(/Scotland's most accurate weather service/);
  expect(title).toBeInTheDocument();
});

test('uses the phrase /the weather is/', () => {
  render(<App />);
  const phrase = screen.getAllByText(/, the weather is/)[0];

  expect(phrase).toBeInTheDocument();
});
