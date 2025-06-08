import React from 'react';
import CustomerDetails from '../components/CustomerDetails';

function CustomerPage() {
  return (
    <div className="container mt-4">
       <h2 className="text-center">Customer Details</h2>
      <CustomerDetails />
    </div>
  );
}

export default CustomerPage;
