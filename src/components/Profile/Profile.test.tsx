import React from 'react';
import { render, screen } from '@testing-library/react';
import Profile from './index';

test('renders hello profile text', () => {
  render(<Profile />);
  const textElement = screen.getByText(/Hello/i);
  expect(textElement).toBeInTheDocument();
});
