import React from "react";
import "./Footer.css";
// import logo from "../../Assets/assets";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import CallIcon from "@mui/icons-material/Call";

const Footer = () => {
  return (
    <>
      <div className="footer" id="footer">
        <div className="footer-content">
          <div className="footer-content-left">
            <img src="data:image/png;base64,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" alt="" className="footer-logo" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
              maiores quidem officia perferendis consectetur repellat.
            </p>
            <div className="social-icons">
              <FacebookRoundedIcon fontSize="large" className="m-2"/>
              <InstagramIcon fontSize="large" className="m-2"/>
            </div>
          </div>
          <div className="footer-content-center">
            <h4>COMPANY</h4>
            <ul>
              <li>About Us</li>
              <li>Shipping & Return Policy</li>
              <li>Privacy Policy</li>
              <li>Help Center</li>
            </ul>
          </div>
          <div className="footer-content-right">
            <h4>FOR ANY HELP, YOU MAY CALL US AT </h4>
            <ul>
              <li>
                <CallIcon fontSize="small"/>
                111-222-3333
              </li>
              <li>(Monday to Saturday: 10 am - 10 pm, Sunday: 10 am - 7 pm)</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="footer-copyright">
          © 2024 Fashionista.com Ltd. All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
