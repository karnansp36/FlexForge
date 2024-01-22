import React from 'react'
import boxerImage from '../assets/pexels-cottonbro-studio-4753988.jpg'
import poseImage from '../assets/pexels-sabel-blanco-1756959.jpg'
import pushUpImage from '../assets/pexels-ivan-samkov-4162491.jpg'
import jumpingImage from '../assets/pexels-cottonbro-studio-7675412.jpg'
import treadmillImage from '../assets/pexels-andrea-piacquadio-3757954.jpg'
import cardioImage from '../assets/pexels-antoni-shkraba-4662354.jpg'
function Workoutplan() {
  return (
    <div>
        <div className='workout-container'>
            <div className='workout-plan'>
                <div className='workout-title'>
                    <h1 className='workout-text'>The gym is not <span style={{color:'#ff9900'}}>just a place</span></h1>
                    <p> It's a commitment to self-improvement. With each lift, you rewrite your story. Sweat is your ink, determination your pen. What will your story say today?</p>
                </div>
            </div>
            <div className='img-card-container'>
              <div className='first-card'>
                <div className='small-card-container'>
                  <div className='img1-card'>
                      <img src={boxerImage} alt='boxer image'/>
                      <div className='boxerimage-hover'>
                        <div className='boxingimage-text'>
                          "Embrace the challenge, stay consistent, and let the power of boxing elevate your fitness game."
                         <button>Boxing Fitness</button>
                        </div>
                      </div>
                  </div>
                  <div className='img1-card'>
                      <img src={poseImage} alt='pose Image'/>
                      <div className='boxerimage-hover'>
                        <div className='boxingimage-text'>
                          "Embrace the challenge, stay consistent, and let the power of boxing elevate your fitness game."
                         <button>Boxing Fitness</button>
                        </div>
                      </div>
                  </div>
                </div>
                  <div className='img2-card'>
                    <img src={pushUpImage} alt='push up images'/>
                    <div className='boxerimage-hover'>
                        <div className='boxingimage-text'>
                          "Embrace the challenge, stay consistent, and let the power of boxing elevate your fitness game."
                         <button>Boxing Fitness</button>
                        </div>
                      </div>
                  </div>
              </div>

              <div className='second-card'>
                <div className='img2-card'>
                  <img src={jumpingImage} alt='jumping workout image'/>
                      <div className='boxerimage-hover'>
                        <div className='boxingimage-text'>
                          "Embrace the challenge, stay consistent, and let the power of boxing elevate your fitness game."
                         <button>Boxing Fitness</button>
                        </div>
                      </div>
                </div>
                <div className='small-card-container'>
                  <div className='img1-card'>
                    <img src={treadmillImage} alt='treadmill workout Image'/>
                      <div className='boxerimage-hover'>
                        <div className='boxingimage-text'>
                          "Embrace the challenge, stay consistent, and let the power of boxing elevate your fitness game."
                         <button>Boxing Fitness</button>
                        </div>
                      </div>
                  </div>
                  <div className='img1-card'>
                    <img src={cardioImage} alt='cardio workout image'/>
                      <div className='boxerimage-hover'>
                        <div className='boxingimage-text'>
                          "Embrace the challenge, stay consistent, and let the power of boxing elevate your fitness game."
                         <button>Boxing Fitness</button>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Workoutplan