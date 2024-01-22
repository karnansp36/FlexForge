import React from 'react'
import program4 from '../assets/pexels-hong-son-4010069.jpg'
import program3 from '../assets/pexels-victor-freitas-1092877.jpg'
import program2 from '../assets/pexels-koolshooters-9945075.jpg'
import program1 from '../assets/pexels-scott-webb-28076.jpg'

function Program() {
  return (
    <div>
        <div className='program-container'>
                <div className='part-program'>
                    <div className='program-img'>
                        <img src={program1} alt='power traning program image'/>
                        <div className='program-hover'>
                            <h1>Power Training</h1>
                            <p>Dive into a tailored program</p>
                            <button>Read More</button>
                        </div>
                    </div>
                    <div className='program-img'>
                        <img src={program2} alt='cardio traning image'/>
                        <div className='program-hover'>
                            <h1>Power Training</h1>
                            <p>Dive into a tailored program</p>
                            <button>Read More</button>
                        </div>
                    </div>
                </div>
                <div className='part-program'>
                    <div className='program-img'>
                        <img src={program3} alt='power yoga image'/>
                        <div className='program-hover'>
                            <h1>Power Training</h1>
                            <p>Dive into a tailored program</p>
                            <button>Read More</button>
                        </div>
                    </div>
                    <div className='program-img'>
                        <img src={program4} alt='calisthenics workout image'/>
                        <div className='program-hover'>
                            <h1>Power Training</h1>
                            <p>Dive into a tailored program</p>
                            <button>Read More</button>
                        </div>
                    </div>
                </div>
        </div>

    </div>
  )
}

export default Program