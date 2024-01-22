import React from 'react'
import bmiImage from '../assets/pexels-antoni-shkraba-4662354.jpg'

function Bmicalculator() {
  return (
    <div>
        <div className='bmi-container'>
            <div className='bmi-calculator'>
                <div className='bmi-form'>
                        <div className='bmi-title'>What is <span style={{color:'#ff9900'}}>BMI</span></div>
                        <div className='bmi-para'>This is use to calculate the body mass  using formula to check the diet</div>
                        <div className='height-weight'>
                            <input type='number' id='bmi-height' placeholder='height in cm'/>
                            <input type='number' id='bmi-weight' placeholder='weight in kg'/>
                        </div>
                        <div className='age-gender'>
                            <input type='number' id='bmi-age' placeholder='Enter your Age'/>
                            <select className='gender-selection'>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <button id='bmi-calculatebtn'>calculate</button>
                </div>
                <div className='bmi-img'>
                    <img src={bmiImage} alt='cardio image'/>
                </div>
            </div>
            <div className='bmi-results'>
                <span style={{paddingLeft:'20px',fontSize:'10pt'}}>Your are an Healthy person</span><span style={{color:'#ff9900',fontSize:'10pt'}}>Learn more</span><span style={{paddingRight:'20px'}}>X</span>
            </div>

        </div>
    </div>
  )
}

export default Bmicalculator