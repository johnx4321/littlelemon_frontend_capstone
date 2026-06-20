import { fetchAPI } from '../api';
import { initializeTimes, updateTimes } from './updateTimes';

test('initializeTimes returns available times for today from the API', () => {
  const result = initializeTimes();

  expect(Array.isArray(result)).toBe(true);
  result.forEach((time) => {
    expect(time).toMatch(/^\d{1,2}:\d{2}$/);
  });
});

test('updateTimes fetches available times for the selected date', () => {
  const result = updateTimes([], {
    type: 'UPDATE_TIMES',
    date: '2026-06-20',
  });

  expect(Array.isArray(result)).toBe(true);
  expect(result).toEqual(fetchAPI(new Date(2026, 5, 20)));
});

test('updateTimes returns different times for different dates', () => {
  const firstDateTimes = updateTimes([], {
    type: 'UPDATE_TIMES',
    date: '2026-06-20',
  });
  const secondDateTimes = updateTimes([], {
    type: 'UPDATE_TIMES',
    date: '2026-06-21',
  });

  expect(firstDateTimes).not.toEqual(secondDateTimes);
});

test('updateTimes removes a booked slot from available times', () => {
  const state = initializeTimes();
  const bookedTime = state[0];

  const result = updateTimes(state, {
    type: 'BOOK_SLOT',
    payload: bookedTime,
  });

  expect(result).not.toContain(bookedTime);
  expect(result).toHaveLength(state.length - 1);
});
