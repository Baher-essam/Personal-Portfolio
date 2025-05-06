import React, {useState,useEffect, useContext} from 'react'
import { NavLink } from 'react-router-dom'//for about section button
/*intro section data */
import Typewriter from 'typewriter-effect';
import './home.css'
import bg2 from '../../Assets/images/shape4.gif'
/*services and projects section data*/
import Projects from '../projects/projects'
import { MouseContext } from "../../context/mouseContext" //cursor 
/*about section data*/
import {aboutData, servicesData } from '../../fake-database/index'
import CanonicalHead from "../../Components/Helmet"
import dots from '../../Assets/badges/dots.svg'
import blob1 from '../../Assets/badges/blob.svg'
import blob2 from '../../Assets/badges/blob1.svg'
import shape3 from '../../Assets/images/shape-3.png'
import shape1 from '../../Assets/images/shape-1.png'
import shape2 from '../../Assets/images/shape-7.png'
import arrow from '../../Assets/badges/arrow.svg'
import moon from '../../Assets/badges/moon.svg'
import sun from '../../Assets/badges/sun.svg'

import LightModeSwitcherComponent from "../../Components/LightModeSwitcher";


const Home = () => {
    const {  cursorChangeHandler } = useContext(MouseContext); //cursor
    const [isActive, setActive] = useState("false");  //color mode switcher
    const ToggleClass = () => {
        setActive(!isActive); 
        };
    return (
        <main className={isActive ? `darkmode` : `lightMode time`}>
            <CanonicalHead/>
              {/* <div 
                id="lightModeToggle"
                className={isActive ? `disabled` : `enabled`} 
                onClick={ToggleClass}
                onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")}
            >
                <div className="lightModeRotate">
                    <div className="moon">
                        <img src={moon} className="img-fluid" alt="moon"/>
                    </div>
                    <div className="sun">
                        <img src={sun} className="img-fluid" alt="sun"/>
                    </div>
                </div>
            </div> */}
            {/*start of intro seciton*/}
            <section id="intro" className="intro d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="intro-content">
                        <div className="intro-art text-center">
                            <img src={bg2} alt="intro image" className="img-fluid intro-img1" width={200} height={200}/>
                            <div className="intro-img2">
                                <picture>
                                    <source srcSet={aboutData.introImgwebp} className="img-fluid"/>
                                    <img src={aboutData.introImg} alt={aboutData.introImgAlt} className="img-fluid" width={184} height={184}/>
                                
                                </picture>
                            </div>
                        </div>
                        <div className="intro-text text-white text-center" >
                            <h1 className='intro-text-fixed mb-0'>
                                <span>Hi,</span><span>I'm </span><span className='glitch'  data-content={aboutData.name}>{aboutData.name}</span>
                            </h1>
                            <p className="intro-text-changing">
                                I'm a{' '}
                                <i>
                                    <Typewriter
                                    options={{
                                        strings: ['Web Developer', 'Web Designer', 'Freelancer'],
                                        autoStart: true,
                                        loop: true,
                                        delay: 75,
                                        deleteSpeed: 50,
                                    }}
                                    />
                                </i>
                            </p>
                            <div className="social">
                                    <ul className="list-unstyled social-data mt-1">   
                                    {aboutData.Social.map( social =>(
                                        <li key={social.id}>
                                            <a
                                                href={social.url}
                                                rel="noreferrer noopener"
                                                target="_blank"
                                                onMouseEnter={() => cursorChangeHandler("hovered")}
                                                onMouseLeave={() => cursorChangeHandler("")}
                                            >
                                                <img src={social.photo} alt={social.name} width={25} height={30} />
                                            </a>
                                        </li>
                                    ))}  
                                    </ul>
                                </div>
                            <a 
                                href="https://drive.google.com/file/d/1VVVo-vyypbu0sdWJyJ268Gsfb1kWuxG_/view?usp=sharing"
                                rel="noreferrer noopener"
                                target="_blank"
                                className="text-capitalize mx-2 px-3 main-btn mt-5 py-1"
                                onMouseEnter={() => cursorChangeHandler("hovered")}
                                onMouseLeave={() => cursorChangeHandler("")}
                            >show resume</a>
                            <a
                                href="#contact"
                                rel="noreferrer noopener"
                                className="text-capitalize px-3 mx-2 main-btn mt-5 py-1"
                                onMouseEnter={() => cursorChangeHandler("hovered")}
                                onMouseLeave={() => cursorChangeHandler("")}
                            >Hire me</a>
                        </div>
                    </div>
                </div>
            </section>
            {/*end of intro seciton*/}
            {/*About seciton*/}
            <section id="aboutMe" className="about">
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
                                        <picture>
                                            <source srcSet={aboutData.photoWebp}  className="img-fluid"/>
                                            <img src={aboutData.photo} className="img-fluid" alt="personal photo" width={353} height={426}/>
                                        </picture>
                                    </div>
                                    <img src={blob1} className="blob blob1" alt="blob1 background" width={353} height={426}/>
                                    <img src={blob2} className="blob blob2" alt="blob2 background" width={353} height={426} />
                                    <img src={shape1} className="shape1" alt="shape1" width={30} height={30} />
                                    <img src={shape3} className="shape3" alt="shape3" width={30} height={30} />
                                    <img src={shape2} className="shape2" alt="shape2" width={30} height={30} />
                                    {/* <img src={bg4} className="blob2" alt="bg4 background"/> */}
                                </div>
                            </div>
                            <img src={dots} className="dots" alt="dots" width={96} height={96}/>
                            <div className=" col-md-6 col-sm-12 my-3 px-sm-4" >
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
                                                <span className='ms-2'>
                                                    <a 
                                                        href={"mailto:"+aboutData.email}
                                                        onMouseEnter={() => cursorChangeHandler("hovered")}
                                                        onMouseLeave={() => cursorChangeHandler("")}
                                                    >
                                                        {aboutData.email}
                                                    </a>
                                                </span>
                                            </li>
                                            <li className='my-2'>
                                                <span><img src={aboutData.phoneImg} alt="phone-logo" width={25} height={25}/></span> 
                                                <span className='ms-2'>
                                                    <a 
                                                        href={"tel:"+aboutData.phone}
                                                        onMouseEnter={() => cursorChangeHandler("hovered")}
                                                        onMouseLeave={() => cursorChangeHandler("")}
                                                    >
                                                        (+20) {aboutData.phone}
                                                    </a>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="aboutMeData-btn">
                                        <NavLink 
                                        to="/about"
                                        onMouseEnter={() => cursorChangeHandler("hovered")}
                                        onMouseLeave={() => cursorChangeHandler("")}
                                        >
                                            <div className="text-uppercase main-btn py-1 px-4 d-inline-flex">
                                                See More <span><img src={arrow} alt="arrow" width={15} height={10}/></span>
                                            </div>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
            {/*Services seciton*/}
            <section id="services" className="services">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-12 text-capitalize text-center py-4">
                            <div className="services-title section-title text-white">
                                <h1>services</h1>
                                <p>What I can provide for you</p>
                            </div>
                        </div>
                        {servicesData.map( service =>(
                            <div className="col-lg-3 col-sm-6 mb-2 mt-1" key={service.id}>
                                <div className="services-content service-animate">
                                    <div className="service-img">
                                        <div className="service-img-color">
                                            <img src={service.image} className="img-fluid w-50" alt={service.imgAlt} width={68.5} height={68.5}/>
                                        </div>
                                    </div>
                                    <div className="service-text pt-1">
                                        <p className="text-capitalize mb-0">{service.name}</p>
                                    </div>
                                </div>
                            </div>
                        ))}  
                    </div>
                </div>
            </section>
            {/*projects seciton*/}
            <Projects/>
            {/*contact seciton*/}
            <section id="contact" className='contact'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12  text-capitalize text-center">
                            <div className="section-title contact-title">
                                <h1><span><svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#AB05F2" d="M50.7,-39.1C65.4,-21.9,77,-0.8,74.5,19.8C72,40.4,55.5,60.6,34.9,69.3C14.3,78,-10.3,75.2,-31.8,65.1C-53.3,55.1,-71.8,37.9,-74.4,19.1C-76.9,0.4,-63.5,-19.8,-48.5,-37C-33.4,-54.3,-16.7,-68.6,0.6,-69.1C18,-69.6,35.9,-56.3,50.7,-39.1Z" transform="translate(100 100)" />
                                        </svg></span>feeling convinced
                                </h1>
                            </div>
                        </div>
                
                        <div className="col-sm-12">
                            <div className="contact-form  mt-4" >
                                <form className="form" id="myForm"   netlify-honeypot="bot-field" data-netlify="true" method="POST" action="../thankyou" name="contact-form">
                                    <input type="hidden" name="form-name" value="contact-form"/>
                                    <div className="form-group">
                                        <input 
                                            id="name" type="text" 
                                            name="name" required  className="form-control"
                                            onMouseEnter={() => cursorChangeHandler("hovered")}
                                            onMouseLeave={() => cursorChangeHandler("")}
                                        />
                                        <label htmlFor="name" className="label-content">
                                            <span className="span-data">Name</span>
                                        </label>
                                    </div>
                                    <div className="form-group">
                                        <input 
                                            id='email'
                                            type="email" name="email" required  
                                            className="form-control"
                                            onMouseEnter={() => cursorChangeHandler("hovered")}
                                            onMouseLeave={() => cursorChangeHandler("")}
                                            />
                                        <label htmlFor="email" className="label-content">
                                            <span className="span-data">Email</span>
                                        </label>
                                    </div>
                                    <div className="form-group">
                                        <input 
                                            id='number'
                                            type="text"
                                            name="number" 
                                            required  className="form-control"
                                            onMouseEnter={() => cursorChangeHandler("hovered")}
                                            onMouseLeave={() => cursorChangeHandler("")}
                                        />
                                        <label htmlFor="number" className="label-content">
                                            <span className="span-data">Number</span>
                                        </label>
                                    </div>
                                    <div className="form-group">
                                    <label id='message' htmlFor="message" className="message">Message</label>
                                    <textarea 
                                        name="message"
                                        rows="4"
                                        placeholder="Enter message..."
                                        className="form-control"
                                        onMouseEnter={() => cursorChangeHandler("hovered")}
                                        onMouseLeave={() => cursorChangeHandler("")}
                                    ></textarea>
                                    </div>
                                    <div className="text-center">
                                        <button 
                                            type="submit"
                                            className="main-btn mt-3 py-1 px-4 d-inline-flex"
                                            onMouseEnter={() => cursorChangeHandler("hovered")}
                                            onMouseLeave={() => cursorChangeHandler("")}
                                        >
                                            Send message <span></span>
                                        </button>
                                    </div>
                                </form> 
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home
