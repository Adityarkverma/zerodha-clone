import React from 'react';

function Pricing() {
    return ( 
        <div className='container p-5'>
            <div className='row p-5'>
                <div className='col-5'>
                    <h1 className='mb-4 fs-4 '>Unbeatable Pricing</h1>
                    <p className='mb-3' style={{fontSize:"1.1rem",opacity:".9"}}>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                     <a href=''  style={{textDecoration:"none"}}>See Pricing  <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className='col-7 pt-3 '>
                    <div className='row'>
                        <div className='col d-flex mt-4 '>
                            <img  src='media\images\pricing0.svg' style={{width:"50%"}}/>
                            <p className='text-muted pt-4' style={{fontSize:"12px"}}>Free account<br/> opening</p>
                        </div>
                        <div className='col d-flex mt-4 '>
                            <img  src='media\images\pricingMf.svg' style={{width:"50%"}}/>
                            <p className='text-muted pt-4 ' style={{fontSize:"12px",whiteSpace:"nowrap"}}>Free equity delivery <br/> and direct mutual funds</p>
                        </div>
                        <div className='col d-flex mt-4'>
                            <img  src='media\images\intradayTrades.svg' style={{width:"50%" }}/>
                            <p className='text-muted pt-4' style={{fontSize:"12px"}}>Intraday and direct<br/>F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
     );
}

export default Pricing;