import React from 'react'
import featuresimg1 from '../assets/pexels-binyamin-mellish-116077.jpg'
import featuresimg2 from '../assets/pexels-william-choquette-1954524.jpg'
import featuresimg3 from '../assets/pexels-karl-solano-2780762.jpg'

function Features() {
  return (
    <div>
        <div className='features-container'>
            <div className='features-section'>
                <div className='features-img'>
                    <img src={featuresimg1} alt='features image 1'/>
                    <div className='features-hover'>
                        <div className='power-equip'>Power Equipements</div>
                    </div>
                </div>
                <div className='features-img'>
                    <img src={featuresimg2} alt='features Electronics Equipement'/>
                    <div className='features-hover'>
                        <div className='power-equip'>Electronics Equipement</div>
                    </div>
                </div>
                <div className='features-img'>
                    <img src={featuresimg3} alt='features wide space for athelatics'/>
                    <div className='features-hover'>
                        <div className='power-equip'>Wide Space</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features