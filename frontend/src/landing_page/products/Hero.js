import React from 'react';

function Hero() {
    return ( 
       <div className='container mt-5 border-bottom mb-5'>
            <div className='row text-center p-5'>
                <h1 className='fs-2 fw-medium' style={{opacity:".8"}}>Zerodha Products</h1>
                <h3 className=' fw-normal p-2' style={{opacity:".9",fontSize:"1.3rem"}}>Sleek, modern, and intuitive trading platforms</h3>
                <p className='mb-5 '>Check out our <a href='' style={{textDecoration:"none"}}>investment offerings <i class="fa-solid fa-arrow-right-long"></i></a>  </p>
            </div>
       </div>
     );
}

export default Hero;