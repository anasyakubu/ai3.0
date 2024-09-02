// import React from 'react'
import { GoLinkExternal } from "react-icons/go";
interface PrimaryBtnProps {
  text: string;
  link: string;
}

const primaryBtn: React.FC<PrimaryBtnProps> = ({ text, link }) => {
  return (
    <div className="primaryBtn">
      <button className="bg-black text-white p-3 px-5 rounded-full">
        <a href={`${link}`} className="flex gap-2">
          <span className="text-sm">{text}</span>
          <span>
            <GoLinkExternal />
          </span>
        </a>
      </button>
    </div>
  );
};

export default primaryBtn;
