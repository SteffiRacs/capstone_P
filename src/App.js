import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BookingPage from './pages/BookingPage';
import CustomerPage from './pages/CustomerPage';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/customerdetails" element={<CustomerPage />} />
      </Routes>
       <Footer />
    </Router>
  );
}

export default App;
