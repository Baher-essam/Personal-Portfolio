import React from 'react'
import {aboutData} from '../fake-database/index'

const FooterComponent = () => {
    return (
        <footer>
            <div className="container py-3 text-center text-white">
                <div className="social">
                    <ul className="list-unstyled social-data mt-1">   
                    {aboutData.Social.map( social =>(
                        <li key={social.id}>
                            <a href={social.url}  rel="noreferrer noopener" target="blank">
                                <img src={social.photo} alt={social.name} />
                            </a>
                        </li>
                    ))}  
                    </ul>
                </div>
                <p className="mb-0">Made with <span><svg version="1.1" id="Capa_1" width="12px" height="10px" xlinkHref="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 391.837 391.837">
                    <g><path  d="M285.257,35.528c58.743,0.286,106.294,47.836,106.58,106.58
                            c0,107.624-195.918,214.204-195.918,214.204S0,248.165,0,142.108c0-58.862,47.717-106.58,106.58-106.58l0,0
                            c36.032-0.281,69.718,17.842,89.339,48.065C215.674,53.517,249.273,35.441,285.257,35.528z"/></g>
                </svg></span> by <span>Baher Essam</span> | Copyright &copy; 2022
                </p>
            </div>
        </footer>
    )
}

export default FooterComponent
