import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


/* eslint-disable jsx-a11y/anchor-is-valid */

function App() {
  const [mode,setMode]=useState("light");
  const [alert,setAlert]=useState(null);

  const toggleMode=()=>{
    if(mode==='light')
      {
        setMode('dark')
        document.body.style.backgroundColor='#201f50'
        showAlert("success","Dark mode has been enabled");
      }
      else
      {
        setMode('light')
        document.body.style.backgroundColor='white'
        showAlert("success","Light mode has been enabled");
      }
  }

  const showAlert=(type,message)=>{
        setAlert({
                message:message,
                type:type
        });
        setTimeout(() => {
          setAlert(null);
        }, 1000);
  }
  return (
    <>
<Router>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">

    <Routes>
          <Route exact path="/about" element={<About/>}>
          </Route>
          <Route exact path="/" element={<TextForm heading="Enter the Text to Analyze" mode={mode} showAlert={showAlert}/>}>
          
          </Route>
   </Routes>

</div>
</Router>
</>
  );
}



export default App;
