import React from 'react';
import { Link } from 'react-router-dom'; 

function Hero() {
  return (
    <div className='container p-5 mb-5'>
      <div className='row text-center'>
        <img 
          src='media/images/homeHero.png' 
          alt='HERO IMG' 
          className='mb-5' 
        />
        <h1 className='mt-5'>Invest in everything</h1>
        <p className='mb-2 fs-5 text-muted'>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more
        </p>
        
        <Link to="/signup" style={{ textDecoration: 'none', width: "100%" }}>
          <button 
            className='p-3 fs-5 btn btn-primary mt-5 mb-5' 
            style={{ 
              width: "25%", 
              margin: "0 auto", 
              backgroundColor: "#387ED1", 
              color: "white",
              border: "none",
              borderRadius: "4px"
            }}
          >
            Signup now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
