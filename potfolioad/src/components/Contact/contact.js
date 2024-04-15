import './contact.scss';
import { motion, useAnimation, useViewportScroll, useTransform } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';

const Contact = () => {

    const [scrollY, setScrollY] = useState(0);
  const [maxScrollY, setMaxScrollY] = useState(0);
  const [initialOffset, setInitialOffset] = useState(0);
  const scrollImgRef = useRef(null);
  const minY = initialOffset - window.innerHeight / 2;
  const translateY = Math.max(Math.min(-scrollY * 0.9, 0), -maxScrollY);
  const pageHintRef = useRef(null);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const [showHome, setShowHome] = useState(false);
  const [showHello, setShowHello] = useState(true);

  const handleHover = () => {
    setShowHome(true);
    setShowHello(false);
  };

  const handleHoverLeave = () => {
    setShowHome(false);
    setShowHello(true);
  };


  const toggleNav = () => {
    document.body.classList.toggle('nav-open');
    setIsNavOpen(!isNavOpen);
  };

  const videoRef = useRef(null);
  const [currentVideoUrl, setCurrentVideoUrl] = useState('');

  const handleNavItemHover = (videoUrl) => {
    setCurrentVideoUrl(videoUrl);
  };




const [hideStartLabel, setHideStartLabel] = useState(false);
const footerRef = useRef(null);
  const { scrollYProgress } = useViewportScroll();
  const xRange1 = useTransform(scrollYProgress, [0, 1], ['100%', '-100%']);
  const xRange2 = useTransform(scrollYProgress, [0, 1], ['-100%', '100%']);


  const [animationIndex, setAnimationIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationInterval = useRef(null);

  const startAnimation = () => {
    setIsAnimating(true);
    animateCategories();
  };

  const stopAnimation = () => {
    setIsAnimating(false);
    setAnimationIndex(0);
    clearInterval(animationInterval.current);
  };

  const animateCategories = () => {
    const categories = ['Branding', 'Interface Design', 'Development', 'Digital Marketing', 'Ongoing Support'];
    let currentIndex = 0;

    const animationLoop = () => {
      const category = categories[currentIndex];
      handleCategoryHover(category);

      currentIndex = (currentIndex + 1) % categories.length;
      animationInterval.current = setTimeout(animationLoop, 3000);
    };

    animationLoop();
  };

  useEffect(() => {
    startAnimation();

    return () => {
      stopAnimation();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const scrollImgElement = scrollImgRef.current;
    if (scrollImgElement) {
      const circleElement = document.querySelector('.home-circle');
      const circleCenter = circleElement.offsetTop + circleElement.offsetHeight / 2;
      const maxScroll = circleCenter - window.innerHeight / 2 + 200;
      setInitialOffset(scrollImgElement.offsetTop);
      setMaxScrollY(maxScroll);
    }
  }, []);

  const handleIntersect = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const scrollImgElement = scrollImgRef.current;
        if (scrollImgElement) {
          setInitialOffset(scrollImgElement.offsetTop - window.innerHeight / 2);
        }
      }
    });
  };



  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.5,
    });

    const homeCircleElement = document.querySelector('.home-circle');
    if (homeCircleElement) {
      observer.observe(homeCircleElement);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

    const [hoveredCategory, setHoveredCategory] = useState(null);

    const handleCategoryHover = async (category) => {
        setHoveredCategory(category);

    };
    return (

        <>
             <header className="header">
        <div className="container">
          <div class="page-hint " ref={pageHintRef}>
            <span class="hint__text hint__text--loading"></span>
            <svg aria-hidden="true" width="11" height="56" viewBox="0 0 11 56" class="icon-arrow-scroll">
              <path d="M5.5,0 L5.5,56 M0,50.5 L5.5,56 L11,50.5" stroke="#000" stroke-width="1" fill="none"></path>
            </svg>
          </div>
          <div className="row row--items-middle">
            <div className="col-1 col-nav-btn">
              <button id="nav-btn" type="button" aria-label="menu" className="nav-btn d-block" onClick={toggleNav}>
                <span aria-hidden="true" className="nav-btn__bar nav-btn__bar-1"></span>
                <span aria-hidden="true" className="nav-btn__bar nav-btn__bar-2"></span>
                <span aria-hidden="true" className="nav-btn__bar nav-btn__bar-1 nav-btn__bar--closed"></span>
                <span aria-hidden="true" className="nav-btn__bar nav-btn__bar-2 nav-btn__bar--closed"></span>
              </button>
            </div>
            <div className="col-6 col-offset-2 col-md-3 col-offset-md-0 col-lg-1 col-logo" onMouseEnter={handleHover} onMouseLeave={handleHoverLeave}>
              <a href="/" id="logo" className="header__logo">
                AD
              </a>
            </div>
            <div className="col-2 col-offset-1 col-header-title">
              {!isNavOpen ? (
                <>
                  <h1 className={`header__text header__text--title ${showHello ? 'show' : 'hide'}`}>Hello</h1>
                  <h1 className={`header__text header__text--title ${showHome ? 'show' : 'hide'}`}>Home</h1>
                </>
              ) : (
                <>
                  <h1 className={`header__text header__text--title ${showHello ? 'show' : 'hide'}`}>Index</h1>
                  <h1 className={`header__text header__text--title ${showHome ? 'show' : 'hide'}`}>Home</h1>
                </>
              )}
            </div>
          </div>
          <div className='start-project'>
            <div className='start-cont'>
              <a href="/contact" className='nav-contact'>
                <div className='start-circle'></div>
                <span className={`start-label ${hideStartLabel ? 'hide' : ''}`}>Start a project</span>
          
              </a>
            </div>
          </div>
        </div>

      </header>
      <nav id="nav" className={`nav ${isNavOpen ? 'nav-open' : ''}`}>
        <div id="nav-container" className="nav-container">
          <div className="nav__logo">
            <div className="nav__logo-text">AD</div>
            <div className="nav__logo-video">
              <video ref={videoRef} loop muted></video>
            </div>
          </div>
          <div className="container">
            <div className="row row--items-middle nav-row">
              <ul id="nav-list" className="col-11 col-offset-1 col-md-6 col-offset-md-3 nav-list nopad">
                <li id="nav-item-services" data-node-id="49" className="nav-item">
                  {/* onMouseEnter={() => handleNavItemHover('/assets/videos/services.mp4')} */}
                  <motion.a whileHover={{ x: 25 }} id="nav-link-services" href="/Services" className="nav-link">
                    <motion.span whileHover={{ x: 25 }} className="nav-link-label">Services</motion.span>
                  </motion.a>
                </li>
                <li id="nav-item-projects" data-node-id="7" className="nav-item">
                  <motion.a whileHover={{ x: 25 }} id="nav-link-projects" data-mask-video="/files/24b3e92e/projects.mp4" data-header-image="/assets/w1700-s5-q75-p1/f0b76847/viviana_rishe_j2330n6bg3i_unsplash.jpg" href="/projects" className="nav-link">
                    <motion.span whileHover={{ x: 25 }} className="nav-link-label">Projects</motion.span>
                  </motion.a>
                </li>
                <li id="nav-item-us" data-node-id="4" className="nav-item">
                  <motion.a whileHover={{ x: 25 }} id="nav-link-us" data-mask-video="/files/24b3e92e/us.mp4" href="/us" className="nav-link">
                    <motion.span whileHover={{ x: 25 }} className="nav-link-label">Us</motion.span>
                  </motion.a>
                </li>
                <li id="nav-item-journal" data-node-id="10" className="nav-item">
                  <motion.a whileHover={{ x: 25 }} id="nav-link-journal" data-mask-video="/files/bdbab894/blog.mp4" href="/journal" className="nav-link">
                    <motion.span whileHover={{ x: 25 }} className="nav-link-label">Journal</motion.span>
                  </motion.a>
                </li>
                <li id="nav-item-contact-us" data-node-id="12" className="nav-item">
                  <motion.a whileHover={{ x: 25 }} id="nav-link-contact-us" data-mask-video="/files/bdbab894/contact.mp4" data-header-image="/assets/w1700-s5-q75-p1/42b28034/luca_bravo_9l_326fiszk_unsplash.jpg" href="/contact" className="nav-link">
                    <motion.span whileHover={{ x: 25 }} className="nav-link-label">Contact</motion.span>
                  </motion.a>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </nav>
            <div className='main-content'>
            <div className='service-heading'>
                <div className='service-heading-text'>
                Let's build something awesome together.
                </div>
                <div className="service-logo">
                    <div class="ad-text">AD</div>
                </div>
            </div>
            <div className='contact-content'>
                <div className='contact-form'>
                    <form>
                        <div className='form-group'>
                            <input type='text' id='name' name='name' placeholder='Your name' required />
                        </div>

                        <div className='form-group'>
                            <input type='email' id='email' name='email' placeholder='Work email' required />
                        </div>

                        <div className='form-group'>
                            <input type='tel' id='phone' name='phone' placeholder='Phone' required />
                        </div>

                        <div className='form-group'>
                            <div className='budget-container'>
                                <input type='text' id='budgetdiv' name='budgetdiv' placeholder='What is your budget?' required />
                                <select id='budget' name='budget' required>
                                    <option value='' disabled selected>Select a price range</option>
                                    <option value='under30k'>Under $30,000</option>
                                    <option value='30k-50k'>$30,000 - $50,000</option>
                                    <option value='50k-100k'>$50,000 - $100,000</option>
                                    <option value='over100k'>$100,000+</option>
                                    <option value='tbd'>TBD</option>
                                </select>
                            </div>
                        </div>

                        <div className='form-group'>
                            <div className='budget-container'>
                                <label htmlFor='attachment' className='attach'>Any docs to attach?</label>
                                <input type='file' id='attachment' name='attachment' className='file-input' />
                                <label htmlFor='attachment' className='file-label'>Select a file</label>
                            </div>
                        </div>

                        <div className='form-group'>
                            <textarea id='message' name='message' placeholder='Please tell us a bit about your project..' required></textarea>
                        </div>

                        <button type='submit'>Send</button>
                    </form>
                </div>
                <div className='contact-title'>
                    <h1>Tell us about your goals, and we'll get back to you right away!</h1>
                    <img src='contact.webp' alt='not working'></img>
                </div>
            </div>
            </div>
            <footer  ref={footerRef} class='hero-footer'>
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
};

export default Contact;