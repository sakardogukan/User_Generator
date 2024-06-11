import User from "./components/User"
import "../src/scss/app.scss"
import NavBar from "./components/NavBar"
import { useEffect, useState } from "react";

function App() {
  const [dark,setDark]=useState(false);
  const toogle=()=>{
    setDark(prevDark=>!prevDark);
    console.log(dark);
}


  return (
    <div>
      <NavBar toogle={toogle}/>
      <User theme={dark} />
    </div>
  )
}

export default App
