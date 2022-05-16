import React from 'react';
import './home.css';

export default function Home(){
    return(
        <div className="Home" id="page1">
            <img src="https://images.unsplash.com/photo-1499673610122-01c7122c5dcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1027&q=80" alt="food-with-must-have-black-background" />
            <div className="top-name">
                <h1>WORKS</h1>

                <div className="wlwrths-name">
                    <h3>MAGAZINE</h3>
                </div>
                <div className="pblsh-dt">
                    <h6>November 2021 - May 2022  GITHUB </h6><a href="https://github.com/Thembek">www.github.com/Thembek</a>
                </div>
            </div>

            <div className="dscrpt-1">
                <h1>CODING CHALLENGES</h1>
                <div className="align">
                    <a href="#page42">Ace's first ever personal web portfolio</a><div className="crcl"></div><a href="#page64">A tribute website like none other</a>
                </div>
                <div className="fix">
                    <a href="#page94">A to-do-list web-app</a>
                </div>
                <div className="line"></div>
            </div>

            <div className="dscrpt-2">
                <h1>TASKS AT HAND</h1>
                <div className="align">
                    <a href="#page82">Hackathon assemble</a><div className="crcl"></div><a href="#page110">Design prototype brought to life</a>
                </div>
                
                <div className="line"></div>
            </div>

            <div className="dscrpt-3">
                <h1>A PROJECT AT HAND</h1>
                <div className="align">
                    <a href="#page125">Life is a C.A.M.E.R.A</a>
                </div>
                <div className="line"></div>
            </div>

            <div className="pos-crcl">
                <div className="crcl-dtl">
                    <h3>WEB_DEV</h3>
                    <h4>100% OFF</h4>
                    <h5>GUILD MEMBER</h5>
                    <h6>INSTANTLY</h6>
                    <h1>A MOVE ONTO REACT</h1>
                </div>
            </div>
            
            <div className="img-dscrpt">
                <h1>FRESH BAKED BROWN BREAD</h1>
            </div>

        </div>
    );
}