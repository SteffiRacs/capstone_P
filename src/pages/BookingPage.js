import React from 'react';
import BookingForm from '../components/BookingForm';

function BookingPage() {
  return (
    <div className="container mt-4">
      <h2 className="text-center">Reserve Your Table</h2>
      <BookingForm />
    </div>
  );
}

export default BookingPage;
