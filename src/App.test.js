import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Jenkins App', () => {
  render(<App />);
  const linkElement = screen.getByText(/This is my Jenkins App/i);
  expect(linkElement).toBeInTheDocument();
});
