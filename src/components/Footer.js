import React from 'react';
import footerlogo from '../assets/footer.png'; // adjust the path if needed

function Footer() {
  return (
    <footer className="py-5 mt-5">
      <div className="container">
        <div className="row">
          {/* Logo Section */}
          <div className="col-md-3 mb-4 mb-md-0">
            <img src={footerlogo} alt="Logo" style={{ maxWidth: '120px' }} />
          </div>

          {/* Navigation Section */}
          <div className="col-md-3 mb-4 mb-md-0">
            <h5>Navigation</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-decoration-none">Home</a></li>
               <li><a href="/" className="text-decoration-none">About</a></li>
                 <li><a href="/" className="text-decoration-none">Menu</a></li>
                   <li><a href="/booking" className="text-decoration-none">Reservations</a></li>
                     <li><a href="/" className="text-decoration-none">Order Online</a></li>
                       <li><a href="/" className="text-decoration-none">Login</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-3 mb-4 mb-md-0">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li>Email: contact@littlelemon.com</li>
              <li>Phone: +1 (123) 456-7890</li>
              <li>Address: 123 Lemon Street</li>
            </ul>
          </div>

          {/* Social Section */}
          <div className="col-md-3">
            <h5>Follow Us</h5>
            <a href="https://facebook.com" className="text-dark me-3"><i className="bi bi-facebook"></i></a>
            <a href="https://instagram.com" className="text-dark me-3"><i className="bi bi-instagram"></i></a>
            <a href="https://twitter.com" className="text-dark"><i className="bi bi-twitter"></i></a>
          </div>
        </div>

        <div className="row mt-5">
            <div className="col-sm-12 tex-center">
                <p className="text-center mb-0 pb-0">Copyright© 2025  Little Lemon</p>
            </div>
        </div>
      </div>
    </footer>
    
    
  );
}

export default Footer;
