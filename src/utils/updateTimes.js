export const initializeTimes = () => [
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
];

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return initializeTimes();
    case 'BOOK_SLOT':
      return state.filter((time) => time !== action.payload);
    default:
      return state;
  }
};
