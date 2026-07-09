import React from 'react';


function Team() {
    return ( 
        <div className='container'>
            <div className='row mt-5 mb-5 p-5 border-top'>
                <h1 className='text-center'>People</h1>
            </div>

            <div className='row mt-5 p-5'>

                <div className='col-6 text-center'>
                    <img src='media/images/sufiyankhan.jpg' style={{borderRadius:"100%" , width:"65%"}}/>
                    <br></br>
                    <h3>Sufiyan Khan</h3>
                    <h5 className='text-muted'>Founder , CEO</h5>
                </div>

                <div className='col-6 fs-3'>
                    <p>Sufiyan bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <a  href='' style={{textDecoration:"none"}}>Homepage </a>/ <a href='' style={{textDecoration:"none"}}>TradingQnA</a> / <a href='' style={{textDecoration:"none"}}>Twitter</a></p>
                </div>
            </div>
        </div>
     );
}

export default Team;