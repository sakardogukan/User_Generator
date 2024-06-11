import User from "./components/User"
import "../src/scss/app.scss"
import NavBar from "./components/NavBar"
import { useState } from "react";
import './output.css'
function App() {
  const [dark,setDark]=useState(false);
  const toogle=()=>{
    setDark(prevDark=>!prevDark);
    console.log(dark);
}


  return (
    <div className={`h-screen flex-col  ${dark?'bg-slate-700':'bg-white'} `}>
      <NavBar toogle={toogle}/>
      <User dark={dark} />
    </div>
  )
}

export default App
