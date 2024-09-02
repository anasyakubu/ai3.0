// import React from 'react'
import { FC, ReactNode } from "react";
// import { FaCheck } from "react-icons/fa6";
import PrimaryBtn from "./primaryBtn";

interface PricingCardProps {
  features: ReactNode[]; // List of pricing features as an array of React nodes
  title: string;
  price: number;
}

const PricingCard: FC<PricingCardProps> = ({ features, title, price }) => {
  return (
    <div className="PricingCard bg-white text-black rounded-lg shadow-lg">
      <div className="p-10 px-16">
        <div>
          <h6 className="text-xl font-semibold">{title}</h6>
        </div>
        {/* Render the list of pricing features */}
        <div className="py-8">
          {features.map((feature, index) => (
            <p className="flex gap-3 text-sm mt-5" key={index}>
              {feature}
            </p>
          ))}
        </div>
        <div className="py-5">
          <h5 className="font-semibold text-xl">
            $ <span className="font-bold">{price}</span> / month
          </h5>
        </div>
        {/* Buttons */}
        <div className="">
          <PrimaryBtn link="/research" text="Start Now" />
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
