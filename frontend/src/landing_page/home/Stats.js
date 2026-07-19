import React from 'react';

function Stats() {
    return (
        <div className='container mt-5'>
            <div className='row'>

                <div className='col-6 mt-5 p-5'>
                    <h1 >Trust with confidence</h1>
                    <br></br> <br></br><br></br> <br></br>

                    <h2 >Customer-first always</h2>
                    <br></br>
                    <p className='text-muted fs-5'>That's why 1.6+ crore customers trust TradeX with ~ ₹6 
                    lakh crores of equity investments, making us India’s
                    largest broker; contributing to 15% of daily retail 
                    exchange volumes in India.</p>

                   <br></br> <br></br>

                    <h2>No spam or gimmicks</h2>
                    <br></br>
                    <p className='text-muted fs-5'>No gimmicks, spam, "gamification", or annoying push 
                    notifications. High quality apps that you use at your 
                    pace, the way you like. Our philosophies.</p>

                      <br></br> <br></br>

                    <h2>The TradeX universe</h2>
                    <br></br>
                    <p className='text-muted fs-5'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <br></br> <br></br>

                    <h2>Do better with money</h2>
                    <br></br>
                    <p className='text-muted fs-5'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>

                <div className='col-6 mt-5 p-5'>
                    <img src='media/images/ecosystem.png' alt='ecoSystem IMG' style={{height:"84%"}}/>
                    <div className='text-center fs-5'>
                        <a href='' style={{textDecoration:"none"}}>Explore our products <i class="fa-solid fa-arrow-right"></i></a>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href='' style={{textDecoration:"none"}}>Try kite demo <i class="fa-solid fa-arrow-right"></i></a>
                    </div>

                   
                </div>
            </div>

             <div className='row mb-5'>
                        <div className='col-6'> <img src='media/images/kiteN.png.png'/></div>
                        <div className='col-6 pt-3 fs-5'><h5>Need more? Build your own trading and investing experience with Kite Connect, 
                            simple HTTP APIs to place orders, stream market data, manage your account, and more.  <a href='' style={{textDecoration:"none"}}>Explore<i class="fa-solid fa-arrow-right"></i></a></h5> </div>
            </div>
        </div>
    );
}

export default Stats;