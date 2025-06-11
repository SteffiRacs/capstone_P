import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function BookingModal({ show, onClose }) {
  return (
    <div
      className={`modal fade ${show ? 'show d-block' : 'd-none'}`}
      tabIndex="-1"
      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
      onClick={onClose}
    >
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header border-0">
            <h5 className="modal-title">Reservation Confirmed</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <p>Your reservation has been received. Thank you!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CustomerDetails() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const booking = location.state;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Customer Info:', form);
    console.log('Booking Info:', booking);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    navigate('/');
  };

  return (
    <section className="py-5">
      <div className="container">
      

       {booking && (
  <div className="mb-4">
   <button
  type="button"
  className="btn btn-secondary mb-3"
  onClick={() => navigate('/booking', { state: booking })}
>
  &larr; Back to Booking
</button> <h5 className="text-primary text-center mb-3">Booking Details</h5>

          <div className="row justify-content-center">
        {/* First Section: Date & Time */}
      <div className="col-md-3 card  p-3 me-2">
        
          <p><strong>Date:</strong> {booking.date}</p>
          <p><strong>Time:</strong> {booking.time}</p>
        </div>
        {/* Second Section: Guests & Occasion */}
      <div className="col-md-3 card shadow-sm p-3 ">
        
          <p><strong>Guests:</strong> {booking.guests}</p>
          <p><strong>Occasion:</strong> {booking.occasion}</p>
       
      </div>
      

      
    </div>
  </div>
)}


        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-8 col-lg-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <button type="submit" className="btn btn-success" role="button">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <BookingModal show={showModal} onClose={handleClose} />
    </section>
  );
}

export default CustomerDetails;
