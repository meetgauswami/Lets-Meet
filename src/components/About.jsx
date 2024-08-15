import React, { useEffect } from 'react'


const About = ({ setProgress }) => {

  useEffect(() => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100)
    }, 1000);
  }, [])

  return (
    <div>
      <h1 className='p-5 text-5xl'>About Section</h1>
    </div>
  )
}

export default About
