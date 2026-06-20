import * as api from '../api';
import { initializeTimes, updateTimes } from './updateTimes';

afterEach(() => {
  jest.restoreAllMocks();
});

test('initializeTimes returns a non-empty array of available booking times from fetchAPI', () => {
  const mockTimes = ['17:00', '18:00', '19:00', '20:00'];
  const fetchAPISpy = jest.spyOn(api, 'fetchAPI').mockReturnValue(mockTimes);

  const result = initializeTimes();

  expect(fetchAPISpy).toHaveBeenCalledTimes(1);
  expect(fetchAPISpy).toHaveBeenCalledWith(expect.any(Date));
  expect(result).toEqual(mockTimes);
  expect(result.length).toBeGreaterThan(0);
});

test('updateTimes returns available times for the selected date from fetchAPI', () => {
  const selectedDate = '2026-06-20';
  const mockTimes = ['17:30', '19:00', '20:30', '21:00'];
  const fetchAPISpy = jest.spyOn(api, 'fetchAPI').mockReturnValue(mockTimes);

  const result = updateTimes([], {
    type: 'UPDATE_TIMES',
    date: selectedDate,
  });

  expect(fetchAPISpy).toHaveBeenCalledTimes(1);
  expect(fetchAPISpy).toHaveBeenCalledWith(new Date(2026, 5, 20));
  expect(result).toEqual(mockTimes);
  expect(result.length).toBeGreaterThan(0);
});

test('updateTimes removes a booked slot from available times', () => {
  const state = ['17:00', '18:00', '19:00'];
  const bookedTime = '18:00';

  const result = updateTimes(state, {
    type: 'BOOK_SLOT',
    payload: bookedTime,
  });

  expect(result).not.toContain(bookedTime);
  expect(result).toHaveLength(state.length - 1);
});
