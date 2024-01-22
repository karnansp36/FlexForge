import React from 'react'
import person1 from '../assets/pexels-anush-gorak-1431283.jpg'

function Review() {
  return (
    <div>
        <div className='review-container'>
          <div className='review-title-tick'>Reviews From the <span style={{color:'#ff9900'}}>Clients</span></div>
          <div className='rev-Container'>
            <div className='review-section'>
                <div className='review-img'>
                    <img src={person1} alt='client profile'/>
                </div>
                <div className='review-article'>
                    <div className='para-review'>"I've been a member for six months, and I can't imagine going anywhere else. The equipment is top-notch, the facility is always clean, and the staff is friendly and helpful. Plus, the personalized workout plans have truly elevated my fitness journey. Highly recommend!"</div>
                    <div className='reviewer-profession'>Game Developer</div>
                    <div className='reviewer-name'>William</div>
                </div>
                <div className='floating-arrow'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Review