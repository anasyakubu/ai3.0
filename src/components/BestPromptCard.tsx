// import React from 'react'
import { GoLinkExternal } from "react-icons/go";

const BestPromptCard = () => {
  return (
    <div className="BestPromptCard bg-white text-black rounded-sm">
      <div className="p-5">
        <h6 className="text-sm flex gap-1">
          <span className="underline">
            Help me study vocabulary for a college entrance exam
          </span>{" "}
          <span>
            <GoLinkExternal />
          </span>
        </h6>
      </div>
    </div>
  );
};

export default BestPromptCard;
