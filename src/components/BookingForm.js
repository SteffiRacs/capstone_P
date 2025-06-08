import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BookingForm() {
  const [form, setForm] = useState({
    name: '',
    date: '',
    time: '',
    guests: 1,
    occasion: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', form);
    // Redirect to customer details form after submission
    navigate('/customerdetails');
  };

  return (
    <section className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-8 col-lg-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label>Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label>Date</label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label>Time</label>
                <input
                  type="time"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label>Number of Guests</label>
                <input
                  type="number"
                  name="guests"
                  value={form.guests}
                  min="1"
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label>Occasion</label>
                <select
                  name="occasion"
                  value={form.occasion}
                  onChange={handleChange}
                  className="form-control"
                  required
                >
                  <option value="" disabled>Select an occasion</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Business Meeting">Business Meeting</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary"  role="button">
                Reserve
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingForm;
