import React from "react";

function Section3() {
  return (
    <div className="bg-[#F1F8E9] px-4 md:px-[40px] xl:px-[124px] 2xl:px-[194px] py-[48px]">
      <h1 className="font-bold text-[20px] sm:text-[30px] lg:text-[40px] text-[#2E7D32] text-center">
        <span className="text-[#1B5E20]">About</span> Kureekunnel Nursery
      </h1>
      <hr className="w-[210px] mx-auto bg-[#1B5E20] h-1" />
      <p className="text-[#333333] text-[16px] sm:text-[20px] text-center mt-2">
        Since 1986, we’ve nurtured premium nutmeg and fruit plants, trusted by
        growers for 45+ years.
      </p>

      <div className="flex flex-col lg:flex-row mt-4 lg:mt-8">
        <div className="lg:w-[50%]">
          <img src="./Nutmeg.svg" className="mx-auto" alt="img" />
        </div>
        <div className="lg:w-[50%] text-[#333333] sm:px-4 mt-4 lg:mt-0">
          <h1 className=" font-semibold text-[32px]">Our Journey</h1>
          <p className="text-[14px] sm:text-[16px]">
            In 1986, at just 23, our founder Mr. Baby Sebastian began his
            journey as a skilled budder and grafter of nutmeg plants, producing
            high-quality varieties from trusted mother plants. What started
            small soon grew into a nursery offering coconut, mango, jackfruit,
            mangosteen, rambutan, and more.{" "}
          </p>
          <p className="text-[14px] sm:text-[16px]">
            With over 45 years of expertise and 3,000+ happy customers, he
            continues to serve growers with premium plants and professional
            grafting services. In recent years, we’ve expanded to provide
            complete plantation solutions — from land clearing to development
            and maintenance — ensuring lasting value for every farmer and
            orchard.
          </p>

         <div className="flex flex-col sm:flex-row sm:gap-6">
             <div className="flex flex-col gap-4 mt-4">
            <div className="flex items-center gap-3">
              <img src="./tick.svg" alt="tick-img" />
              <p className="text-[14px] sm:text-[16px]">45+ years of experience</p>
            </div>
            <div className="flex items-center gap-3">
              <img src="./tick.svg" alt="tick-img" />
              <p className="text-[14px] sm:text-[16px]">Expert Consultation</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            <div className="flex items-center gap-3">
              <img src="./tick.svg" alt="tick-img" />
              <p className="text-[14px] sm:text-[16px]">Premium Plant Quality</p>
            </div>
            <div className="flex items-center gap-3">
              <img src="./tick.svg" alt="tick-img" />
              <p className="text-[14px] sm:text-[16px]">After sale support</p>
            </div>
          </div>
         </div>
            <button className='bg-[#2E7D32] text-white rounded-[8px] py-[10px] sm:py-[12px] px-[30px] sm:px-[40px] mt-4'>Explore Plants</button>

        </div>
      </div>
    </div>
  );
}

export default Section3;
