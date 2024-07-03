import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=> {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = ()=> {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClrClick = ()=> {
        let newText = "";
        setText(newText);
    }
    const handleOnChange = (event)=> {
        setText(event.target.value);
    }
    const handleCopy = ()=> {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = ()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const[text, setText] = useState('');
    return (
        <>
        <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} rows="8" placeholder='Enter text here' />
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick} >Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClrClick} >Clear</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy} >Copy text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
        </div>
        <div className="container my-2" style={{color:props.mode==='light'?'black':'white'}}>
            <h5>Your text summary</h5>
            <p>{text.split(" ").filter((elemenet)=> {return elemenet.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutues to read</p>
            <h5>Preview</h5>
            <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
        </div>
        </>
  )
}
