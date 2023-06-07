import React from "react";
import Logo from "../img/Logo.svg"
import Hero from "./Hero";
import Index from "./Index";
import Metric from "./Metric";
import Footer from "./Footer";
function Header(){
    return(
       <div id="header">
           <div className="container">
               <div className="header">
                   <img src={Logo} alt=""/>
                   <div className="header--nav">
                       <a href="#">Home</a>
                       <a href="#">Features</a>
                       <a href="#">Pricing</a>
                       <a href="#">Blog</a>
                   </div>
                   <button>Get started</button>
               </div>
               <Hero/>
               <Index/>
               <Metric/>
               <Footer/>
           </div>
       </div>
    )
}

export default Header;
