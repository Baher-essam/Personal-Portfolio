import React from 'react'
import { NavLink } from 'react-router-dom'
import './services.css'
 
const Service = () => {
    return (
        <section id="singleService" className="single-service text-white text-center d-flex justify-content-center align-items-center">
            <div>
                <h1 className='mb-5'>this is single serivce page</h1> 
                <NavLink to={'/'} className="main-btn px-4 py-2 text-capitalize">return home</NavLink>
            </div>
        </section>
    )
}

export default Service