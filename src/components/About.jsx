import React, { useEffect } from 'react'
import './About.css'
import Contactus from './Contactus';


const About = ({ setProgress }) => {

  useEffect(() => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100)
    }, 1000);
  }, [])

  return (
    <div>
      <div class="container">
  <div class="contentLeft">
    <div class="row">
        <div class="imgWrapper">
            <img src="https://i.ibb.co/kKHXHcb/Screenshot-20240730-1952091.jpg" alt=""/>
        </div>
        <div class="imgWrapper">
            <img src="https://i.ibb.co/kKHXHcb/Screenshot-20240730-1952091.jpg" alt=""/>
        </div>
        <div class="imgWrapper">
            <img src="https://i.ibb.co/kKHXHcb/Screenshot-20240730-1952091.jpg" alt=""/>
        </div>
        <div class="imgWrapper">
            <img src="https://i.ibb.co/kKHXHcb/Screenshot-20240730-1952091.jpg" alt=""/>
        </div>
    </div>
  </div>
  <div class="contentRight">
    <div class="content">
      <h4>Welcome To</h4>
      <h2>Let's Meet Generative AI</h2>
      <p>Our Website Provide A Chatbot And Text To Image Features. In Chatbot You Can Chat With Our AI Machine And In Text to Image You Can Generate Image From Your Imagination Text And Both Are Totally Free.</p>
      <a href="#">Read More...</a>
    </div>
  </div>
</div>
<Contactus />
    </div>
  )
}

export default About
