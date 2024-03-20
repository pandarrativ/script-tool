import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Welcome from "./pages/Welcome";
import Header from './pages/Header';
import { useState } from 'react';
import Home from './pages/Home';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import WdigetSelectionPage from './pages/WdigetSelectionPage';
import ScriptCreation from './pages/ScriptCreation';


import "./assets/css/conversation.css";
import "./assets/css/script-creation.css";
import "./assets/css/draft-editor.css";
import "./assets/css/flow-node.css";







function App() {
  const [lightMode, setLightMode] = useState(true);
  const toggleColorMode = (e) => {
    e.preventDefault(e);
    setLightMode(!lightMode);
  }


    const lightTheme = createTheme({
      palette: {
        primary: {
          main: '#faebcb',
          light: '#2f2f2f',
          dark: '#282828',
          contrastText: '#000',
        },
      },
      components:{
        Accordion: {
          // Add your custom styles for the Accordion here
          border: '1px solid #ccc',
          borderRadius: '4px',
          backgroundColor: 'red',
        },
      }
    });

  const darkTheme = createTheme({
      palette: {
          mode:"dark",
      },
    });


  return (
    
    <div className={`${lightMode ? "":"dark"}`}>
      <ThemeProvider theme={lightMode ? lightTheme : darkTheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome></Welcome>}></Route>
            <Route path="/home" element={<><Header lightMode={lightMode} toggleColorMode={toggleColorMode}></Header><Home lightMode={lightMode}></Home></>}></Route> 
            <Route path="/agent-selection" element={<><Header lightMode={lightMode} toggleColorMode={toggleColorMode}></Header><WdigetSelectionPage lightMode={lightMode} toggleColorMode={toggleColorMode}></WdigetSelectionPage></>}></Route> 
            <Route path="/script-creation" element={<><ScriptCreation lightMode={lightMode}></ScriptCreation></>}></Route>

          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
