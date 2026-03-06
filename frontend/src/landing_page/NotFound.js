import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return ( 
        <div className='container  p-5 mb-3 '>
            <div className='row text-center'>
                <h1 className='mt-5 fs-2 fw-medium' style={{opacity:"0.85"}}>404</h1>
                <p className='fs-5 mt-3 mb-4' style={{opacity:"0.75"}}>We couldn't find that page you were looking for. Visit <Link to="/">Zerodha's Home Page</Link>.</p>
            </div>
            
        </div>
     );
}

export default NotFound;