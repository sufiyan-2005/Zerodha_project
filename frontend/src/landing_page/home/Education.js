import React from 'react';

function Education() {
    return ( 
    <div className='container mt-5'>
        <div className='row'>
            <div className='col-6 pr-5'>
                <img src='media/images/education.svg' alt='Education' style={{width:"100%"}}/>
            </div>

            <div className='col-6 pl-4'>
                <h1 className='mb-3'>Free and open market education</h1>
                <br></br><br></br><br></br>

                <p className='fs-5'>Varsity, the largest online stock market education book in the world<br></br> 
                covering everything from the basics to advanced trading. <br></br> <a href='' style={{textDecoration:"none"}}>Varsity <i class="fa-solid fa-arrow-right"></i></a> </p>
                <br></br>
                <p className='fs-5'>TradingQ&A, the most active trading and investment community in <br></br>
                 India for all your market related queries. <br></br> <a href='' style={{textDecoration:"none"}}>Trading Q&N <i class="fa-solid fa-arrow-right"></i></a> </p>
            </div>
        </div>
    </div>
 );
}

export default Education;