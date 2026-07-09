import React from 'react';

function Hero() {
    return ( 
        <div className='container mt-5 border-bottom mb-5'>
         <div className='text-center mt-5 p-5'>
               <h1>Zerodha Products</h1>
            <h3 className='text-muted mt-4'>Sleek, modern, and intuitive trading platforms</h3>
            <h5 className='text-muted mt-3 mb-5'> Check out our <a href='' style={{textDecoration:"none"}}>investment offerings  <i class="fa-solid fa-arrow-right"></i> </a></h5>
         </div>
        </div>
     );
}

export default Hero;