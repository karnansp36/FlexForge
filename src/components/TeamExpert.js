import React from 'react'
import johnImage from '../assets/pexels-alexa-popovich-9361352.jpg'
import elisaImage from '../assets/pexels-sabel-blanco-1738629.jpg'
import peterImage from '../assets/pexels-krzysztof-biernat-15018025.jpg'

function TeamExpert() {
  return (
    <div>
        <div className='team-container'>
            <div className='expert-team'>
                <div className='team-title'>Team of<span style={{color:'#ff9900'}}> Expert</span></div>
                <div className='team-subtitle'>
                    "Meet our squad of fitness fanatics – your go-to crew for crushing goals and having a blast on your wellness journey!"</div>
                <div className='team-profile'>
                    <div className='team-member'>
                        <div className='profile-image'>
                            <img src={johnImage} alt='john image'/>
                        </div>
                        <div className='profile-container'>
                            <div className='profile-vertical'></div>
                            <div className='profile-name'>John</div>
                        </div>
                        
                    </div>

                    <div className='team-member'>
                        <div className='profile-image'>
                            <img src={elisaImage} alt='john image'/>
                        </div>
                        <div className='profile-container'>
                            <div className='profile-vertical'></div>
                            <div className='profile-name'>Elisa</div>
                        </div>
                        
                    </div>

                    <div className='team-member'>
                        <div className='profile-image'>
                            <img src={peterImage} alt='john image'/>
                        </div>
                        <div className='profile-container'>
                            <div className='profile-vertical'></div>
                            <div className='profile-name'>Peter</div>
                        </div>
                        
                    </div>
                </div>
                
            </div>

        </div>

    </div>
  )
}

export default TeamExpert