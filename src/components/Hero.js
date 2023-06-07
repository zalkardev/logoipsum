import React from "react";
import hero from "../img/Hero.png"
function Hero(){
    return(
        <div id="hero">
            <div className="container">
                <div className="hero">
                    <div className="hero--nav">
                        <h1>Grow your <br/>
                            subscription <br/>
                            business</h1>
                        <p>Outcome-centered products that reduce churn, <br/>
                            optimize pricing, and grow your subscription <br/>
                            business end-to-end.</p>
                        <div className="hero--nav__btn">
                            <button>Get started</button>
                            <a href="#"><ion-icon name="arrow-down-outline"></ion-icon></a>
                        </div>
                    </div>
                    <img src={hero} alt=""/>
                </div>

            </div>
        </div>
    )
}
export default Hero;