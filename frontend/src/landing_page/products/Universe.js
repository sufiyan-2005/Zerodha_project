import React from 'react';

function Universe() {
    return (
        <div className='container mt-5 mb-5 p-5'>
            <div className='row text-center'>
                <h1>The Zerodha Universe</h1>
                <p className='mt-3 fs-4'>Extend your trading and investment experience even further with our partner platforms</p>

                <div className='col-4 p-5 mt-4'>
                    <img src='media/images/zerodhaFundhouse.png' style={{ width: "95%" }} />
                    <p className='text-muted mt-5 fs-5'>Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.</p>
                </div>
                <div className='col-4 p-5 mt-5 mb-5'>
                    <img src='media/images/sensibullLogo.svg' style={{ width: "95%" }} />
                    <p className='text-muted mt-5 fs-5'>Options trading platform that lets you
                        create strategies, analyze positions, and examine
                        data points like open interest, FII/DII, and more.</p>
                </div>
                <div className='col-4 p-5 mt-4'>
                    <img src='media/images/tijori.png.png' style={{ width: "85%" }} />
                    <p className='text-muted mt-1 fs-5'>Investment research platform
                        that offers detailed insights on stocks,
                        sectors, supply chains, and more.</p>
                </div>


                <div className='col-4 p-5 mt-5'>
                    <img src='media\images\streakLogo.png' style={{ width: "95%" }} />
                    <p className='text-muted mt-4 fs-5'>Systematic trading platform
                        that allows you to create and backtest
                        strategies without coding.</p>
                </div>
                <div className='col-4 p-5 mt-5'>
                    <img src='media/images/smallcaseLogo.png' style={{ width: "95%" }} />
                    <p className='text-muted mt-5 fs-5'>Thematic investing platform
                        that helps you invest in diversified
                        baskets of stocks on ETFs.</p>
                </div>
                <div className='col-4 p-5 mt-4'>
                    <img src='media/images/dittoLogo.png' style={{ width: "80%" }} />
                    <p className='text-muted mt-5 fs-5'>Personalized advice on life
                        and health insurance. No spam
                        and no mis-selling.</p>
                </div>

                <button className="p-3 fs-3 btn btn-primary mt-5 mb-5" style={{width:"25%" , margin:"0 auto" , backgroundColor:"#387ED1" , color:"white"}}>Sign up for free</button>
            </div>
        </div>
    );
}

export default Universe;