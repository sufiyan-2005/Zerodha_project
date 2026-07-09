import React from 'react';

function Hero() {
    return (
        <div className='container-fluid text-center '>
            <div className='row mt-5 border-bottom p-5 text-center'>
                <h1>Charges</h1>
                <h4 className='text-muted fs-3 mt-3'>List of all charges and taxes</h4>
            </div>
            <div className='row mt-5'>
                <div className='col-4 p-5'>
                    <img src='media/images/pricingEquity.svg' style={{width:"60%"}}/>
                    <h1>Free equity delivery</h1>
                    <p className='fs-4 text-muted'>All equity delivery investments (NSE, BSE),<br/> are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4 p-5'>
                    <img src='media/images/intradayTrades.svg' style={{width:"60%"}}/>
                    <h1>Intraday and F&O trades</h1>
                    <p className='fs-4 text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4 p-5'>
                    <img src='media/images/pricing0.svg' style={{width:"60%"}}/>
                    <h1>Free direct MF</h1>
                    <p className='fs-4 text-muted'>All direct mutual fund investments are <br/> absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;