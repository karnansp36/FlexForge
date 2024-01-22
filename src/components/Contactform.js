import React from 'react'

function Contactform() {
  return (
    <div>
        <div className='contact-container1'>
            <div className='contact-wrapper1'>
                <div className='about-wrapper1'>
                    <div className='about-title1'><span style={{color:'#ff9900'}}>Feel free to ask</span> anything</div>
                    <p className="about-text1">For your convenience, you can also use the contact form below to send us a message. We'll get back to you as soon as possible.</p>
                    <div className='tabout-container1'>
                        <div className='office-address1'>
                            Our Office Address:123 Main Street, Suite 456,Cityville, State, ZIP
                        </div>
                        <div className='custom-support1'>
                            <span> Customer Support</span>
                            <span>Email: support@example.com</span>
                            <span> Phone: +1 (123) 555-6789</span>
                        </div>
                    </div>
                </div>
                <div className='contact-input1'>
                    <div className='input-name1'>
                        <input type='text' placeholder='Enter your name' id='inputName1'/>
                        <input type='email' placeholder='Enter your mail' id='inputEmail1'/>
                    </div>
                    <div className='input-subject1'>
                        <input type='text' placeholder='Subject'/>
                    </div>
                    <textarea placeholder='Drop us few lines here.....'></textarea>
                    <div className='sendBtn1'>
                        <button className='send-btn1'>Send a Message</button>
                    </div>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Contactform