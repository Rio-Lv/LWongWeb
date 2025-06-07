import { render, screen } from '@testing-library/react';
import App from './App';

test('renders LWONG CONSULTING title', () => {
  render(<App />);
  const linkElement = screen.getByText(/LWONG CONSULTING/i);
  expect(linkElement).toBeInTheDocument();
});
