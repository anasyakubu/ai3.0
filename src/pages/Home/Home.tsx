// import React from "react";
import BestPrompt from "../../sections/BestPrompt/BestPrompt";
import Hero from "../../sections/Hero/Hero";
import RowSection from "../../sections/RowSection/RowSection";

const Home = () => {
  return (
    <div className="text-white">
      <Hero />
      <BestPrompt />
      <RowSection />
    </div>
  );
};

export default Home;
