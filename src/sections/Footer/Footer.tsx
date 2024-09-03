// import React from 'react'
import "./Footer.scss";
import Me from "../../assets/logo-me.png";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="p-20">
        <hr />
        <div className="mt-10 flex justify-center text-center">
          <p className="flex gap-3">
            <span> Build with 💛 by </span>
            <span>
              <a href="https://anasyakubu.vercel.app/" target="_blank"></a>
              <img className="w-10" src={Me} alt="Me" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
