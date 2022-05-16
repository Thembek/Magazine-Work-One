import React from 'react';
import './page94.css';

function Page94(){
    return(
        <div className="Page94" id="page94">
            <div className="pg94-img">
                <img src="https://images.unsplash.com/photo-1586202690180-1967f682ef1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=744&q=80" alt="Image-of-to-do-list" />
            </div>

            <div className="pg94-dtls">
                <div className="pos-div">
                    <h1>To-Do-List</h1>
                    <p>
                        As the Web_dev guild, a week prior, we each had to build a to-do-list.
                        We all then had decided to ample up the software abit by, adding:
                        <br />
                        <br />
                        i) A Splash Page,
                        <br />
                        <br />
                        ii) Landing/Home Page, and
                        <br />
                        <br /> 
                        iii) the to-do-list itself.
                    </p>

                    <a href="https://awehtodolist.netlify.app">
                        https://awehtodolist.netlify.app
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Page94;