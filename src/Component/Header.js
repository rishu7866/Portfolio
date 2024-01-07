import React from "react";
// import bc from "./PIC/bc.jpg";
import F from './PIC/F.mp4'
import DP from "./PIC/DP.jpg.png";
import Varify from "./PIC/verification.png";
import Hot from "./PIC/otline.png";
import link from "./PIC/link.png";
import Birth from "./PIC/birthday.png";
import { Link } from "react-router-dom";
// import Home from "./Home";
import Type from "./Type";
import "../CSS/header.css";
const Header = () => {
  return (
    <div className="back">
      <nav>
        <div>
        <video className="bc" autoPlay muted loop>
        <source src={F} type="video/mp4"/>
        </video>
          {/* <img className="bc" src={bc} alt="back" /> */}
          <div className="dp">
            <img className="dp_img" src={DP} alt="DP" />
          </div>
        </div>
        <div>
          <div className="name font1">
            <h1>
              Rishabh Kumar{" "}
              <span className="varify">
                <img src={Varify} alt="logo" />
                (He / Him)
              </span>
            </h1>
            <div className="disp" style={{ fontWeight:"bold",fontSize:"22px", textAlign: "left" }}>
                <Type />
              </div>
              <span className="add font1">Pune, Maharashtra, India</span>
          </div>
          <div class="grid-container">
            <div class="grid-item">
              <span className="ic">
                <img src={Hot} alt="avail" />
              </span>{" "}
              Immidiate Available
            </div>
            <div class="grid-item">
              <span className="link">
                <img src={link} alt="link" />
              </span>
              <Link className="ff res" to="https://drive.google.com/drive/folders/1UwKpAnx6tjgvNDXzkHFIRdRrFXCkao_E" target="_blank">resume</Link>
            </div>
            <div class="grid-item">
              <span className="link">
                <img src={Birth} alt="link" />
              </span>
              02/05/1997
            </div>
          </div>
          <div className="mail">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rishabhk.9835@gmail.com"
              target="_blanck"
              className="ff"
            >
              Click here to Contact me
            </a>
          </div>
          <div className="mt-4 pl-5">
            <ul className="navigation">
              <li>
                <Link to="/" className="ff">Feed</Link>
              </li>
              <li>
                <Link to="/about" className="ff">About</Link>
              </li>
              <li>
                <Link to="/projects" className="ff">Projects</Link>
              </li>
              <li>
                <Link to="/certificate" className="ff">Achievement/Certificate</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
