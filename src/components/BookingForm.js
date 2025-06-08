// src/components/BookingForm.js
import React, { useState } from 'react';

function BookingForm() {
  const [form, setForm] = useState({
    name: '',
    date: '',
    time: '',
    guests: 1,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', form);
    alert('Your reservation has been submitted!');
  };

  return (
    
        <section className="py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-12 col-md-8 col-lg-6">
                <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label>Name</label>
        <input name="name" value={form.name} onChange={handleChange} className="form-control" required />
      </div>
      <div className="mb-3">
        <label>Date</label>
        <input type="date" name="date" value={form.date} onChange={handleChange} className="form-control" required />
      </div>
      <div className="mb-3">
        <label>Time</label>
        <input type="time" name="time" value={form.time} onChange={handleChange} className="form-control" required />
      </div>
      <div className="mb-3">
        <label>Number of Guests</label>
        <input type="number" name="guests" value={form.guests} min="1" onChange={handleChange} className="form-control" required />
      </div>
      <button type="submit" className="btn btn-primary">Reserve</button>
    </form>
              </div>
            </div>
          </div>
        </section>
        
      );
    }

export default BookingForm;
