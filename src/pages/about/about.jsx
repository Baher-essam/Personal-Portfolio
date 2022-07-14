import React from 'react'
import { NavLink } from 'react-router-dom'
import './about.css'

const about = () => {
    return (
        <section id="singleAboutMe" className="text-center text-white d-flex justify-content-center align-items-center">
            <div>
                <h1 className='mb-5'>this is single about me page</h1> 
                <NavLink to={'/'} className="main-btn px-4 py-2 text-capitalize">return home</NavLink>
            </div>
        </section>
    )
}
export default about