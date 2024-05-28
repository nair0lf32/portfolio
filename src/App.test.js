import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import App from './App';

test('renders learn react link', () => {
  render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
