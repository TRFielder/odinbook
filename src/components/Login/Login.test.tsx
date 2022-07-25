import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './index';

test('renders hello profile text', () => {
  //Expect the button to say "Login with Facebook"
  render(<Login />);
  const buttonElement = screen.getByText(/Login with Facebook/i);
  expect(buttonElement).toBeInTheDocument();
});
