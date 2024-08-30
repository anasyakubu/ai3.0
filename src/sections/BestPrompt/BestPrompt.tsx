// import React from 'react'
import "./BestPrompt.scss";
import BestPromptCard from "../../components/BestPromptCard";

const BestPrompt = () => {
  return (
    <div className="BestPrompt">
      <div className="p-10">
        <div className="">
          <div className="grid gap-3 lg:grid-cols-3 ">
            <BestPromptCard />
            <BestPromptCard />
            <BestPromptCard />
            <BestPromptCard />
            <BestPromptCard />
            <BestPromptCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestPrompt;
