import React, {useState} from "react";


export default function TextForm(props) {
   const handleUpClick=() =>{
   // console.log("handleUpClick was clicked");
    let res=text.toUpperCase();
    setText(res);
    props.showAlert("success","Converted to uppercase");
   }
   const handleLwClick=() =>{
   // console.log("handleLwClick was clicked");
    let res=text.toLowerCase();
    setText(res);
    props.showAlert("success","Converted to lowercase");
   }

   const handleCcClick=() =>{
    // console.log("handleCcClick was clicked");
     let res=text.split(' ')
                 .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
                 .join(' ');
     setText(res);
     props.showAlert("success","Converted to camelcase");
    }

    const handleClear=() =>{
        // console.log("handleClear was clicked");
        setText("");
        props.showAlert("success","Text cleared");
        }
    
     const handleCopy=()=>{
         let text=document.getElementById("MyBox");
         text.select();
         navigator.clipboard.writeText(text.value);
         props.showAlert("success","Text has been copied to clipboard");
     }   
        
         
     const handleExtraSpaces=()=>{
      let t=text.split(/[ ]+/);
      setText(t.join(" "));
      props.showAlert("success","Extra spaces has been removed");
  }   
   const handleOnChange=(event) =>{
    //console.log("Text was changed");
    setText(event.target.value);
   }
   
   const [text,setText]=useState(""); 

  return (
    <>
    <div className="container" style={ {color:props.mode==='light'?'black':'white'} }>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="MyBox" className="form-label">
          Processor
        </label>
        <textarea className="form-control" id="MyBox" rows="8" value={text} onChange={handleOnChange} style={ {backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'} } placeholder="Enter Text Here"></textarea>
      </div>

      <button className="btn btn-danger mx-2 my-2" onClick={handleClear}>Delete</button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy to ClipBoard</button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleLwClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleCcClick}>Convert to Camelcase</button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

    </div>
    <div className="container my-3" style={ {color:props.mode==='light'?'black':'white'} }>
        <h2>Text Summary</h2>
        <p>{text.split(" ").length} Words {text.length} characters</p>
        <p>{Math.round(0.008 * text.split(" ").length)} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something in the Text Box to preview"}</p>
    </div>
    </>
  );
}
