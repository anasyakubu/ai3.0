// import React from 'react'
import "./RowSection.scss";
// import Image from "../../assets/site.png";

interface RowSectionProps {
  title: string;
  image: string;
  bg: string;
}

const RowSection: React.FC<RowSectionProps> = ({ title, image, bg }) => {
  return (
    <div className="RowSection">
      <div className="p-24">
        <div className="text-center py-5">
          <h2 className="text-5xl leading-snug max-w-3xl mx-auto">{title}</h2>
        </div>
        <div className={`my-3 p-10 ${bg} rounded-xl shadow-lg`}>
          <img className="rounded-lg shadow-lg" src={image} alt="Image" />
        </div>
      </div>
    </div>
  );
};

export default RowSection;
