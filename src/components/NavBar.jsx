import React from "react";
// import { Navbar } from "react-bootstrap";
import "./../output.css"

const NavBar=({toogle})=>{
    const Toogle=()=>{
        toogle()

    }


   
    return(
    <div className="flex justify-between w-full h-16 bg-blue-700">
        <div> </div>
        <div className="text-white font-bold text-2xl text-center italic">Random User Generator </div>
        <div className="bg-blue-500 mr-3 mt-2 rounded-md p-2 text-white border-blue-950 border-3 h-min">
            <button onClick={Toogle} >Switch</button>
        </div>


    </div>

)}

export default NavBar;