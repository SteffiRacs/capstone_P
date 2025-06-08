import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BookingModal({ show, onClose }) {
  return (
    <div
      className={`modal fade ${show ? 'show d-block' : 'd-none'}`}
      tabIndex="-1"
      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
      onClick={onClose} // Close on clicking backdrop
    >
      <div className="modal-dialog" onClick={e => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header border-0">
            <h5 className="modal-title">Reservation Confirmed</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <p>Your reservation has been received.</p>
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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Show modal on submit
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    navigate('/'); // Redirect after modal closes
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
              <button type="submit" className="btn btn-success"  role="button"> 
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Modal */}
      <BookingModal show={showModal} onClose={handleClose} />
    </section>
  );
}

export default CustomerDetails;
