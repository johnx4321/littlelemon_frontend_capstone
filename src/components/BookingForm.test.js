import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
import { initializeTimes } from '../utils/updateTimes';

test('Renders the BookingForm date label', () => {
  render(
    <BookingForm
      availableTimes={initializeTimes()}
      dispatch={jest.fn()}
      submitForm={jest.fn()}
    />
  );
  const labelElement = screen.getByText('Choose date');
  expect(labelElement).toBeInTheDocument();
});
