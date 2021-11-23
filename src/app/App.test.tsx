import { render, screen } from '@testing-library/react';
import App from './App';

test('renders marketing title', () => {
  render(<App />);
  const title = screen.getByText(/Scotland's most accurate weather service/);
  expect(title).toBeInTheDocument();
});
