import React from 'react';
import './page125.css';

import cameraImg from '../../images/camera.png';

function Page82(){
    return(
        <div className="Page125" id="page125" >
            <div className="side-text">
                <div className="sd-txt-top-lbl">
                    <h1>SUPRISE PROJECT</h1>
                </div>
                <div className="line-bottom">
                    <h6>Coming Soon</h6>
                    <div className="pg125-line"></div>
                </div>

                <div className="pg125-text">
                    <p>
                        This is a project I was inspired to do with, and for my friend, Hannah.
                        <br />
                        <br />
                        A freelance photographer, with fabulous, sophisticated, and yet such simple photography.
                        <br />
                        <br />
                        Her charsmatic, and charming energy, always tends to bring the best out of people/clients. 
                        She finds a way to make you feel who you are, and takes it from there.
                        <br />
                        <br />
                        /---- The images on the side are a glimpse of the actual website ----/
                        <br />
                        <br />
                        Hannah's instagram page:
                        <br />
                        <br />
                    </p>
                    <a href="https://www.instagram.com/hannahbenjamin_1950/">
                        @hannahbenjamin_1950
                    </a>
                </div>

            </div>

            <div className="side-imgs">
                <div className="imgs">
                    <div className="imgs-1">
                        <img src="https://images.pexels.com/photos/6765722/pexels-photo-6765722.jpeg" alt="img-descrpt-one" />
                    </div>
                    <div className="imgs-2">
                        <img src={cameraImg} alt="img-dscrpt-two" />
                    </div>
                    <div className="imgs-3">
                        <img src="https://images.unsplash.com/photo-1599407384144-77deae48a47a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="img-dscrpt-three" />
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Page82;
