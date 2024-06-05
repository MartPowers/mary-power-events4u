import "./Footer.scss";
import React from "react";
import Instagram from "../../assets/icons/instagram-icon.png";
import Facebook from "../../assets/icons/facebook-icon.png";
import Twitter from "../../assets/icons/twitter-icon.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__group">

          <a href="https://www.instagram.com/">
          <img src={Instagram} alt="Instagram" className="footer__icon" />
          </a>
          <a href="https://www.facebook.com/">
          <img src={Facebook} alt="Facebook" className="footer__icon" />
          </a>
          <a href="https://x.com/">
          <img src={Twitter} alt="Twitter" className="footer__icon" />
          </a>

          <p className="footer__text">© 2024, events4u</p>
       
        </div>
      </div>
    </div>
  );
}

export default Footer;
