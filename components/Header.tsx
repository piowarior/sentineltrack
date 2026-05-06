
import React, { useEffect, useState } from "react";
const Header = () => {
  
  return (
   <>
   <nav className="w-[100vw] h-[100vh] bg-[#1B1B1B] " style={{
  background: "radial-gradient(circle, #133559 0%, #0C2644 100%)"}}> 
    <div className="">
      <ul>
        <li><a href="#"><img className=" w-[100px] " src="/logo/sentinel_logo.png" alt="logo" /></a></li>
      </ul>
    </div>
   </nav>
   </>
  );
};

export default Header;
