import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [mode, setMode] = useState('light');    // whether dark mode is enabled or not 
 
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#1d3d6d';
      // showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light mode';
    }
  }
  return (
    <>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <div className="container my-3">
            <TextForm heading="Enter the text to analyze below" mode={mode} />
        </div>
    </>
  );
}

export default App;
