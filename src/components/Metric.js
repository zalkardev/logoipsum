import React from "react";
import well from "../img/metric.png"
import way from "../img/card.png"
import wa from "../img/calc.png"
import we from "../img/cam.png"
function Metric(){
    return(
        <div id="metric">
            <div className="container">
                <div className="metric">
                    <div className="metric--nav">
                        <h1>In-depth metrics</h1>
                        <p>Accurate, real-time reporting at your fingertips. <br/>
                            Getting data has never been easier.</p>
                        <h3>Learn more</h3>
                    </div>
                    <img src={well} alt=""/>
                </div>
                <div className="metric--title">
                    <div className="metric--title__nav">
                        <div className="metric--title__nav--text">
                            <center>
                            <img src={way} width="50%" alt=""/>
                            </center>
                            <h4>Benchmarks</h4>
                            <h6>See how you stack up against comparable <br/>
                                companies in similar stages.</h6>
                        </div>
                        <div className="metric--title__nav--text">
                            <center>
                            <img src={wa} width="50%" alt=""/>
                            </center>
                            <h4>Benchmarks</h4>
                            <h6>See how you stack up against comparable <br/>
                                companies in similar stages.</h6>
                        </div>
                        <div className="metric--title__nav--text">
                            <center>
                            <img src={we} width="50%" alt=""/>
                            </center>
                            <h4>Benchmarks</h4>
                            <h6>See how you stack up against comparable <br/>
                                companies in similar stages.</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Metric;
