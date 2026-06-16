// src/pages/NotFound.js
import React from 'react'
import {Link} from 'react-router-dom';
import notFound from '../Assets/images/404.gif'



function NotFound() {
  setTimeout(() => {
    window.location.href="/"
  }, 2500);
  
  return (
    <main id='PageNotFound'  className='d-flex justify-content-center align-items-center'>
        <div className='text-center'>
            <div>
                <img src={notFound} alt="notFound" className="img-fluid w-100" width={498} height={236}/>
            </div> 
            <Link to="/" className='main-btn px-4 py-1 text-capitalize'>Return Home</Link>
        </div>
    </main>
  )
}

export default NotFound