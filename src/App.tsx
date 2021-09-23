import React from 'react';
import './App.css';

const App: React.FC = ()=>{

  return(
    <div id="App">
      <div id="stats-container">
        <img src="./image-header-desktop.jpg"></img>
        <div id="stats">
          <p style={{fontWeight: "bold", fontSize: "25px", color: "white"}}>
            Get <span style={{color: "hsl(277, 64%, 61%)"}}>insights</span> that help your business grow.
          </p>
          <p style={{color: "hsla(0, 0%, 100%, 0.6)", fontSize: "10px", lineHeight: "14px"}}>
              Discover the benefits of data analytics and make<br/>
              better decisions regarding revenue, customer<br/>
              experience, and overall efficiency.
          </p>
          <div id="companies-stats">
            <div >
              <p className="value">10k+</p>
              companies
            </div>
            <div>
              <p className="value">314</p>
              templates
            </div>
            <div>
              <p className="value">12M+</p>
              queries
            </div>
          </div>
        </div>

      </div>

      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Rashid's Alazzoni</a>.
      </div>
    </div>
  )
}

export default App;
