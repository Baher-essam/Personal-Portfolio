import React from 'react'
import {Link} from 'react-router-dom';
import messageSent from '../Assets/badges/messagesent.svg'



function thankYou() {
  setTimeout(() => {
    window.location.href="/"
  }, 2500);
  
  return (
    <section id='PageNotFound'  className='d-flex justify-content-center align-items-center text-white px-2'>
        <div className='text-center'>
            <div className='w-75 m-auto'>
                <img src={messageSent} alt="messageSent" className="img-fluid w-100" width={427} height={427}/>
            </div> 
            <h3 className='mb-3'>Thanks, Your message has been sent.</h3>
            <Link to="/" className='main-btn px-4 py-1 text-capitalize'>Return Home</Link>
        </div>
    </section>
  )
}

export default thankYou