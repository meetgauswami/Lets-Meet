import React, { useEffect } from 'react'
import './Contactus.css'

const Contactus = () => {



  return (
    <div>
       <section>
    
    <div className="section-header">
      <div className="container1">
        <h2>Contact Us</h2>
        <p>Send Your Details Info For Contact Our Team After That We Send You A Response.</p>
      </div>
    </div>
    
    <div className="container1">
      <div className="row">
        
        <div className="contact-info">
          <div className="contact-info-item">
            <div className="contact-info-icon">
              <i className="fas fa-home"></i>
            </div>
            
            <div className="contact-info-content">
              <h4>Address</h4>
              <p>Ahmedabad,<br/>Ahmedabad, Gujarat<br/>380061</p>
            </div>
          </div>
          
          <div className="contact-info-item">
            <div className="contact-info-icon">
              <i className="fas fa-phone"></i>
            </div>
            
            <div className="contact-info-content">
              <h4>Phone</h4>
              <p>77780-*****</p>
            </div>
          </div>
          
          <div className="contact-info-item">
            <div className="contact-info-icon">
              <i className="fas fa-envelope"></i>
            </div>
            
            <div className="contact-info-content">
              <h4>Email</h4>
             <p>gauswamimeet471@gmail.com</p>
            </div>
          </div>
        </div>
        
        <div className="contact-form">
          <form action="https://usebasin.com/f/a8d91d81a60b" method='POST' id="contact-form">
            <h2>Send Message</h2>
            <div className="input-box">
              <input type="text" required="true" name="Full Name"/>
              <span>Full Name</span>
            </div>
            
            <div className="input-box">
              <input type="email" required="true" name="Email"/>
              <span>Email</span>
            </div>
            
            <div className="input-box">
              <textarea required="true" name="Message"></textarea>
              <span>Type your Message...</span>
            </div>
            
            <div className="input-box">
              <input type="submit" value="Send" name=""/>
            </div>
          </form>
        </div>
        
      </div>
    </div>
  </section>
    </div>
  )
}

export default Contactus
