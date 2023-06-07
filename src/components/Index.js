import React from "react";
import first from "../img/first.svg"
import second from "../img/second.svg"
import third from "../img/third.svg"
import fourth from "../img/fourth.svg"
import fiveth from "../img/fiveth.svg"
import index from  "../img/index.png"
function Index(){
    return(
        <div id="index">
            <div className="container">
                <div className="index--img">
                    <img src={first} alt=""/>
                    <img src={second} alt=""/>
                    <img src={third} alt=""/>
                    <img src={fourth} alt=""/>
                    <img src={fiveth} alt=""/>
                </div>
                <div className="index">
                    <img src={index} alt=""/>
                    <div className="index--nav">
                        <h1>Subscription index</h1>
                        <p>A daily dataset to keep you up to date on <br/>
                            subscription market trends and what's happening in <br/>
                            your vertical.</p>
                        <h3>Learn more</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Index;