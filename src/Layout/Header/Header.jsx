import React from "react";
import "./Header.css";
import logo from "../../Assets/cc-logo.svg";
import twitter from "../../Assets/twitter.svg";
import discord from "../../Assets/discord.svg";
import instagram from "../../Assets/instagram.svg";
import "bootstrap/dist/css/bootstrap.css";
function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-6 col-md-4 col-lg-4 d-flex align-items-center">
            <img
              src={logo}
              alt="Chubby Cherbus"
              className="img-fluid header-logo"
            />
            <ul className="social-icons">
              <li>
                <a href="#" target="_blank">
                  <img src={instagram} alt="Instgram Icon" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <img src={twitter} alt="Twitter Icon" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <img src={discord} alt="Discord Icon" />
                </a>
              </li>
            </ul>
          </div>
          <button id="js-hamburger" className="hamburger" type="button">
            <span id="js-top-line" className="top-line"></span>
            <span id="js-center-line" className="center-line"></span>
            <span id="js-bottom-line" className="bottom-line"></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
