import React from "react";
import "./FooterElement.scss";
interface FooterElementProps {
  footerHeader: string;
  firstli: string;
  secondli: string;
  thirdli: string;
  fourthli: string;
  fifthli: string;
  sixthli: string;
  seventhli: string;
}
const FooterElement = ({footerHeader,firstli,secondli,thirdli, fourthli,fifthli, sixthli, seventhli}:FooterElementProps) => {
  return (
    <div className="footer-element">
      <h4>{footerHeader}</h4>
      <ul>
        <li>{firstli}</li>
        <li>{secondli}</li>
        <li>{thirdli}</li>
        <li>{fourthli}</li>
        <li>{fifthli}</li>
        <li>{sixthli}</li>
        <li>{seventhli}</li>
      </ul>
    </div>
  );
};

export default FooterElement;
