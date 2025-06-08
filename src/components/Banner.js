import React from 'react';
import bannerImage from '../assets/restauranfood.jpg'; 
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <section className="heroSection py-5">
      <div className="container">
        <div className="row">
          {/* Left Section */}
          <div className="col-md-6 mb-4 mb-md-0">
            <h1 className="display-4 text-yellow">Welcome to Little Lemon</h1>
            <h3 className="text-white">Chicago</h3>
            <p className="lead text-white">
              Experience fresh ingredients, warm ambiance, and authentic flavors. Reserve your table today!
            </p>
            <Link to="/booking" className="btn primaryBtn btn-lg mt-3 rounded-pill"  role="button">
              Reserve a Table
            </Link>
          </div>

          {/* Right Section */}
          <div className="col-md-6 text-center">
            <img src={bannerImage} alt="Delicious food" className="img-fluid rounded" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
