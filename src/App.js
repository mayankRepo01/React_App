import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';


/* eslint-disable jsx-a11y/anchor-is-valid */

function App() {
  const [mode,setMode]=useState("light");

  const toggleMode=()=>{
    if(mode==='light')
      {
        setMode('dark')
        document.body.style.backgroundColor='#201f50'
      }
      else
      {
        setMode('light')
        document.body.style.backgroundColor='white'
      }
  }
  return (
    <>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<div className="container my-3">
<TextForm heading="Enter the Text to Analyze" mode={mode}/>
{/* <About/> */}
</div>

    </>
  );
}



export default App;
