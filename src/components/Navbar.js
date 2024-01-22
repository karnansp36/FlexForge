import React, { useState, useEffect, useRef } from 'react'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const[isNavVisible, setIsNavVisible] = useState(true);
  const prevScrollY =useRef(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleScroll = ()=>{
    const currentScrollY =window.scrollY;

    if(prevScrollY.current< currentScrollY && isNavVisible){
      setIsNavVisible(false);
    }
    else if(prevScrollY.current>currentScrollY || currentScrollY ===0){
      setIsNavVisible(true);
    }

    prevScrollY.current =currentScrollY
  };

    useEffect(()=>{
      window.addEventListener('scroll',handleScroll);

      return () => {
        window.removeEventListener('scroll',handleScroll);
      };
    }, [isNavVisible]);









  return (
    <div>
      <section id='navbar-container' className={isNavVisible ? 'nav-visible' : 'nav-hidden'}>
        <div className='navbar'>
          <div className='brand-name'>Flex<span style={{color:'#FF9900'}}>Forge</span></div>
          <div className='navelements-container'>
            <div className='nav-elements'>Home</div>
            <div className='nav-elements'>Service</div>
            <div className='nav-elements'>Team</div>
            <div className='nav-elements'>Blog</div>
          </div>
          <button className='contact-container'>Contact</button>
          <button className='menu-bar' onClick={toggleMenu}>
            <svg style={{ fill: 'white' }} xmlns="http://www.w3.org/2000/svg" height="20" width="18" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
          </button>
        </div>
        <div className={`mobile-navbar ${isMenuOpen ? 'openMenu' : 'closeMenu'}`}>
          <div className='mobile-nav-elements'>Home</div>
          <div className='mobile-nav-elements'>Service</div>
          <div className='mobile-nav-elements'>Team</div>
          <div className='mobile-nav-elements'>Blog</div>
          <div className='mc-container'>
            <button className='mobile-contact-container'>Contact</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Navbar