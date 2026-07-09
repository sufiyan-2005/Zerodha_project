import React from 'react';
import { Link } from 'react-router-dom';

function OpenAccount() {
  return (
    <div className='container p-5 mb-5'>
      <div className='row text-center'>
        <h1 className='mt-5'>Open a Zerodha account</h1>
        <p className='mb-2 fs-5'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
        
        <Link 
          to="/signup" 
          className="p-3 fs-5 btn btn-primary mt-5 mb-5" 
          style={{ width: "25%", margin: "0 auto", backgroundColor: "#387ED1", color: "white", textDecoration: "none" }}
        >
          Sign up here
        </Link>
      </div>
    </div>
  );
}

export default OpenAccount;
