import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import BookingPage from './components/BookingPage';

test('renders Little Lemon heading', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading', { level: 1, name: /little lemon/i });
  expect(headingElement).toBeInTheDocument();
});

test('renders controlled booking form fields', () => {
  render(
    <MemoryRouter>
      <BookingPage />
    </MemoryRouter>
  );

  expect(screen.getByRole('heading', { name: /reserve a table/i })).toBeInTheDocument();
  expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /make your reservation/i })).toBeInTheDocument();
});
