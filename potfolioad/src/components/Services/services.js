import './services.scss';
import { motion } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../Navbar/navbar';

const Services = () => {

    const [exploreHovered, setExploreHovered] = useState(false);

    const handleExploreHover = (isHovered) => {
        setExploreHovered(isHovered);
    };
    const [hoveredCategory, setHoveredCategory] = useState(null);

    const handleCategoryHover = async (category) => {
        setHoveredCategory(category);
    };

    const serviceHeadinggRef = useRef(null);

    const [isLoading, setIsLoading] = useState(true);
    const [showImage, setShowImage] = useState(false);
    const [showBackground, setShowBackground] = useState(false);
    useEffect(() => {
        const serviceHeadinggElement = serviceHeadinggRef.current;
        if (serviceHeadinggElement) {
            serviceHeadinggElement.classList.add('service-headingg-curtain');
        }
    
    
        setTimeout(() => {
            setShowImage(true);
        }, 500);
    
    
        setTimeout(() => {
            setShowBackground(true);
        }, 800);
    }, []);
    
    
    
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
            setTimeout(() => {
                setShowImage(true);
                setTimeout(() => {
                    setShowBackground(true);
                }, 500);
            }, 500);
        }, 800);
    }, []);

    return (
        <>
            <Navbar></Navbar>
            <main>
                <div className="projects-heading">
                    <div className={`proj-logo ${showImage ? 'show-image' : ''} ${showBackground ? 'show-background' : ''}`} ref={serviceHeadinggRef}>
                        <svg className={`proj-text ${window.location.pathname === '/Services' ? 'white-background' : window.location.pathname === '/contact' ? 'white-background' : window.location.pathname === '/projects' ? 'gray-background' : ''}`} viewBox="0 0 200 100">
                            <defs>
                                <clipPath id="text-clip">
                                    <text x="50%" y="100" fontSize="100" fontWeight="normal" textAnchor="middle">
                                        AD
                                    </text>
                                </clipPath>
                            </defs>
                            <text x="50%" y="100" fontSize="100" fontWeight="normal" textAnchor="middle" fill="#fff" stroke="#ccc" strokeWidth="1">
                                AD
                            </text>
                            {showImage && (
                                <image className="proj-image" xlinkHref="marketing.webp" width="100%" height="100%" clipPath="url(#text-clip)" preserveAspectRatio="xMidYMid slice" />
                            )}
                        </svg>
                        {showBackground && (
                            <div className={`proj-background ${window.location.pathname === '/Services' ? 'green-background' : window.location.pathname === '/contact' ? 'blue-background' : window.location.pathname === '/projects' ? 'white-background' : ''}`}></div>
                        )}
                        <svg className="proj-outline" viewBox="0 0 200 100">
                            <text x="50%" y="100" fontSize="100" fontWeight="normal" textAnchor="middle">
                                AD
                            </text>
                        </svg>
                        <h2 className="projects-title">Services</h2>
                    </div>
                </div>
                <div className='service-content'>
                    <div className='service-col-1'>
                        <motion.div className='service-col-heading'
                            onMouseEnter={() => handleCategoryHover('Branding')}
                            onMouseLeave={() => handleCategoryHover(null)} >
                            <a href='/Services/Branding'>
                                <div className='img-wrapper'>
                                    <img className='service-col-heading-img' src='branding.webp' alt='landimg' />
                                </div>
                                <motion.div className='anim-circle'>
                                    <motion.div className='shape-circle dark' animate={{
                                        x: hoveredCategory === 'Branding' ? -80 : -80,
                                        y: hoveredCategory === 'Branding' ? 0 : -40,
                                    }}></motion.div>
                                    <motion.div className='shape-center' animate={{
                                        x: hoveredCategory === 'Branding' ? -40 : -40,
                                        y: hoveredCategory === 'Branding' ? 0 : 0,
                                    }}></motion.div>
                                    <motion.div className='shape-circle light' animate={{
                                        x: hoveredCategory === 'Branding' ? -80 : -80,
                                        y: hoveredCategory === 'Branding' ? -80 : -40,
                                    }}></motion.div>
                                </motion.div>
                                <div className='service-col-heading-text'>
                                    <div className='head'>
                                        <h1>Branding</h1>
                                        <div className='explore'
                                            onMouseEnter={() => handleExploreHover(true)}
                                            onMouseLeave={() => handleExploreHover(false)}
                                        >
                                            <motion.img
                                                src="right-arrow.png"
                                                alt="Right Arrow"
                                                className="arrow-icon-service"
                                                animate={{ opacity: exploreHovered ? 0 : 1, x: exploreHovered ? 10 : 0 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                            <h3>Explore</h3>
                                        </div>
                                    </div>
                                    <div className='para'>We help you to create a unique brand identity that will make you stand out from the crowd.</div>
                                </div>
                            </a>
                        </motion.div>
                        <motion.div className='service-col-heading'
                            onMouseEnter={() => handleCategoryHover('Development')}
                            onMouseLeave={() => handleCategoryHover(null)} >
                            <a href='/Services/Development'>
                                <div className='img-wrapper'>
                                    <img className='service-col-heading-img' src='dev.webp' alt='landimg' />
                                </div>
                                <motion.div className='anim-circle'>
                                    <motion.div className='shape-circle dark' animate={{
                                        x: hoveredCategory === 'Development' ? -80 : -80,
                                        y: hoveredCategory === 'Development' ? -80 : -40,
                                    }}></motion.div>
                                    <motion.div className='shape-center' animate={{
                                        x: hoveredCategory === 'Development' ? -40 : -40,
                                        y: hoveredCategory === 'Development' ? 40 : 0,
                                    }}></motion.div>
                                    <motion.div className='shape-circle light' animate={{
                                        x: hoveredCategory === 'Development' ? -80 : -80,
                                        y: hoveredCategory === 'Development' ? 0 : -40,

                                    }}></motion.div>
                                </motion.div>
                                <div className='service-col-heading-text'>
                                    <div className='head'>
                                        <h1>Development</h1>
                                        <div className='explore'
                                            onMouseEnter={() => handleExploreHover(true)}
                                            onMouseLeave={() => handleExploreHover(false)}
                                        >
                                            <motion.img
                                                src="right-arrow.png"
                                                alt="Right Arrow"
                                                className="arrow-icon-service"
                                                animate={{ opacity: exploreHovered ? 0 : 1, x: exploreHovered ? 10 : 0 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                            <h3>Explore</h3>
                                        </div>
                                    </div>
                                    <div className='para'>We help you to create a unique brand identity that will make you stand out from the crowd.</div>
                                </div>
                            </a>
                        </motion.div>
                        <motion.div className='service-col-heading'
                            onMouseEnter={() => handleCategoryHover('Ongoing Support')}
                            onMouseLeave={() => handleCategoryHover(null)} >
                            <a href='/Services/Ongoing-support'>
                                <div className='img-wrapper'>
                                    <img className='service-col-heading-img' src='support.webp' alt='landimg' />
                                </div>
                                <motion.div className='anim-circle'>
                                    <motion.div className='shape-circle dark' animate={{
                                        x: hoveredCategory === 'Ongoing Support' ? -80 : -80,
                                        y: hoveredCategory === 'Ongoing Support' ? -40 : -40,
                                    }}></motion.div>
                                    <motion.div className='shape-center' animate={{
                                        x: hoveredCategory === 'Ongoing Support' ? -40 : -40,
                                        y: hoveredCategory === 'Ongoing Support' ? 0 : 0,
                                    }}></motion.div>
                                    <motion.div className='shape-circle light' animate={{
                                        x: hoveredCategory === 'Ongoing Support' ? -80 : -80,
                                        y: hoveredCategory === 'Ongoing Support' ? -80 : -40,
                                    }}></motion.div>
                                </motion.div>
                                <div className='service-col-heading-text'>
                                    <div className='head'>
                                        <h1>Ongoing Support</h1>
                                        <div className='explore'
                                            onMouseEnter={() => handleExploreHover(true)}
                                            onMouseLeave={() => handleExploreHover(false)}
                                        >
                                            <motion.img
                                                src="right-arrow.png"
                                                alt="Right Arrow"
                                                className="arrow-icon-service"
                                                animate={{ opacity: exploreHovered ? 0 : 1, x: exploreHovered ? 10 : 0 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                            <h3>Explore</h3>
                                        </div>
                                    </div>
                                    <div className='para'>We help you to create a unique brand identity that will make you stand out from the crowd.</div>
                                </div>
                            </a>
                        </motion.div>
                    </div>
                    <div className='service-col-2'>
                        <div className='service-home-heading'>
                            Where can we take you?
                        </div>
                        <motion.div className='service-col-heading'
                            onMouseEnter={() => handleCategoryHover('Interface Design')}
                            onMouseLeave={() => handleCategoryHover(null)} >
                            <a href='/Services/Interface-design'>
                                <div className='img-wrapper'>
                                    <img className='service-col-heading-img' src='interface.webp' alt='landimg' />
                                </div>
                                <motion.div className='anim-circle'>
                                    <motion.div className='shape-circle dark' animate={{
                                        x: hoveredCategory === 'Interface Design' ? -80 : -80,
                                        y: hoveredCategory === 'Interface Design' ? 15 : -40,
                                        scale: hoveredCategory === 'Interface Design' ? 0.7 : 1,
                                    }}></motion.div>
                                    <motion.div className='shape-center' animate={{
                                        x: hoveredCategory === 'Interface Design' ? -40 : -40,
                                        y: hoveredCategory === 'Interface Design' ? -40 : 0,
                                    }}></motion.div>
                                    <motion.div className='shape-circle light' animate={{
                                        x: hoveredCategory === 'Interface Design' ? -80 : -80,
                                        y: hoveredCategory === 'Interface Design' ? -40 : -40,

                                    }}></motion.div>
                                </motion.div>
                                <div className='service-col-heading-text'>
                                    <div className='head'>
                                        <h1>Interface Design</h1>
                                        <div className='explore'
                                            onMouseEnter={() => handleExploreHover(true)}
                                            onMouseLeave={() => handleExploreHover(false)}
                                        >
                                            <motion.img
                                                src="right-arrow.png"
                                                alt="Right Arrow"
                                                className="arrow-icon-service"
                                                animate={{ opacity: exploreHovered ? 0 : 1, x: exploreHovered ? 10 : 0 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                            <h3>Explore</h3>
                                        </div>
                                    </div>
                                    <div className='para'>We help you to create a unique brand identity that will make you stand out from the crowd.</div>
                                </div>
                            </a>
                        </motion.div>
                        <motion.div className='service-col-heading'
                            onMouseEnter={() => handleCategoryHover('Digital Marketing')}
                            onMouseLeave={() => handleCategoryHover(null)} >
                            <a href='/Services/Digital-marketing'>
                                <div className='img-wrapper'>
                                    <img className='service-col-heading-img' src='marketing.webp' alt='landimg' />
                                </div>
                                <motion.div className='anim-circle'>
                                    <motion.div className='shape-circle dark' animate={{
                                        x: hoveredCategory === 'Digital Marketing' ? -80 : -80,
                                        y: hoveredCategory === 'Digital Marketing' ? -40 : -40,
                                    }}></motion.div>
                                    <motion.div className='shape-center' animate={{
                                        x: hoveredCategory === 'Digital Marketing' ? -40 : -40,
                                        y: hoveredCategory === 'Digital Marketing' ? 40 : 0,
                                    }}></motion.div>
                                    <motion.div className='shape-circle light' animate={{
                                        x: hoveredCategory === 'Digital Marketing' ? -80 : -80,
                                        y: hoveredCategory === 'Digital Marketing' ? -25 : -40,
                                        scale: hoveredCategory === 'Digital Marketing' ? 0.8 : 1,

                                    }}></motion.div>
                                </motion.div>
                                <div className='service-col-heading-text'>
                                    <div className='head'>
                                        <h1>Digital Marketing</h1>
                                        <div className='explore'
                                            onMouseEnter={() => handleExploreHover(true)}
                                            onMouseLeave={() => handleExploreHover(false)}
                                        >
                                            <motion.img
                                                src="right-arrow.png"
                                                alt="Right Arrow"
                                                className="arrow-icon-service"
                                                animate={{ opacity: exploreHovered ? 0 : 1, x: exploreHovered ? 10 : 0 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                            <h3>Explore</h3>
                                        </div>
                                    </div>
                                    <div className='para'>We help you to create a unique brand identity that will make you stand out from the crowd.</div>
                                </div>
                            </a>
                        </motion.div>
                    </div>
                </div>
            </main>
            <div className='contact-footer'>
                <div className='top-button'><hr /> <button>Top!</button></div>
                <div className='contact-home'>
                    <h2>Have a project?</h2>
                    <h2>Let's talk.</h2>
                    <div className='contact-action'>
                        <div className='contact-action-circle'></div>
                        <div className='contact-action-word'>Contact</div>
                    </div>
                </div>
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
            </div>
        </>
    )
}

export default Services