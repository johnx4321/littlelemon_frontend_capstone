function BookingSlot({ time, available }) {
  return (
    <li className={`booking-slot ${available ? 'booking-slot--available' : 'booking-slot--booked'}`}>
      <span className="booking-slot-time">{time}</span>
      <span className="booking-slot-status">
        {available ? 'Available' : 'Booked'}
      </span>
    </li>
  );
}

export default BookingSlot;
