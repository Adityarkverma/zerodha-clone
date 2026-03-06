import React from 'react';

function Hero() {
    return ( 
        <div className='container mt-5  mb-5'>
            <div className='row mb-5  text-center p-5'>
                <h1 className='fs-2 ' style={{opacity:".95"}}>Charges</h1>
                <h3 className='fs-4 text-muted fw-normal p-2 mb-5 pb-5' style={{opacity:".7",fontSize:"1rem"}}>List of all charges and taxes</h3>
            </div>
            <div className='row pt-5 mt-5 '>
                <div className='col-4 text-center'>
                    <img className='pb-2' src='media/images/pricingEquity.svg' style={{width:"70%"}}/>
                    <h2 className='pb-3 fs-3'>Free equity delivery</h2>
                    <p className=' text-muted' style={{fontSize:"1.2rem"}}>All equity delivery investments (NSE, BSE), <br/> are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4 text-center'>
                    <img className='pb-2' src='media/images/intradayTrades.svg' style={{width:"70%"}}/>
                    <h2  className='pb-3 fs-3'>Intraday and F&O trades</h2>
                    <p className=' text-muted' style={{fontSize:"1.2rem"}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4 text-center'>
                    <img className='pb-2' src='media/images/pricingEquity.svg' style={{width:"70%"}}/>
                    <h2 className='pb-3 fs-3'>Free direct MF</h2>
                    <p className=' text-muted' style={{fontSize:"1.2rem"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges..</p>
                </div>
                
            </div>
       </div>
     );
}

export default Hero;