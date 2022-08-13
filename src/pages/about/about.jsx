import React from 'react'
import { NavLink } from 'react-router-dom'
import './about.css'

const about = () => {
    setTimeout(() => {
        window.location.href="/"
      }, 2500);
    return (
        <main id="singleAboutMe" className="text-center text-white d-flex justify-content-center align-items-center">
            <div>
                <h1 className='mb-3'>Page under creation <span><svg version="1.1" id="Capa_1" width="35" height="35" fill='#D7443E' xlinkHref="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 391.837 391.837">
                    <g><path  d="M285.257,35.528c58.743,0.286,106.294,47.836,106.58,106.58
                            c0,107.624-195.918,214.204-195.918,214.204S0,248.165,0,142.108c0-58.862,47.717-106.58,106.58-106.58l0,0
                            c36.032-0.281,69.718,17.842,89.339,48.065C215.674,53.517,249.273,35.441,285.257,35.528z"/></g>
                </svg></span></h1> 
                <NavLink to={'/'} className="main-btn px-4 py-2 text-capitalize">return home</NavLink>
            </div>
        </main>
    )
}
export default about