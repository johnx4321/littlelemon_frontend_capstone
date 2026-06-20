import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import Main from './Main';
import { initializeTimes, updateTimes } from './utils/updateTimes';

test('renders Little Lemon heading', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading', { level: 1, name: /little lemon/i });
  expect(headingElement).toBeInTheDocument();
});

test('renders controlled booking form fields', () => {
  render(
    <MemoryRouter initialEntries={['/booking']}>
      <Main />
    </MemoryRouter>
  );

  expect(screen.getByRole('heading', { name: /reserve a table/i })).toBeInTheDocument();
  expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /make your reservation/i })).toBeInTheDocument();
});

test('updateTimes returns the same available times regardless of date', () => {
  const initialTimes = initializeTimes();
  const updatedTimes = updateTimes(initialTimes, {
    type: 'UPDATE_TIMES',
    date: '2026-06-20',
  });

  expect(updatedTimes).toEqual(initializeTimes());
});

test('updateTimes removes a booked slot from available times', () => {
  const initialTimes = initializeTimes();
  const updatedTimes = updateTimes(initialTimes, {
    type: 'BOOK_SLOT',
    payload: '18:00',
  });

  expect(updatedTimes).not.toContain('18:00');
  expect(updatedTimes).toHaveLength(initialTimes.length - 1);
});
