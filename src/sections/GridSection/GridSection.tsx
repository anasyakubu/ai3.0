// import React from 'react'
import "./GridSection.scss";
import Image from "../../assets/banner.jpg";

const GridSection = () => {
  return (
    <div className="GridSection">
      <div className="p-20 py-16">
        <div className="">
          <h2 className="text-5xl leading-snug max-w-3xl mx-auto">
            Explore more features in Botz AI
          </h2>
        </div>
        <div className="mt-16">
          <div className="grid lg:grid-cols-2">
            {/* Text */}
            <div className="bg-[#1b1b1b] text-white p-16 h-full w-full flex justify-start">
              <div className="py-16">
                <h3 className="text-xl">Type, talk, and use it your way</h3>
                <p className="mt-5 text-sm">
                  With ChatGPT, you can type or start a voice conversation by
                  tapping the headphone icon in the mobile app.{" "}
                </p>
              </div>
            </div>
            {/* Image */}
            <div className="">
              <img src={Image} alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridSection;
