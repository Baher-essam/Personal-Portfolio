import React from 'react'
import Typical from 'react-typical'
import './home.css'
import About from '../about/about'
import Services from '../services/services'
import {aboutData} from '../../fake-database/index'
import bg2 from '../../Assets/images/shape4.gif'




const Home = () => {
    return (
        <main>
            <section id="intro" className="intro d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="intro-content">
                        <div className="intro-art text-center">
                            <img src={bg2} alt="intro image" className="img-fluid intro-img1"/>
                            <div className="intro-img2">
                                <picture>
                                    <source srcSet={aboutData.introImgwebp} alt={aboutData.introImgAlt} className="img-fluid"/>
                                    <img src={aboutData.introImg} alt={aboutData.introImgAlt} className="img-fluid"/>
                                </picture>
                            </div>
                        </div>
                        <div className="intro-text text-white text-center" >
                            <p className='intro-text-fixed mb-0'>
                                <span>Hi,</span>I'm <h1 className='glitch'  data-content={aboutData.name}>{aboutData.name}</h1>
                            </p>
                            <p className='intro-text-changing'>I'm a 
                                <Typical
                                    loop={Infinity}
                                    wrapper="i" //italic
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
                            <a href="https://drive.google.com/file/d/1NKxVa9dyyU4YVLkWI_-IVWPGz3Xj_p0t/view?usp=drivesdk"  rel="noreferrer noopener" target="_blank" className="text-capitalize mx-2 px-3 main-btn mt-5 py-1">show resume</a>
                            <a href="#contact"  rel="noreferrer noopener" className="text-capitalize px-3 mx-2 main-btn mt-5 py-1">Hire me</a>
                        </div>
                    </div>
                </div>
            </section>
            <About/>
            <Services/>

            <section id="contact" className="mb40 mt70 ">
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
                        <div className="contact-form  mt50">
                            <form className="form" id="myForm">
                                <input type="hidden" name="form-name" value="contact"/>
                                <div className="form-group">
                                    <input type="text" name="name" required  className="form-control"/>
                                    <label htmlFor="name" className="label-content">
                                        <span className="span-data">Name</span>
                                    </label>
                                </div>
                                <div className="form-group">
                                    <input type="email" name="email" required  className="form-control"/>
                                    <label htmlFor="email" className="label-content">
                                        <span className="span-data">Email</span>
                                    </label>
                                </div>
                                <div className="form-group">
                                    <input type="text" name="number" required  className="form-control"/>
                                    <label htmlFor="number" className="label-content">
                                        <span className="span-data">Number</span>
                                    </label>
                                </div>
                                <div className="form-group">
                                <label htmlFor="message" className="message">Message</label>
                                <textarea name="message" rows="4" placeholder="Enter Message..." className="form-control"></textarea>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="text-capitalize px60 main-btn mt10 py5">Send Message</button>
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
