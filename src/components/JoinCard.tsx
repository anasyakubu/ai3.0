// import React from 'react'
import PrimaryBtn from "./primaryBtn";

const JoinCard = () => {
  return (
    <div className="JoinCard bg-white rounded-xl text-black p-5 py-24 flex justify-center text-center">
      <div className="">
        <h1 className="text-3xl leading-snug max-w-3xl mx-auto">
          Join thousands of teams redefining how they work with Chattybot
        </h1>
        <div className="mt-10">
          <PrimaryBtn link="/" text="Try Chattybot" />
        </div>
      </div>
    </div>
  );
};

export default JoinCard;
