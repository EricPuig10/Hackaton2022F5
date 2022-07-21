import { render, screen } from '@testing-library/react';

import { Footer } from './components/Footer/Footer';
import { NavBar } from './components/NavBar/NavBar';


test('footer ok', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/Copyright/i);
  expect(linkElement).toBeInTheDocument();
});

test('logo visible', () => {
  render(<NavBar />);
  const linkElement = screen.getByText(/LocalArtIsT/i);
  expect(linkElement).toBeInTheDocument();
});
