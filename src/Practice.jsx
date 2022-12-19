import React, { useEffect, useState } from "react";
import Typewriter from "react-typewriter-effect";
function Practice(){
    return(
        <>
          {/* onInit={(typewriter)=>{
            typewriter.typeString("Priyanshu Patwal").pause(2000).deleteAll().typeString("Web Developer").pause(2000).start();
        }} */}
        <h1> hello I'm
            <h6 style={{color:"red"}}>
        <Typewriter
        // startDelay={1000}
        multiText={['Priyanshu Patwal','Web Developer']}
        typeSpeed={40}
        cursorColor="red"
        multiTextDelay={1000}
        multiTextLoop
        />
        </h6>
        </h1>
        </>
    );
}
export default Practice;