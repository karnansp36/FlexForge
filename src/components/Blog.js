import React from 'react'
import blogimg1 from '../assets/pexels-ella-olsson-1640777.jpg'
import blogimg2 from '../assets/pexels-karl-solano-2729899.jpg'
import blogimg3 from '../assets/pexels-pixabay-416778.jpg'


function Blog() {
  return (
    <div>
        <div className='blog-container'>
            <div className='blog-wrapper'>
                <div className='blog-title'>Latest <span style={{color:'#ff9900'}}>Blog</span></div>
                <div className='blog-description'>You will get the tips and tricks to maintain fitness</div>
                <div className='blog-list'>
                    <div className='post-container'>
                        <div className='post-img'>
                            <img src={blogimg1} alt='blog post image 1'/>
                        </div>
                        <div className='post-title'>10 Diet foods for the <span style={{color:'#ff9900'}}>Healthy Life style</span></div>
                        <div className='post-content'>This is the best diet food make healthier</div>
                        <button className='postbtn'>Learn more</button>
                    </div>

                    <div className='post-container'>
                        <div className='post-img'>
                            <img src={blogimg2} alt='blog post image 1'/>
                        </div>
                        <div className='post-title'>10 Diet foods for the <span style={{color:'#ff9900'}}>Healthy Life style</span></div>
                        <div className='post-content'>This is the best diet food make healthier</div>
                        <button className='postbtn'>Learn more</button>
                    </div>

                    <div className='post-container'>
                        <div className='post-img'>
                            <img src={blogimg3} alt='blog post image 1'/>
                        </div>
                        <div className='post-title'>10 Diet foods for the <span style={{color:'#ff9900'}}>Healthy Life style</span></div>
                        <div className='post-content'>This is the best diet food make healthier</div>
                        <button className='postbtn'>Learn more</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog