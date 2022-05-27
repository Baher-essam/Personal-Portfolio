import React from 'react'
import { NavLink } from 'react-router-dom'
import './about.css'
import dots from '../../Assets/badges/dots.svg'
import bg1 from '../../Assets/badges/blob.svg'
import bg2 from '../../Assets/badges/blob1.svg'
import arrow from '../../Assets/badges/arrow.svg'
import {aboutData} from '../../fake-database/index'
// import bg3 from '../../Assets/images/shape3.gif'

const about = () => {
    return (
        <section id="aboutMe" className="mt90">
            <div className="container">
                <div className="row text-white align-items-center">
                    <div className="col-sm-12 pb-5">
                        <div className="text-center section-title">
                            <h1>About Me</h1>
                        </div>
                    </div>
                    <div className="col-md-6  col-sm-12 my-3">
                        <div className="about-me-photo">
                            <div>
                                <img src={aboutData.photo} className="img-fluid" alt="personal photo" width={353} height={591}/>
                            </div>
                            <img src={bg1} className="blob" alt="blob background" width={353} height={426}/>
                            <img src={bg2} className="blob1" alt="blob1 background" width={353} height={426} />
                            {/* <img src={bg3} className="blob2" alt="bg3 background"/> */}
                        </div>
                    </div>
                    <img src={dots} className="dots" alt="dots" width={96} height={96}/>
                    <div className=" col-md-6 col-sm-12 my-3 px-sm-4">
                        <div id="aboutMeData" className="aboutMeData">
                            <h2>
                                <span>
                                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#AB05F2" d="M50.7,-39.1C65.4,-21.9,77,-0.8,74.5,19.8C72,40.4,55.5,60.6,34.9,69.3C14.3,78,-10.3,75.2,-31.8,65.1C-53.3,55.1,-71.8,37.9,-74.4,19.1C-76.9,0.4,-63.5,-19.8,-48.5,-37C-33.4,-54.3,-16.7,-68.6,0.6,-69.1C18,-69.6,35.9,-56.3,50.7,-39.1Z" transform="translate(100 100)"></path></svg>
                                </span> 
                                <span>B</span>AHER <span>E</span>SSAM
                            </h2>
                            <h5>{aboutData.job[1]}</h5>
                            <p className='aboutMeData-pref'>{aboutData.pref}</p>
                            <div className="personal">
                                <ul className='list-unstyled'>
                                    <li className='my-2'>
                                        <span><img src={aboutData.adderssImg} alt="phone-logo" width={25} height={25}/></span>
                                        <span className='ms-2'>{aboutData.adderss}</span>
                                    </li>
                                    <li className='my-2'>
                                        <span><img src={aboutData.emailImg} alt="phone-logo" width={25} height={25}/></span>
                                        <span className='ms-2'><a href="mailto:baher.essam@gmail.com">{aboutData.email}</a></span>
                                    </li>
                                    <li className='d-md-block d-none my-2'>
                                        <span><img src={aboutData.phoneImg} alt="phone-logo" width={25} height={25}/></span> 
                                        <span className='ms-2'><a>{aboutData.phone}</a></span>
                                    </li>
                                    <li className='d-md-none d-block my-2'>
                                        <span><img src={aboutData.phoneImg} alt="phone-logo" width={25} height={25}/></span> 
                                        <span className='ms-2'><a href="tel:01146786272">{aboutData.phone}</a></span>
                                    </li>
                                </ul>
                            </div>
                            {/* <div className="social">
                                <ul className="list-unstyled social-data mt-1">   
                                {aboutData.Social.map( social =>(
                                    <li key={social.id}>
                                        <a href={social.url}  rel="noreferrer noopener" target="blank">
                                            <img src={social.photo} alt={social.name} />
                                        </a>
                                    </li>
                                ))}  
                                </ul>
                            </div> */}
                            <div className="download-cv">
                                <NavLink to="/about" className="text-uppercase main-btn py-1 px-4 d-inline-flex">see more <span><img src={arrow} alt="arrow" width={15} height={10}/></span></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    )
}

export default about