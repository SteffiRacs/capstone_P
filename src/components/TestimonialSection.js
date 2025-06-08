import React from 'react';
import TestimonialCard from '../components/TestimonialCard';
import user1 from '../assets/user1.jpg';
import user2 from '../assets/user2.jpg';
import user3 from '../assets/user3.jpg';
import user4 from '../assets/user4.jpg';

function TestimonialSection() {
  const testimonials = [
    {
      image: user1,
      name: "Aisha Kapoor",
      username: 'aisha_k',
      text: 'Seriously cannot stop thinking about the Turkish Mac n Cheese!!',
      rating: 5,
    },
    {
      image: user2,
      name: 'Rahul Mehta',
      username: 'rahulm',
      text: 'We had such a great time celebrating my grandmothers birthday!',
      rating: 4,
    },
    {
      image: user3,
      name: 'Simran Batra',
      username: 'sim_batra',
      text: 'Such a chilled out atmosphere, love it!',
      rating: 5,
    },
    {
      image: user4,
      name: 'Karan Singh',
      username: 'karansingh',
      text: 'Good service and tasty food. Recommended!',
      rating: 4,
    },
  ];

  return (
    <section className="testimonialCard bg-light">
      <div className="container">
        <h2 className="mb-4 text-center">What Our Customers Say</h2>
        <div className="row">
          {testimonials.map((t, i) => (
            <div className="col-lg-3 col-md-6 mb-4" key={i}>
              <TestimonialCard {...t} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
