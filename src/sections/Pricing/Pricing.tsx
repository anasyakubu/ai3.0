// import React from 'react'
import "./Pricing.scss";
import { FaChevronDown } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import PricingCard from "../../components/PricingCard";

const Pricing = () => {
  const pricingFeatures = [
    <>
      <span className="py-1">
        <FaCheck />
      </span>
      <span>Assistance with writing, problem-solving, and more</span>
    </>,
    <>
      <span className="py-1">
        <FaCheck />
      </span>
      <span>Access to GPT-4o mini</span>
    </>,
    <>
      <span className="py-1">
        <FaCheck />
      </span>
      <span>Limited access to GPT-4o</span>
    </>,
    <>
      <span className="py-1">
        <FaCheck />
      </span>
      <span>
        Limited access to advanced data analysis, file uploads, vision, web
        browsing, and image generation
      </span>
    </>,
    <>
      <span className="py-1">
        <FaCheck />
      </span>
      <span>Use custom GPTs</span>
    </>,

    // Add more features here...
  ];

  return (
    <div className="Pricing">
      <div className="p-20 py-16">
        <div className="">
          <div className="">
            <h2 className="text-5xl leading-snug max-w-3xl mx-auto">
              Get started with Botz AI today
            </h2>
            <div className="flex justify-center text-center">
              <p className="mt-3 flex gap-3 text-sm">
                <span>View Pricing Plan</span>{" "}
                <span className="py-1">
                  <FaChevronDown />
                </span>
              </p>
            </div>
          </div>
          <div className="py-10">
            <div className="grid gap-5 lg:grid-cols-2">
              <PricingCard price={0} title="Free" features={pricingFeatures} />
              <PricingCard price={20} title="Plus" features={pricingFeatures} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
