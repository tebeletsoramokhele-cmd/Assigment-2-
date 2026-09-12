import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the online CV', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: /TEBELETSO RAMOKHELE/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Professional Profile/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Education/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Skills/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Projects/i })).toBeInTheDocument();
});
