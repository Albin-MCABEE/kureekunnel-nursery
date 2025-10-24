import React from "react";

function Footer() {
  return (
    <div className="bg-[#2E7D32] text-white flex flex-col lg:flex-row justify-between px-4 md:px-[40px] xl:px-[124px] 2xl:px-[194px] py-[48px]">
      <div>
        <h1 className="text-[20px] sm:text-[32px] font-bold mb-3 text-center lg:text-left">
          Kureekunnel Nursery
        </h1>
        <p className="text-[14px] sm:text-[16px] text-center lg:text-left">
          Established in 1986, we’ve been growing quality <br /> plants for over
          four decades.
        </p>
      </div>

      <div className="flex flex-col items-center lg:items-end ">
        <img src="./facebook.svg" alt="img" className="my-3 lg:mb-10" />
        <p className="text-[14px] sm:text-[16px] text-center lg:text-right">
          2025-26. Kureekunnel Nursery. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
