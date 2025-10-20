import React from "react";

function Section6() {
  return (
    <div className="bg-white px-4 md:px-[40px] xl:px-[124px] 2xl:px-[194px] py-[48px]">
      <h1 className="font-bold text-[20px] sm:text-[30px] lg:text-[40px] text-[#2E7D32] text-center">
        <span className="text-[#1B5E20]">What our </span> Customer’s Say
      </h1>
      <hr className="w-[170px] sm:w-[270px] mx-auto bg-[#1B5E20] h-1" />
      <p className="text-[#333333] text-[16px] sm:text-[20pxx] text-center my-2">
        Here’s what our happy customers share about their experience.
      </p>
      <div className=" flex justify-between gap-4 overflow-hidden overflow-x-scroll">
        <div className="bg-[#F1F8E9] rounded-[8px]  min-w-[304px] lg:w-auto 2xl:w-[360px] p-8 sm:p-10 ">
          <img src="./quotes.svg" alt="quality-img" />

          <p className="text-[14px]  text-[#333333] mt-2">
            “I purchased grafted nutmeg plants from Kureekunnel Nursery a few
            years ago. They are now yielding well, and the quality is excellent.
            Truly satisfied with the results.”
          </p>
          <h1 className="text-[14px] text-[#333333] font-semibold mt-[16px]">
            George Thomas
          </h1>
          <p className="text-[14px] text-[#333333">Choondy, Ernakulam</p>
        </div>
        <div className="bg-[#F1F8E9] rounded-[8px]  min-w-[304px] lg:w-auto 2xl:w-[360px] p-8 sm:p-10 ">
          <img src="./quotes.svg" alt="quality-img" />

          <p className="text-[14px]  text-[#333333] mt-2">
            “We bought coconut, mango, and jackfruit plants along with
            mangosteen. All were healthy, and today we enjoy fresh fruits from
            our own garden. Highly recommend their plants.”
          </p>
          <h1 className="text-[14px] text-[#333333] font-semibold mt-[16px]">
            Tomy Augustine
          </h1>
          <p className="text-[14px] text-[#333333">Kidangoor, Kottayam</p>
        </div>
        <div className="bg-[#F1F8E9] rounded-[8px]  min-w-[304px] lg:w-auto 2xl:w-[360px] p-8 sm:p-10 ">
          <img src="./quotes.svg" alt="quality-img" />

          <p className="text-[14px]  text-[#333333] mt-2">
            “They managed our full plantation project — from land preparation to
            planting. The maintenance support is excellent, and everything is
            growing beautifully.”
          </p>
          <h1 className="text-[14px] text-[#333333] font-semibold mt-[16px]">
            Anoop T
          </h1>
          <p className="text-[14px] text-[#333333">Vaikom, Kottayam</p>
        </div>
      </div>
    </div>
  );
}

export default Section6;
