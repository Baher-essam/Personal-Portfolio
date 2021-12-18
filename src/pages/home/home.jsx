import React from 'react'
import Typical from 'react-typical'

import './home.css'
import About from '../about/about'
import {aboutData} from '../../fake-database/index'
import bg2 from '../../Assets/images/shape3.gif'

const home = () => {
    return (
        <main>
            <section id="intro" className="intro d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="intro-content">
                        <div className="intro-art text-center">
                            <img src={bg2} alt="intro image" className="img-fluid intro-img1"/>
                            <div className="intro-img2">
                                <img src={aboutData.introImg} alt="intro image"/>
                            </div>
                        </div>
                        <div className="intro-text text-white text-center">
                            <h1 >
                                <span>Hi,</span>I'm <span className='glitch' data-text={aboutData.name}>{aboutData.name}</span>
                            </h1>
                            <p>I'm a 
                                <Typical
                                    loop={Infinity}
                                    wrapper="i" //Bold
                                    steps={[
                                        ' Web Developer',
                                        2000,
                                        ' Web Designer',
                                        2000,
                                        ' Freelancer',
                                        2000
                                    ]}
                                />
                            </p>
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
                            <a href="https://drive.google.com/file/d/1WcD2_F2txr8QOWFu8gIfGe6X-FsnseOu/view?usp=sharing"  rel="noreferrer noopener" target="_blank" className="text-capitalize mx-2 px-3 main-btn mt-5 py-1">show resume</a>
                            <a href="#contact"  rel="noreferrer noopener" className="text-capitalize px-3 mx-2 main-btn mt-5 py-1">Hire me</a>
                        </div>
                    </div>
                </div>
            </section>
            <About/>
        </main>
    )
}

export default home
