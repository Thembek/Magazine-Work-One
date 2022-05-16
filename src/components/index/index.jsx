import React from 'react';

import './index.css';

import Pg42Img from '../../images/pexels-amin-imanifar-755721.jpg';


function Intro(){
    return(
        <div className="Intro">
            <div className="index-name">
                <h1>CONTENTS</h1>
            </div>
            <div className="index-sub">
                <h1>YEAR 2022</h1><h2> * NOV 2022 - MAY 2022</h2>
            </div>
            <div className="pos-line">
                <div className="index-line"></div>
            </div>
            
            <div className="index-dscrpt">
                <h1>EVERDAY EASY</h1>
            </div>

            <div className="index-1">
                <div className="pos">
                    <a href="#page42">42</a>
                    <h1>PERSONAL WEB-PORTFOLIO</h1>
                    <h2>* Developing my first ever persoal portfolio website.</h2>
                </div>
            </div>

            <div className="index-2">
                <div className="pos">
                    <a href="#page64">64</a>
                    <h1>TRIBUTE</h1>
                    <h2>* A tribute website built in honour to our hero.</h2>
                </div>
            </div>

            <div className="index-3">
                <div className="pos">
                    <a href="#page82">82</a>
                    <h1>ABSA HACKATHON</h1>
                    <h2>* A hackathon tackling the issue that South Africa face with youth unemployment.</h2>
                </div>
            </div>

            <div className="index-4">
                <div className="pos">
                    <a href="#page94">94</a>
                    <h1>MINI WEB_DEV GUILD CHALLENGES</h1>
                    <h2>* Portable to-do-list in your hands at all time.</h2>
                </div>
            </div>

            <div className="index-5">
                <div className="pos">
                    <a href="#page110">110</a>
                    <h1>DESIGN EXECUTION</h1>
                    <h2>* Honouring Mercedes AMG Petronas Formula 1 Racing Team for their impact with the icon AMG Mercedes class.</h2>
                </div>
            </div>

            <div className="index-6">
                <div className="pos">
                    <a href="#page125">125</a>
                    <h1>IN PROGRESS</h1>
                    <h2>* GUESS WHAT IT IS.</h2>
                </div>
            </div>
        </div>
    );
}

export default Intro;