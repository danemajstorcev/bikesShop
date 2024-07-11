import React from "react";
import "./Footer.scss";
import FooterElement from "../FooterElement/FooterElement";
import SocialIconsContainer from "../SocialIconsContainer/SocialIconsContainer";
const Footer = () => {
  return (
    <div className="footer">
      <SocialIconsContainer />
      <FooterElement
        footerHeader="Event info"
        firstli="Enter Now"
        secondli="Event Info"
        thirdli="Course Maps"
        fourthli="Race Pack"
        fifthli="Results"
        sixthli="FAQs"
        seventhli="Am I Registered?"
      />
      <FooterElement
        footerHeader="Registration"
        firstli="Volunteers"
        secondli="Gallery"
        thirdli="Press"
        fourthli="Results"
        fifthli="Privacy Policy"
        sixthli="Service Plus"
        seventhli="Contacts"
      />
      <FooterElement
        footerHeader="Schedule"
        firstli="Gallery"
        secondli="About"
        thirdli="Videos"
        fourthli="Results"
        fifthli="FAQs"
        sixthli="Results"
        seventhli="Volunteers"
      />
    </div>
  );
};

export default Footer;
