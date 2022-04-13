import Home from "./pages/Home";
import {Global, css} from "@emotion/react";
import { useState } from "react";

function App() {
  
  const [color, setColor] = useState("#222");
 
  const validateHex = (e) => {
    const reg = /^#([0-9A-F]{3}){1,2}$/i;

    if(reg.test(e)){
      return true;
    }
    
    return false;
  }
  
  const handleChange = (e) => {
    if(validateHex(e.target.value)){
      setColor(e.target.value);
    }
    else{
      setColor("#222");
    }
  }

  return (
   
    <>
      <Global styles={css`
          body{
            background-color: ${color};
          }
      `}/>
      <Home handleChange={handleChange}/>
    </>
      
  );
}

export default App;
