import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-6 pr-5'>
                    <img src='media/images/largestBroker.svg' alt='Broker IMG'/>
                </div>

                <div className='col-6 pl-5'>
                    <h1>Largest stock broker in India</h1>
                    
                    <p>2+ million TradeX clients contribute to over 15% of all retails order
                        volumes in India daily by trading and investing in:
                    </p>
                    <div className='row'>
                        <div className='col-6 pt-5'>
                            <ul>
                                <li>
                                    <p>Futures and options</p>
                                </li>
                                <li>
                                    <p>Commodity derivaties</p>
                                </li>
                                <li>
                                    <p>Cuurency derivaties</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-6 pt-5'>
                             <ul>
                                <li>
                                    <p>Stocks & IPOs</p>
                                </li>
                                <li>
                                    <p>Direct mutual funds</p>
                                </li>
                                <li>
                                    <p>Bonds ans Govt. Securities</p>
                                </li>
                            </ul>
                        </div>
                        
                    </div>

                    <img src='media/images/pressLogos.png' alt='pressLogo' className='mt-4'/>
                </div>
            </div>
        </div>
     );
}

export default Awards;