// import React from 'react'
import Nav from "../../components/Nav";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="Hero">
      <Nav />
      <div className="p-20 my-32 lg:py-16 flex justify-center text-center">
        <div className="">
          <div className="">
            <h6 className="p-3">Botz AI</h6>
            <h1
              className="mt-3 font-thin heroText"
              style={{ lineHeight: "1.1em" }}
            >
              Get answers. Find inspiration. <br /> Be more productive.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
