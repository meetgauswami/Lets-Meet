import React, { useEffect } from 'react'
import { useState } from 'react'
import './Hero.css'
import axios from 'axios'
import ReactMarkdown from "react-markdown";
import {Link} from 'react-router-dom'


const Hero = ({setProgress}) => {

    const apikey = import.meta.env.VITE_SOME_KEY1;


  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("Enter Something For Result...");

  useEffect(()=>{
    setProgress(40);
    setTimeout(() => {
      setProgress(100)
    }, 1000);
  }, [])

  async function generateAnswer(e) {
   setAnswer("Loading... It Make Up To 10 Seconds Please Wait....")
    
    e.preventDefault();

        const response = await axios({
            url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apikey}`,
            method: "post",
            data: {
                contents: [
                    { parts: [{ text: question }] },
                ],
            },
        });

        setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text']);
        console.log(response['data'])
        


    
  }


    return (
        <div className='hero-sec'>
              <div className="back">
          <Link to={'/'}>
            <i class="fa-solid fa-left-long"></i>
          </Link>
        </div>
            <div className="Heading">
                <h2>Chat With Me</h2>
            </div>
            <div className='chatbot-gif'>
                <img src="https://i.ibb.co/48Ffzv0/chatbot.gif" alt="" />
                <h3 className='text-2xl'>Ask Me Something...</h3>
            </div>
            <div className="text-div">
                <form onSubmit={generateAnswer} >
                    <textarea required typeof='submit' value={question} onChange={(e)=>setQuestion(e.target.value)} name="chat-text" className="text-aria" placeholder='Ask Me Something...'></textarea>
                    <button onClick={generateAnswer} type='button'><i className="fa-regular fa-paper-plane"></i></button>
                </form>
            </div>
            <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 text-center rounded-lg bg-white my-4 shadow-lg transition-all duration-500 transform hover:scale-105">
                <h3 className='text-2xl pt-3 font-bold'>Your Result</h3>
                
                <ReactMarkdown className='pre-tag p-4 '>{answer}</ReactMarkdown>
            </div>
        </div>
    )
}

export default Hero
