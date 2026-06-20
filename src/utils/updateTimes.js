const parseBookingDate = (dateValue) => {
  if (!dateValue) {
    return new Date();
  }

  if (dateValue instanceof Date) {
    return dateValue;
  }

  const [year, month, day] = dateValue.split('-').map(Number);
  return new Date(year, month - 1, day);
};

export const initializeTimes = () => window.fetchAPI(new Date());

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return window.fetchAPI(parseBookingDate(action.date));
    case 'BOOK_SLOT':
      return state.filter((time) => time !== action.payload);
    default:
      return state;
  }
};
