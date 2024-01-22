import React, { useEffect, useRef } from 'react';
import HeroImage from '../assets/anastase-maragos-9dzWZQWZMdE-unsplash.jpg';

function Hero() {
  const heroTextRef = useRef(null);

  useEffect(() => {
    const heroTextElement = heroTextRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add a class to trigger the animation
            heroTextElement.classList.add('animate-hero-text');
          } else {
            // Remove the class when not in view
            heroTextElement.classList.remove('animate-hero-text');
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    observer.observe(heroTextElement);

    return () => {
      observer.disconnect();
    };
  }, []);


  return (
    <div>
        <div className='hero-container'>
            <div className='hero-section'>
                <div className='hero-text-container' ref={heroTextRef}>
                    <h1 className='hero-mainhead'>"Unleash Your <span style={{color:'#ff9900'}}>Inner Hero!</span></h1>
                    <h3 className='hero-thirdhead'> Elevate Your Fitness, Ignite Your Strength. Where Ordinary Ends, Heroes Begin!</h3>
                    <button className='hero-btn'>Join Now</button>
                </div>
                <div className='hero-img'>
                    <img src={HeroImage} alt='hero image'/>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Hero