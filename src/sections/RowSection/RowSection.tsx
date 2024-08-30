// import React from 'react'
import "./RowSection.scss";
import Image from "../../assets/site.png";

const RowSection = () => {
  return (
    <div className="RowSection">
      <div className="p-24">
        <div className="text-center py-5">
          <h2 className="text-5xl leading-snug max-w-3xl mx-auto">
            Writes, brainstorms, edits, and explores ideas with you
          </h2>
        </div>
        <div className="my-3 p-10 bg-yellow-600 rounded-xl shadow-lg">
          <img className="rounded-lg shadow-lg" src={Image} alt="Image" />
        </div>
      </div>
    </div>
  );
};

export default RowSection;
