import React from 'react';
import { render } from '@testing-library/react';
import App from './app';

test("renders 'Doggo Search'", () => {
  const { getByText } = render(<App />);
  expect(getByText(/Doggo Search/i)).toBeInTheDocument();
});
