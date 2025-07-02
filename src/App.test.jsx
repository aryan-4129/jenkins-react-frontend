import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';  // 👈 Add this!
import App from './App';
import '@testing-library/jest-dom';

test('renders app', () => {
  render(<App />);
  expect(screen.getByText(/vite \+ react/i)).toBeInTheDocument();
});
i
