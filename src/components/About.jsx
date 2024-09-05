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
            <img src="https://img.freepik.com/free-photo/plain-smooth-green-wall-texture_53876-129746.jpg?w=740&t=st=1725523367~exp=1725523967~hmac=dcc2805b20b5a3c0d7e655f08f652bea0f197351192dd039146a515d43b0c4e8" alt=""/>
        </div>
        <div class="imgWrapper">
            <img src="https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30480.jpg?t=st=1725523360~exp=1725523960~hmac=75c45a7c099ad9f76a3404c03d3be518c0dc8df4d019273039ac2f074eaa4194" alt=""/>
        </div>
        <div class="imgWrapper">
            <img src="https://img.freepik.com/free-photo/red-concrete-textured-wall_53876-94017.jpg?w=740&t=st=1725523412~exp=1725524012~hmac=6ebc24633308b57c0b66b9512563351487fd2cff31d391cd897a1c4fc553abb1" alt=""/>
        </div>
        <div class="imgWrapper">
            <img src="https://img.freepik.com/free-photo/painted-solid-concrete-wall-textured-background_53876-101639.jpg?w=740&t=st=1725523434~exp=1725524034~hmac=1fd9b267381534d93e50e3a2646b83bb566a23675fecccb6f023baa2f7d407e8" alt=""/>
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
