import React from 'react'
import instaimg1 from '../assets/pexels-binyamin-mellish-116077.jpg'
import instaimg2 from '../assets/pexels-victor-freitas-2261485.jpg'
import instaimg3 from '../assets/pexels-victor-freitas-1092877.jpg'
import instaimg4 from '../assets/pexels-jonathan-borba-3076516.jpg'
import instaimg5 from '../assets/pexels-cesar-galeão-3253501.jpg'
import instaimg6 from '../assets/pexels-leon-ardho-1552249.jpg'


function Instaimages() {
  return (
    <div>
        <div className='insta-container'>
            <div className='insta-page'>
                <img src={instaimg1} alt='image gallery'/>
            </div>
            <div className='insta-page'>
                <img src={instaimg2} alt='image gallery'/>
            </div>
            <div className='insta-page'>
                <img src={instaimg3} alt='image gallery'/>
            </div>
            <div className='insta-page'>
                <img src={instaimg4} alt='image gallery'/>
            </div>
            <div className='insta-page'>
                <img src={instaimg5} alt='image gallery'/>
            </div>
            <div className='insta-page'>
                <img src={instaimg6} alt='image gallery'/>
            </div>
            
        </div>
        <div className='map-container'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d124114.85387386216!2d78.15937258870169!3d11.533179786322716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1705655560523!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>



    </div>
  )
}

export default Instaimages