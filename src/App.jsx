import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { BrowserRouter,  Routes, Route} from "react-router-dom";
import Images from './components/Images';
import About from './components/About';
import LoadingBar from 'react-top-loading-bar';
import Home from './components/Home';


function App() {
  const [progress,setProgress] = useState(0);

 
  

  return (
    <BrowserRouter>
    <div>
      <Navbar />
      <LoadingBar height={3} color='rgb(0, 255, 226)' progress={progress} onLoaderFinished={() => setProgress(0)}/>
      <Routes>
        <Route exact path="/" element={<Home   setProgress= {setProgress}/>}></Route>
        <Route exact path="/chatbot" element={<Hero   setProgress= {setProgress}/>}></Route>
        <Route exact path="/images" element={<Images  setProgress= {setProgress}/>}></Route>
        <Route exact path="/about" element={<About    setProgress= {setProgress}/>}></Route>
        </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
