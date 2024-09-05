import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Images.css'
import { Link } from 'react-router-dom'


const Images = ({ setProgress }) => {
  const [ImgUrl, setImgUrl] = useState("https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg")
  const [Prompt, setPrompt] = useState("")

  const apikey = import.meta.env.VITE_SOME_KEY2;
  const Authorization = import.meta.env.VITE_SOME_KEY3;


  


  useEffect(() => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100)
    }, 1000);
  }, [])

  function scrollToBottom(timedelay = 0) {
    var scrollId;
    var height = 100;
    var minScrollHeight = 10000;
    scrollId = setInterval(function () {
      if (height <= document.body.scrollHeight) {
        window.scrollBy(0, minScrollHeight);
      }
      else {
        clearInterval(scrollId);
      }
      height += minScrollHeight;
    }, timedelay);
  }

  async function generateImage(e) {
    setImgUrl('https://i.pinimg.com/originals/c7/e1/b7/c7e1b7b5753737039e1bdbda578132b8.gif')
    // setAnswer("Loading... It Make Up To 10 Seconds Please Wait....")



    const response = await fetch(
      "https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image",
      {
        headers: { Authorization: `Bearer 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` },
        method: 'POST',
        auth: `Bearer ${apikey}`,
        body: JSON.stringify({ "inputs": Prompt }),

      },
      
    );

    const result = await response.blob();
    return result;

  }

  async function ImageClick() {
    // preventDefault();
    generateImage().then((response) => {
      const objectURL = URL.createObjectURL(response)
      setImgUrl(objectURL);
    });
    scrollToBottom();

    console.log(Prompt)



  }




  return (
    <div>
      <div className='hero-sec'>
        <div className="back">
          <Link to={'/'}>
            <i className="fa-solid fa-left-long"></i>
          </Link>
        </div>
        <div className="Heading">
          <h2>Text To Images</h2>
        </div>
        <div className='chatbot-gif-new'>
          <img src="https://cdn.dribbble.com/users/77598/screenshots/16399264/media/d86ceb1ad552398787fb76f343080aa6.gif" alt="" />
          <h3 className='text-2xl'>Enter Prompt For Image...</h3>
        </div>
        <div className="text-div">
          <form onSubmit={ImageClick} >
            <textarea required onChange={(e) => setPrompt(e.target.value)} type='name' className="text-aria" placeholder='Enter Prompt...'></textarea>
            <button className='cursor-not-allowed' onClick={ImageClick} type='button'><i className="fa-regular fa-paper-plane"></i></button>
          </form>
        </div>
        <div className="p-2 w-full md:w-2/3 lg:w-1/2 xl:w-1/3 text-center rounded-lg bg-white my-4 shadow-lg transition-all duration-500 transform">
          <h3 className='text-2xl p-4 font-bold'>Your Image</h3>
          <img className='p-2' src={ImgUrl} alt="" />
          <a download={`${Prompt}.jpeg`} href={ImgUrl} className='py-1 d-flex font-medium items-center justify-center gap-1 bg-green-400 rounded-lg'>Download<i className="fa-solid fa-download"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Images
