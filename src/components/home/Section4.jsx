import React from "react";
import AllPlants from "./AllPlants";

function Section4() {
  return (
    <div className="bg-white px-4 md:px-[40px] xl:px-[124px] 2xl:px-[194px] py-[48px]">
      <h1 className="font-bold text-[20px] sm:text-[30px] lg:text-[40px] text-[#2E7D32] text-center">
        <span className="text-[#1B5E20]">Our </span> Plants
      </h1>
      <hr className="w-[110px] mx-auto bg-[#1B5E20] h-1" />
      <p className="text-[#333333] text-[16px] sm:text-[20px] text-center mt-2">
        Premium nutmeg, coconut, mango, and jackfruit plants for your farm.
      </p>
      <div className="flex gap-4 mt-8 overflow-hidden overflow-x-scroll">
        <button className="bg-[#2E7D32] text-white  rounded-[8px] py-[12px] px-[32px]">
          All&nbsp;Plants
        </button>
        <button className="bg-[#F1F8E9] text-[#333333] rounded-[8px] py-[12px] px-[32px]">
          Nutmeg
        </button>
        <button className="bg-[#F1F8E9] text-[#333333] rounded-[8px] py-[12px] px-[32px]">
          Coconut
        </button>
        <button className="bg-[#F1F8E9] text-[#333333] rounded-[8px] py-[12px] px-[32px]">
          Mango
        </button>
        <button className="bg-[#F1F8E9] text-[#333333] rounded-[8px] py-[12px] px-[32px]">
          Jackfruit
        </button>
        <button className="bg-[#F1F8E9] text-[#333333] rounded-[8px] py-[12px] px-[32px]">
          Mangosteen
        </button>
      </div>
      <div className="mt-6">
        <AllPlants />
      </div>
      <div className="flex justify-center items-center">
        <button className="border-[#2E7D32] border text-[#333333] text-[16px] sm:text-[20px] py-[8px] sm:py-[12px] px-[32px] sm:px-[52px] rounded-[8px] mt-8 ">
          View All Plants
        </button>
      </div>
    </div>
  );
}

export default Section4;
