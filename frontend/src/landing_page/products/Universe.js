import React from 'react';

function Universe() {
    return ( 
        <div className='container'>
            <div className='row text-center'>
                <h1 className='fs-3  mt-5 mb-4' style={{opacity:".9"}}>The Zerodha Universe</h1>
                <p  className='mb-5' style={{fontSize:"1.1rem"}}>Extend your trading and investment experience even further with our partner platforms</p>
                <div className='col-4 p-3'>
                    <img src='media/images/zerodhaFundhouse.png' style={{width:"50%"}} />
                    <p className='fs-6 mt-2 pt-2 text-muted'>Our assest management venture</p>
                </div>
                 <div className='col-4 p-3'>
                    <img src='media/images/sensibullLogo.svg' style={{width:"60%"}} />
                    <p className='fs-6 mt-3 pt-2 text-muted'>Option trading platform</p>
                </div>
                <div className='col-4 p-3'>
                    <img src='media/images/tijori.svg'  style={{width:"40%"}}  />
                    <p className='fs-6 mt-2 pt-2 text-muted'>Investment research platform</p>
                </div>
                 <div className='col-4 mt-3 p-3'>
                    <img src='media/images/streakLogo.png' style={{width:"40%"}}/>
                    <p className='fs-6 mt-2 pt-2 text-muted'>Systematic trading platform</p>
                </div>
                 <div className='col-4 mt-3 p-3'>
                    <img src='media/images/smallcaseLogo.png' />
                    <p className='fs-6 mt-2 pt-2 text-muted'>Thematic investing platform</p>
                </div>
                <div className='col-4 mt-3 p-3'>
                    <img src='media/images/dittoLogo.png' style={{width:"36%"}} />
                    <p className='fs-6 mt-2 pt-2 text-muted'>Personalized advice on life <br/> and health insuarance</p>
                </div>
                <button className='p-2 mt-4 btn mb-5 fs-5 fw-semibold' style={{width:"20%", margin:"0 auto",backgroundColor:"#387ed1",color:"white"}}>Sign up for free</button>
            </div>
        </div>
     );
}

export default Universe;