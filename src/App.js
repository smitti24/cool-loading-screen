import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className={"app"}>
        <div className="temp"></div>
        <div className="first-block"></div>
        <div className="second-block"></div>
        <div className="loader">
          <ul>
            <li>W</li>
            <li>E</li>
            <li>L</li>
            <li>C</li>
            <li>O</li>
            <li>M</li>
            <li>E</li>
          </ul>
        </div>
        <div className="third-block"></div>
        <div className="menu">
          <ion-icon name={"menu"}></ion-icon>
        </div>
        <div className={"logo"}>
          <span>Explore</span>
            <div className={"content"}>
                <div className={"heading"}>
                    <span>Faroe Islands</span>
                </div>
                <div className={"desc"}>
                    <p>TEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXTTTTTTTTTTTT</p>
                </div>
                <div className={"link"}>
                    <button type={"button"}>VISIT NOW</button>
                </div>
            </div>
        </div>

          <div className={"img"}>
              <img src={"assets/img/Yogaglo-Calmness-level1_01.png"} alt={""}/>
          </div>
          <div className={"media"}>
              <ui>
                  <li><ion-icon name={"logo-facebook"}></ion-icon></li>
                  <li><ion-icon name={"logo-instagram"}></ion-icon></li>
              </ui>
          </div>
          <div className={"watch"}>
              <ion-icon name={"play"}></ion-icon>
          </div>



      </div>
  );
}

export default App;
