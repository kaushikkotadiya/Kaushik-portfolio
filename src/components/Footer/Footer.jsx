import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Whatsapp from "@iconscout/react-unicons/icons/uil-whatsapp";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>© 2023 Kaushik.tech, inc. All Rights Reserved.</span>
        <div className="f-icons">
          <a href="https://instagram.com/k.p_kotadiya?igshid=ZDdkNTZiNTM=" target={"_blank"} rel="noopener noreferrer"><Insta color="white" size={"3rem"} /></a>
          <a href="https://wa.me/message/Y3J3EYZXRU3GC1 " target={"_blank"} rel="noopener noreferrer">< Whatsapp color="white" size={"3rem"} /></a>
          <a href="https://github.com/kaushikkotadiya" target={"_blank"} rel="noopener noreferrer"> <Gitub color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
