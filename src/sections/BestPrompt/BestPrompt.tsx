// import React from 'react'
import BestPromptCard from "../../components/BestPromptCard";

const BestPrompt = () => {
  return (
    <div className="BestPrompt">
      <div className="p-20">
        <div className="">
          <div className="grid gap-6 lg:grid-cols-3">
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
