import { Sound } from "iconsax-react";
import React from "react";

export const HeaderBar = () => {
  return (
    <div className="container w-full justify-between h-[90px] flex items-center">
      <img
        src="/assets/home/detail-dive-logo.svg"
        alt=""
        width={106}
        height={28}
      />
      <div className="flex items-center gap-2">
        <p className="text-primary">SOUND ON</p>
        <div>
          <Sound size="18" color="#FF3B2D" variant="TwoTone" />
        </div>
      </div>
    </div>
  );
};
