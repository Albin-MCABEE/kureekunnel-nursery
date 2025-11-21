// import React from "react";

// function Section1() {
//   return (
//     <div className="bg-[#DFEDD8] flex lg:flex-row flex-col-reverse px-4 md:px-[40px] xl:px-[124px] 2xl:px-[194px] py-[20px] lg:py-[100px]">
//       <div className="lg:w-[50%] pt-4 sm:pt-10 lg:pt-0 xl:pt-10">
//         <h1 className="font-bold text-[20px] sm:text-[40px] leading-6 sm:leading-10 space-x-2">
//           <span className="text-[#1B5E20]">Premium</span>
//           <span className="text-[#2E7D32]">Nutmeg & Fruit</span>
//           <br />
//           <span className="text-[#1B5E20]">Plants</span>
//         </h1>
//         <div className="sm:pe-8">
//           <p className="text-[#333333] text-[14px] sm:text-[16px] leading-[140%] mt-2">
//             Serving growers since 1986, we specialize in premium budded and
//             grafted nutmeg plants, along with coconut, mango, jackfruit,
//             mangosteen, rambutan, and other fruit varieties.{" "}
//           </p>
//           <p className="text-[#333333] text-[14px] sm:text-[16px] leading-[140%] mt-2">
//             From expert consultation to on-site delivery and plantation
//             services, we provide everything you need to build a thriving orchard
//             with trusted quality.
//           </p>
//         </div>

//         <div className="flex gap-3 sm:gap-6 mt-[35px]">
//           <button className="bg-[#2E7D32] text-white rounded-[8px] py-[10px] sm:py-[12px] px-[30px] sm:px-[40px]">
//             Explore Plants
//           </button>
//           <button className="border-[#2E7D32] border bg-white text-[#333333] rounded-[8px] py-[10px] sm:py-[12px] px-[30px] sm:px-[40px]">
//             Contact
//           </button>
//         </div>
//         <button className="flex gap-4 items-center bg-white rounded-[8px] px-[30px] sm:px-[40px] py-[12px] mt-[24px]">
//           <img src="./delivery.svg" alt="delivery-img" />
//           <span className="text-[16px] sm:text-[20px] text-[#333333]">
//             On - Site Delivery Available *
//           </span>
//         </button>
//       </div>
//       <div className="lg:w-[50%]">
//         <img src="./Nutmeg.svg" className="mx-auto" alt="img" />
//       </div>
//     </div>
//   );
// }

// export default Section1;




import React from "react";

function Section1({ onExploreClick, onContactClick }) {
  return (
    <div className="bg-[#DFEDD8] flex lg:flex-row flex-col-reverse px-4 md:px-[40px] xl:px-[124px] 2xl:px-[194px] py-[20px] lg:py-[100px]">
      <div className="lg:w-[50%] pt-4 sm:pt-10 lg:pt-0 xl:pt-10">
        <h1 className="font-bold text-[20px] sm:text-[40px] leading-6 sm:leading-10 space-x-2">
          <span className="text-[#1B5E20]">Premium</span>
          <span className="text-[#2E7D32]">Nutmeg & Fruit</span>
          <br />
          <span className="text-[#1B5E20]">Plants</span>
        </h1>

        <div className="sm:pe-8">
          <p className="text-[#333333] text-[14px] sm:text-[16px] leading-[140%] mt-2">
            Serving growers since 1986, we specialize in premium budded and
            grafted nutmeg plants, along with coconut, mango, jackfruit,
            mangosteen, rambutan, and other fruit varieties.
          </p>
          <p className="text-[#333333] text-[14px] sm:text-[16px] leading-[140%] mt-2">
            From expert consultation to on-site delivery and plantation
            services, we provide everything you need to build a thriving orchard
            with trusted quality.
          </p>
        </div>

        <div className="flex gap-3 sm:gap-6 mt-[35px]">
          <button
            onClick={onExploreClick}
            className="bg-[#2E7D32] text-white rounded-[8px] py-[10px] sm:py-[12px] px-[30px] sm:px-[40px] cursor-pointer"
          >
            Explore Plants
          </button>
          <button
            onClick={onContactClick}
            className="border-[#2E7D32] border bg-white text-[#333333] rounded-[8px] py-[10px] sm:py-[12px] px-[30px] sm:px-[40px] cursor-pointer"
          >
            Contact
          </button>
        </div>

        <button 
          onClick={onContactClick}
          className="flex gap-4 items-center bg-white rounded-[8px] px-[30px] sm:px-[40px] py-[12px] mt-[24px] cursor-pointer">
          <img src="./delivery.svg" alt="delivery-img" />
          <span className="text-[16px] sm:text-[20px] text-[#333333]">
            On - Site Delivery Available *
          </span>
        </button>
      </div>
      <div className="lg:w-[50%]">
        <img src="./Nutmeg.svg" className="mx-auto" alt="img" />
      </div>
    </div>
  );
}

export default Section1;
