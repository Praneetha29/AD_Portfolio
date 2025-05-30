import React, { useState, useEffect } from 'react';
import './branding.scss';
import Navbar from '../Navbar/navbar';
import { FaChevronDown } from 'react-icons/fa';

const Branding = () => {

    const [activeDropdowns, setActiveDropdowns] = useState({});

    const toggleDropdown = (index) => {
        setActiveDropdowns((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    useEffect(() => {
        const serviceHeadingCat = document.querySelector('.service-heading-cat');
        const imgHeading = document.querySelector('.img-heading');
        const serviceLogoServiceCat = document.querySelector('.service-logo-service-cat');
        const serviceContentLayout = document.querySelector('.service-content-layout');
        const serviceLogoWrapper = document.querySelector('.service-logo-wrapper');
    
        serviceContentLayout.style.opacity = '0';
    
        setTimeout(() => {
            serviceLogoServiceCat.style.opacity = '1';
        }, 500);
    
        setTimeout(() => {
            serviceHeadingCat.style.transform = 'translateY(0)';
            imgHeading.style.opacity = '1';
            imgHeading.style.transform = 'translateY(0)';
            serviceLogoWrapper.style.clipPath = 'inset(0 0 calc(100% - 55vh) 0)'; 
        }, 2000);
    
        setTimeout(() => {
            serviceContentLayout.style.opacity = '1';
            serviceContentLayout.style.transition = 'opacity 1s ease';
        }, 3500);
    }, []);
    return (
        <>
            <Navbar></Navbar>
            <main>
            <div className='service-branding'>
                <div className="service-logo-wrapper">
                    <div className="service-logo-service-cat">AD</div>
                </div>
                <div className='service-heading-cat'>
                    <div className='service-heading-text-cat'>
                        Branding
                    </div>
                </div>
                    <div className='img-heading'>
                        <img src="/branding.webp" alt="Branding"></img>
                        <div className='white-overlay'></div>
                        <div className='anim-circle'>
                            <div className='shape-circle dark' style={{ transform: 'translate(-65px, -32px)', width: `8rem`, height: `8rem` }}></div>
                            <div className='shape-center' style={{ width: `4rem`, height: `4rem` }}></div>
                            <div className='shape-circle light' style={{ transform: 'translate(-65px, -95px)', width: `8rem`, height: `8rem` }}></div>
                        </div>

                    </div>

                    <div className='service-content-layout'>
                        <div className='service-content-cat'>
                            <h1>Words can only communicate so much. Your brand does the rest.</h1>
                            <div className='service-content-dropdown-cat'>
                                <div className="dropdown" onClick={() => toggleDropdown(1)}>
                                    <div className="dropdown-header">
                                        <FaChevronDown className="dropdown-icon" />
                                        <h4>Branding</h4>
                                    </div>
                                    <div className={`dropdown-content ${activeDropdowns[1] ? 'active' : ''}`}>
                                        <h5>- Brand Identity</h5>
                                        <h5>- Brand Name</h5>
                                        <h5>- Tagline</h5>
                                        <h5>- Logo</h5>
                                        <h5>- Brand Identity</h5>
                                        <h5>- Brand Name</h5>
                                        <h5>- Color Palette</h5>
                                        <h5>- Typography</h5>
                                        <h5>- Tone of voice</h5>
                                        <h5>- Imagery</h5>
                                    </div>
                                </div>
                                <hr />
                                <div className="dropdown" onClick={() => toggleDropdown(2)}>
                                    <div className="dropdown-header">
                                        <FaChevronDown className="dropdown-icon" />
                                        <h4>Print Collateral</h4>
                                    </div>
                                    <div className={`dropdown-content ${activeDropdowns[2] ? 'active' : ''}`}>
                                        <h5>- Business Cards</h5>
                                        <h5>- Brochures</h5>
                                        <h5>- Flyers</h5>
                                        <h5>- Posters</h5>
                                        <h5>- Banners and Signs</h5>
                                        <h5>- Labels & Stickers</h5>
                                        <h5>- Catalogs</h5>
                                        <h5>- Menus</h5>
                                        <h5>- Invitations and Thank-You Cards</h5>
                                    </div>
                                </div>
                                <hr />
                                <div className="dropdown" onClick={() => toggleDropdown(3)}>
                                    <div className="dropdown-header">
                                        <FaChevronDown className="dropdown-icon" />
                                        <h4>Digital Design</h4>
                                    </div>
                                    <div className={`dropdown-content ${activeDropdowns[3] ? 'active' : ''}`}>
                                        <h5>- Social Media Content</h5>
                                        <h5>- Design Led Presentation</h5>
                                        <h5>- 3D Design</h5>
                                        <h5>- Product Photography</h5>
                                        <h5>- Promotional Video Content</h5>
                                        <h5>- Inspirational Video Content</h5>
                                        <h5>- Explainer Videos</h5>
                                        <h5>- Visually Compelling ads</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='service-content-text-para'>
                            People form habits around what makes them feel good. It could be pleasure, it could be responsibility, integrity, value, or prudence. Your brand is a powerful vehicle packed full of positive reinforcement.<br /><br />
                            Your brand is also <b>you</b>. All of you — the founders, the architects, the daily contributors. Everything that has been put into a venture, by every individual. <br /><br />
                            The first step to branding is understanding what you're all about. "Who" is your business? And what ecosystem of users, competitors, or partners does it inhabit? <br /><br />
                            Once we understand your world, we bring you into ours. How can you consistently communicate the singular vision of your company, at just a glance? Well, that's where we come in.
                        </div>
                    </div>
                </div>
                <div className='top-button'><hr /> <button>Top!</button></div>
                <div className='contact-home'>
                    <h2>Have a project?</h2>
                    <h2>Let's talk.</h2>
                    <div className='contact-action'>
                        <div className='contact-action-circle'></div>
                        <div className='contact-action-word'>Contact</div>
                    </div>
                </div>
            </main>
            <footer class='hero-footer'>
                <div class='footer-col footer-col1'>
                    <div class='footer-title'>Reach us</div>
                    <div class='footer-content'>abc@gmail.com</div>
                </div>
                <div class='footer-col footer-col2'>
                    <div class='footer-title'>Follow us</div>
                    <div class='footer-content'>
                        <a href='' class='footer-nav'>Twitter</a>
                        <a href='' class='footer-nav'>Facebook</a>
                        <a href='' class='footer-nav'>Instagram</a>
                        <a href='' class='footer-nav'>LinkedIn</a>
                    </div>
                </div>
                <div class='footer-col footer-col3'>
                    <div class='footer-title'>Legal Stuff</div>
                    <div class='footer-content'>@AD</div>
                </div>
                <div class='footer-col footer-col4'>
                    <div class='subscribe-title'>INSPIRATION AND INNOVATION COME IN SHORT SUPPLY. GET A REFUEL ON US, DIRECT TO YOUR INBOX.</div>
                    <div class='subscribe-box'>
                        <h4>Enter your email</h4>
                        <h5>Subscribe</h5>
                    </div>
                </div>
            </footer>

        </>

    );
}

export default Branding;

