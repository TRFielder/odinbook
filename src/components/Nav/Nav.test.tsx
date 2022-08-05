import React from 'react';
import { render, screen } from '@testing-library/react';
import Nav from './index';

test('Navbar renders all expected links', () => {
  render(<Nav />);
  const Home = screen.getByText(/Home/i);
  const Friends = screen.getByText(/Friends/i);
  const Profile = screen.getByText(/Profile/i);

  expect(Home).toBeInTheDocument;
  expect(Friends).toBeInTheDocument;
  expect(Profile).toBeInTheDocument;
});
