import React, { useEffect } from 'react'
import './Home.css'
import {Link} from 'react-router-dom'



const Home = ({setProgress}) => {


    useEffect(()=>{
        setProgress(40);
        setTimeout(() => {
          setProgress(100)
        }, 1000);
      }, [])


  return (
    <div>
           <div className="home">
            <div className="heading">
                <h2>Create with "Let's Meet" generative AI.</h2>
                <p>"Let's Meet" models and services power generative AI features in Our creative apps. Learn about the latest features in Photoshop, Illustrator, Lightroom, and the "Let's Meet" web app.</p>
            </div>
            <div className="features-text">
              <h1>Features</h1>
            </div>
            <div className="functions">
                <Link to="/chatbot">
                  <div className="chat-bot">
                    <img src="https://miro.medium.com/v2/resize:fit:760/1*wM80v-NH9n3gj1KebadXeQ.png" alt="" />
                      <h4>Chat With Me</h4>
                      <p>A piece of software powered by pre-programmed responses or AI to answer questions without the need of a human operator. Welcome To Our Chat.</p>
                      <Link to="/chatbot">VIsit <i class="fa-solid fa-arrow-trend-up"></i></Link>
                  </div>
                  </Link>
                  <Link to="/images">
                  <div className="text-to-image">
                  <img src="https://dl-file.cyberlink.com/web/upload-file/learning-center/enu/2023/8/Thumbnail_20230823202055494.jpg" alt="" />
                      <h4>Text To Image</h4>
                      <p>With the new Our Image 3 Model, you can create higher-quality images with better composition, photorealistic details, and improved mood and lighting.</p>
                      <Link to="/images">VIsit <i class="fa-solid fa-arrow-trend-up"></i></Link>
                  </div>
                  </Link>
                  <Link to={"https://mrclicker.vercel.app/"}>
                  <div className="stock-images">
                    <div className="img-with-text">
                  <img src="https://i.pinimg.com/originals/40/07/3a/40073aaab270160f0a885cc2eaa9956e.png" alt="" />
                  <h1>Stoke Images</h1>
                  </div>
                      <h4>Stoke Images<span class="badge text-bg-danger text-center ml-3">External </span></h4>
                      <p>MrClicker is a free image stock website that provides free images and provide images whithout copyright you can use in your videos and story.</p>
                      <Link to="https://mrclicker.vercel.app/">VIsit <i class="fa-solid fa-arrow-trend-up"></i></Link>
                  </div>
                  </Link>
            </div>
            <div className="creators-first">
              <div className="top">
                <h2>Creators first</h2>
                <p>"Let's Meet" is committed to developing generative AI responsibly, with creators at the center. Our mission is to give creators every advantage — not just creatively, but practically. As "Let's Meet" evolves, we’ll continue to work closely with the creative community to build technology that supports and improves the creative process.</p>
              </div>
              <div className="details">
                   <div className="img-texts-1">
                    <img src="https://www.adobe.com/products/media_121053cbd3ee04a1746641c24ee76b7245743fef0.jpeg?width=2000&format=webply&optimize=medium" alt="" />
                    <h2>Enhance the creative process.</h2>
                    <p>The vision for "Let's Meet" is to help people expand upon their natural creativity. As both a product and an embedded model inside our apps, "Let's Meet" offers generative AI tools made specifically for creative needs, use cases, and workflows.</p>
                   </div>
                   <div className="img-texts-2">
                    <img src="https://www.adobe.com/products/media_13f354d5146020c76721d7118c6c1f697e6ce8d70.jpeg?width=2000&format=webply&optimize=medium" alt="" />
                    <h2>Give creators practical advantages.</h2>
                    <p>"Let's Meet" is designed to be safe for commercial use. The current "Let's Meet" generative AI models were trained on a dataset of licensed content, such as Image Stock, and public domain content where copyright has expired. To ensure that creators can benefit from generative AI, we’ve developed a compensation model for Image Stock contributors whose content is used in the dataset to retrain "Let's Meet" models.</p>
                   </div>
                   <div className="img-texts-3">
                    <img src="https://www.adobe.com/products/media_1db813c546e723d85b85607a7d9f548b9b0f07462.jpeg?width=2000&format=webply&optimize=medium" alt="" />
                    <h2>Set the standard for responsibility.</h2>
                    <p>Through efforts like the Content Authenticity Initiative and the Coalition for Content Provenance and Authenticity, we’re standing up for accountability, responsibility, and transparency in generative AI. We’re working toward a universal “Do Not Train” Content Credentials tag that will remain associated with a piece of content wherever it’s used, published, or stored.</p>
                   </div>
              </div>
            </div>
           </div>
    </div>
  )
}

export default Home
