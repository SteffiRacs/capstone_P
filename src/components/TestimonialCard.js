import React from 'react';

function TestimonialCard({ image, name, username, text, rating }) {
  return (

    <div className="card h-100">
      <div className="card-body">
        <div className="d-flex align-items-start">
          <img src={image} alt={name} className="rounded-circle me-3" style={{ width: '60px', height: '60px', objectFit: 'cover' }} />
          <div>
            <h5 className="mb-0">{name}</h5>
            <small className="text-muted">@{username}</small>
          </div>
        </div>
        <p className="mt-3">{text}</p>
        <div className="text-warning fs-5">
        {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
