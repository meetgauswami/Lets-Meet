import React, { useEffect } from 'react'
import './About.css'


const About = ({ setProgress }) => {

  useEffect(() => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100)
    }, 1000);
  }, [])

  return (
    <div>
      
<section id="section-about" class="about-section">
      <h1>About</h1>
      <div class="all-sections">
        <div data-aos="fade-right" class="mini-section">
          <div class="hexagon">
            <i class="fa fa-fighter-jet" aria-hidden="true"></i>
          </div>
          <div class="text-mini-section">
            <h1>Fast</h1>
            <p>
              Fast load times and lag free interaction, my highest priority.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" class="mini-section">
          <div class="hexagon">
            <i class="fa fa-window-restore" aria-hidden="true"></i>
          </div>
          <div class="text-mini-section">
            <h1>Responsive</h1>
            <p>My layouts will work on any device, big or small.</p>
          </div>
        </div>
        <div data-aos="fade-up" class="mini-section">
          <div class="hexagon">
            <i class="fa fa-rocket" aria-hidden="true"></i>
          </div>
          <div class="text-mini-section">
            <h1>Intuitive</h1>
            <p>Strong preference for easy to use, intuitive UX/UI.</p>
          </div>
        </div>
        <div data-aos="fade-left" class="mini-section">
          <div class="hexagon">
            <i class="fa fa-bolt" aria-hidden="true"></i>
          </div>
          <div class="text-mini-section">
            <h1>Dynamic</h1>
            <p>
              Websites don't have to be static, I love making pages come to life
            </p>
          </div>
        </div>
      </div>
      <div class="who-am-i">
        <div data-aos="zoom-in-up" class="image-me"></div>
        <div class="all-who">
          <h1 data-aos="zoom-in-down">Who am I?</h1>
          <div class="div-para">
            <p data-aos="zoom-in-down">
              Hello everyone, my name is Meet Gauswami and I am a Front End
              Developer from Ahmedabad, India. I am self-taught developer,
              passionate and very fast learner. I have learned how to program
              through various resources, currently I am learning on Youtube
              and Google. I am eager to learn and grow - Everyday. My ambition
              is to make awesome websites, not just good enough.
            </p>
          </div>
          <a download={"Meet Gauswami's CV"} href='resume/resume.pdf' data-aos="zoom-in-down" class="hvr-bounce-to-right">
            Download CV
          </a>
        </div>
      </div>
    </section>
    </div>
  )
}

export default About
