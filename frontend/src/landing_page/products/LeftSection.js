import React from 'react';

function LeftSection({imageURL,productName,productDesc,tryDemo,learnMore,googlePlay,appStore}) {
    return ( 
        <div className='Container'>
            <div className='row p-5 '>
                <div className='col-12 col-lg-7  p-5 text-center'>
                    <img src={imageURL} />
                </div>
                <div className='col-12 col-lg-5 mt-5 pt-5' >
                    <h1 className='fs-3 text-muted mb-4'>{productName}</h1>
                    <p  style={{fontSize:"1.2rem",lineHeight:"1.6" ,width:"65%",opacity:".80"}}>{productDesc}</p>
                    <div>
                        <a href={tryDemo} style={{marginRight:"2rem"}}>Try Demo <i class="fa-solid fa-arrow-right-long"></i></a>
                        <a href={learnMore}>Learn More  <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                    <div className='mt-4'>
                        <a href={googlePlay} style={{marginRight:"1rem"}}><img src='media/images/googlePlayBadge.svg'/></a>
                        <a href={appStore}><img src='media\images\appstoreBadge.svg'/></a>
                    </div>
                    
                </div>

            </div>
        </div>
     );
}

export default LeftSection;