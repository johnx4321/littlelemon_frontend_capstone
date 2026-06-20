import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

const mockTimes = ['17:00', '18:00', '19:00'];

const getSubmitButton = () => screen.getByRole('button', { name: 'On Click' });

const getTodayString = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const getYesterdayString = () => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const year = yesterday.getFullYear();
  const month = String(yesterday.getMonth() + 1).padStart(2, '0');
  const day = String(yesterday.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const renderBookingForm = (props = {}) => {
  const submitForm = jest.fn();
  const dispatch = jest.fn();

  render(
    <BookingForm
      availableTimes={mockTimes}
      dispatch={dispatch}
      submitForm={submitForm}
      {...props}
    />
  );

  return { submitForm, dispatch };
};

describe('BookingForm static content', () => {
  test('renders the BookingForm date label', () => {
    renderBookingForm();
    expect(screen.getByText('Choose date')).toBeInTheDocument();
  });
});

describe('BookingForm HTML5 validation attributes', () => {
  test('associates each label with its form control using htmlFor and id', () => {
    renderBookingForm();

    expect(screen.getByLabelText(/choose date/i)).toHaveAttribute('id', 'res-date');
    expect(screen.getByLabelText(/choose time/i)).toHaveAttribute('id', 'res-time');
    expect(screen.getByLabelText(/number of guests/i)).toHaveAttribute('id', 'guests');
    expect(screen.getByLabelText(/occasion/i)).toHaveAttribute('id', 'occasion');
  });

  test('applies required and min attributes to the date field', () => {
    renderBookingForm();

    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toBeRequired();
    expect(dateInput).toHaveAttribute('min', getTodayString());
  });

  test('applies required attribute to the time field', () => {
    renderBookingForm();

    const timeSelect = screen.getByLabelText(/choose time/i);
    expect(timeSelect).toBeRequired();
  });

  test('applies required, min, max, and step attributes to the guests field', () => {
    renderBookingForm();

    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toBeRequired();
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
    expect(guestsInput).toHaveAttribute('step', '1');
  });

  test('does not require the occasion field', () => {
    renderBookingForm();
    expect(screen.getByLabelText(/occasion/i)).not.toBeRequired();
  });

  test('applies aria-label to the submit button', () => {
    renderBookingForm();
    expect(getSubmitButton()).toHaveAttribute('aria-label', 'On Click');
  });
});

describe('BookingForm JavaScript validation', () => {
  test('disables submit when the form is invalid', () => {
    renderBookingForm();
    expect(getSubmitButton()).toBeDisabled();
  });

  test('shows an error and keeps submit disabled for a past date', () => {
    renderBookingForm();

    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: getYesterdayString() },
    });

    expect(screen.getByRole('alert')).toHaveTextContent(
      /please choose today or a future date/i
    );
    expect(getSubmitButton()).toBeDisabled();
  });

  test('shows an error and keeps submit disabled for an invalid guest count', () => {
    renderBookingForm();

    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: '0' },
    });

    expect(screen.getByRole('alert')).toHaveTextContent(
      /reservations require between 1 and 10 guests/i
    );
    expect(getSubmitButton()).toBeDisabled();
  });

  test('enables submit when date, time, and guests are valid', () => {
    renderBookingForm();

    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: getTodayString() },
    });
    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: '18:00' },
    });
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: '4' },
    });

    expect(getSubmitButton()).toBeEnabled();
  });

  test('does not call submitForm when the form is invalid', () => {
    const { submitForm } = renderBookingForm();

    fireEvent.submit(getSubmitButton().closest('form'));

    expect(submitForm).not.toHaveBeenCalled();
  });

  test('calls submitForm with form data when the form is valid', () => {
    const { submitForm } = renderBookingForm();

    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: getTodayString() },
    });
    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: '19:00' },
    });
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: '2' },
    });
    fireEvent.change(screen.getByLabelText(/occasion/i), {
      target: { value: 'Birthday' },
    });

    fireEvent.click(getSubmitButton());

    expect(submitForm).toHaveBeenCalledTimes(1);
    expect(submitForm).toHaveBeenCalledWith({
      date: getTodayString(),
      time: '19:00',
      guests: '2',
      occasion: 'Birthday',
    });
  });
});
