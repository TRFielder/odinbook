import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './index';

test('Login button renders with correct href', () => {
  //Expect the button to link to backend auth endpoint
  render(<Login />);
  const loginButton = screen.getByText(/Login with Facebook/i);
  expect(loginButton).toHaveAttribute('href', 'https://localhost:3000/api/user/auth/facebook');
});
