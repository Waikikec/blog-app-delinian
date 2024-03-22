import {
  faFacebook,
  faLinkedin,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="footerLinks">
          <div className="footerLogoSection">
            <img
              src="./logo.png"
              alt="footer_logo_image"
              className="footerLogo"
            />

            <div className="hiddenLists">
              <div className="footerIcons">
                <span>Follow us on:</span>

                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faLinkedin} />
                <FontAwesomeIcon icon={faSquareXTwitter} />
              </div>
            </div>
          </div>

          <ul className="footerList">
            <li className="firstListItem">About</li>
            <li className="footerListItem">About Us</li>
            <li className="footerListItem">Contact Us</li>
            <li className="footerListItem">Feedback</li>
          </ul>

          <ul className="footerList">
            <li className="firstListItem">Services</li>
            <li className="footerListItem">Advertise</li>
            <li className="footerListItem">Our partners</li>
            <li className="footerListItem">GlobalCapital Events</li>
            <li className="footerListItem">Social Community</li>
          </ul>

          <ul className="footerList">
            <li className="firstListItem">My account</li>
            <li className="footerListItem">Subscribe</li>
            <li className="footerListItem">FAQ</li>
            <li className="footerListItem">Renew</li>
          </ul>

          <div className="hiddenLists">
            <ul className="footerList">
              <li className="firstListItem notNeeded">A lot of items</li>
              <li className="footerListItem">Renew</li>
              <li className="footerListItem">Subscribe</li>
              <li className="footerListItem">FAQ</li>
              <li className="footerListItem">Feedback</li>
              <li className="footerListItem">Cookies</li>
              <li className="footerListItem">Renew</li>
              <li className="footerListItem">Privacy Policy</li>
            </ul>
          </div>

          <div className="hiddenLists">
            <ul className="footerList ">
              <li className="firstListItem">Events</li>
              <li className="footerListItem">Meetings</li>
              <li className="footerListItem">Charity</li>
              <li className="footerListItem">Business talks</li>
            </ul>
          </div>
        </div>

        <div className="footerCredits">
          <div className="hiddenIcons">
            <div className="footerIcons">
              <span>Follow us on:</span>

              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faLinkedin} />
              <FontAwesomeIcon icon={faSquareXTwitter} />
            </div>
          </div>

          <div className="leftCreditsText">
            <span>
              Insurance Insider is part of the Delinian Group, Delinian Limited,
              4 Bouverie Street, London, EC4Y 8AX, Registered in England &
              Wales, Company number 00954730
            </span>
          </div>

          <div className="rightCreditsText">
            <span>
              Accessibility | Terms of Use | Privacy Policy | Modern Slavery
              Statement | Cookies Settings
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
