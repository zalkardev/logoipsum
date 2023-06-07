import React from "react";

function Footer(){
    return (
        <div id="footer">
            <div className="container">
                <div className="footer--title">
                    <h1>Get the right plan <br/>for future product.</h1>
                    <div className="footer--title__btn">
                        <button>Yearly</button>
                        <button>Monthly</button>
                    </div>
                </div>
                <div className="footer">
                    <div className="footer--block">
                        <h5>Starter</h5>
                        <h2>Free</h2>
                        <h4>1 Website <br/><br/>
                            5 GB Hosting <br/><br/>
                            Limited Support</h4>
                        <center>                        <button>Get Started</button>
                        </center>
                    </div>
                    <div className="footer--block">
                        <h5>Premium</h5>
                        <h2>$29/month</h2>
                        <h4>10 Website <br/> <br/>
                            15 GB Hosting <br/> <br/>
                            Premium Support</h4>
                        <center>           <button>Get Started</button>
                        </center>
                    </div>
                    <div className="footer--block">
                        <h5>Enterprise</h5>
                        <h2>$49/month</h2>
                        <h4>Unlimited Website <br/> <br/>
                            50 GB Hosting <br/> <br/>
                            Premium Support</h4>
                        <center>           <button>Get Started</button>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
