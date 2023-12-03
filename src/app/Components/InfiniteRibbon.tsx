import React from "react";
import { Icon } from ".";

export const InfiniteRibbon = () => {
  return (
    <div className="relative z-[500] h-[111px] overflow-x-hidden w-full bg-primary flex items-center">
      <div className=" flex items-center gap-10">
        <div className="flex ribbon items-center italic text-[80px] gap-6 text-black-state infiniteRibbon">
          <h2 className="whitespace-nowrap text-black-state">CREATIVE!</h2>
          <Icon height="58" width="58" id="diamond-star" color="#000" />
          <h2 className="whitespace-nowrap text-black-state">INNOVATIVE!</h2>
          <Icon height="58" width="58" id="diamond-star" color="#000" />
          <h2 className="whitespace-nowrap text-black-state">DETAILED!</h2>
        </div>
        <div className="flex ribbon items-center italic text-[80px] gap-6 text-black-state infiniteRibbon">
          <h2 className="whitespace-nowrap text-black-state">CREATIVE!</h2>
          <Icon height="58" width="58" id="diamond-star" color="#000" />
          <h2 className="whitespace-nowrap text-black-state">INNOVATIVE!</h2>
          <Icon height="58" width="58" id="diamond-star" color="#000" />
          <h2 className="whitespace-nowrap text-black-state">DETAILED!</h2>
        </div>
        <div className="flex ribbon items-center italic text-[80px] gap-6 text-black-state infiniteRibbon">
          <h2 className="whitespace-nowrap text-black-state">CREATIVE!</h2>
          <Icon height="58" width="58" id="diamond-star" color="#000" />
          <h2 className="whitespace-nowrap text-black-state">INNOVATIVE!</h2>
          <Icon height="58" width="58" id="diamond-star" color="#000" />
          <h2 className="whitespace-nowrap text-black-state">DETAILED!</h2>
        </div>
      </div>
    </div>
  );
};

export const BigInfiniteRibbon = () => {
  return (
    <div className="relative z-[500] h-[150px] sm:h-[273px] overflow-x-hidden w-full bg-primary flex items-center">
      <div className="flex items-center tracking-[-0.12em] text-[100px] sm:text-[200px] gap-6 text-black-state">
        <h2 className="whitespace-nowrap ribbon text-black-state">WORK WITH US</h2>
        <h2 className="whitespace-nowrap ribbon text-black-state">WORK WITH US</h2>
        <h2 className="whitespace-nowrap ribbon text-black-state">WORK WITH US</h2>
        <h2 className="whitespace-nowrap ribbon text-black-state">WORK WITH US</h2>
        <h2 className="whitespace-nowrap ribbon text-black-state">WORK WITH US</h2>
        <h2 className="whitespace-nowrap ribbon text-black-state">WORK WITH US</h2>
        <h2 className="whitespace-nowrap ribbon text-black-state">WORK WITH US</h2>
      </div>
    </div>
  );
};
