// import React from 'react'
import { FaChevronDown } from "react-icons/fa";
import PricingCard from "../../components/PricingCard";

const Pricing = () => {
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
              <PricingCard />
              <PricingCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
