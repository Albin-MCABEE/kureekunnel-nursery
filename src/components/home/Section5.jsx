import React from "react";

function Section5() {
  return (
    <div className="bg-[#F1F8E9] px-4 md:px-[40px] xl:px-[124px] 2xl:px-[194px] py-[48px]">
      <h1 className="font-bold text-[20px] sm:text-[30px] lg:text-[40px] text-[#2E7D32] text-center">
        <span className="text-[#1B5E20]">Our</span> Services
      </h1>
      <hr className="w-[170px] mx-auto bg-[#1B5E20] h-1" />
      <p className="text-[#333333] text-[16px] sm:text-[20px] text-center my-4">
        End-to-end support to help farmers grow healthy, productive orchards.
      </p>

     <div className="flex flex-row  gap-4 lg:gap-8 lg:flex-col overflow-hidden overflow-x-scroll">
         <div className="flex  gap-4 lg:gap-8 justify-between">
        <div className="flex flex-col lg:flex-row bg-white rounded-[8px] w-[262px] lg:w-[556px]">
          <div className=" h-[200px] lg:h-auto lg:w-2/5">
            <img
              src="./nutmeg-fruit.svg"
              className="h-full w-full object-cover rounded-t-[8px] lg:rounded-l-[8px]"
              alt="img"
            />
          </div>

          <div className="p-4 lg:p-8 lg:w-3/5">
            <img src="./farming-consultation.svg" className="mb-2" alt="img" />
            <h1 className="text-[#333333] font-semibold text-[16px] lg:text-[24px]">
              Expert Farming <br /> Consultation
            </h1>
            <p className="text-[#333333] text-[14px]">
              Get expert advice on plant selection, grafting techniques, and
              orchard planning. Our consultation ensures you choose the right
              plants and methods for long-term success.
            </p>
            <p className="text-[#2E7D32] text-[14px] font-semibold mt-2">
              Learn More
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row bg-white rounded-[8px] w-[262px] lg:w-[556px]">
          <div className=" h-[200px] lg:h-auto lg:w-2/5">
            <img
              src="./nutmeg-fruit.svg"
              className="h-full w-full object-cover rounded-t-[8px] lg:rounded-l-[8px]"
              alt="img"
            />
          </div>

          <div className="p-4 lg:p-8 lg:w-3/5">
            <img src="./quality-plant.svg" className="mb-2" alt="img" />
            <h1 className="text-[#333333] font-semibold text-[16px] lg:text-[24px]">
              Quality Plants + On- <br /> Site Delivery
            </h1>
            <p className="text-[#333333] text-[14px]">
             We supply premium budded and grafted nutmeg, coconut, mango, and fruit plants. Delivered safely to your site, ready for planting with professional care.
            </p>
            <p className="text-[#2E7D32] text-[14px] font-semibold mt-2">
              Learn More
            </p>
          </div>
        </div>
      </div>
       <div className="flex gap-4 lg:gap-8 justify-between">
        <div className="flex flex-col lg:flex-row bg-white rounded-[8px] w-[262px] lg:w-[556px]">
          <div className=" h-[200px] lg:h-auto lg:w-2/5">
            <img
              src="./nutmeg-fruit.svg"
              className="h-full w-full object-cover rounded-t-[8px] lg:rounded-l-[8px]"
              alt="img"
            />
          </div>

          <div className="p-4 lg:p-8 lg:w-3/5">
            <img src="./land.svg" className="mb-2" alt="img" />
            <h1 className="text-[#333333] font-semibold text-[16px] lg:text-[24px]">
              Land Preparation + <br />  Plantation Making
            </h1>
            <p className="text-[#333333] text-[14px]">
             From land clearing to complete plantation setup, we manage every step. Our team ensures proper planting, spacing, and development for a thriving farm or orchard.
            </p>
            <p className="text-[#2E7D32] text-[14px] font-semibold mt-2">
              Learn More
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row bg-white rounded-[8px] w-[262px] lg:w-[556px]">
          <div className=" h-[200px] lg:h-auto lg:w-2/5">
            <img
              src="./nutmeg-fruit.svg"
              className="h-full w-full object-cover rounded-t-[8px] lg:rounded-l-[8px]"
              alt="img"
            />
          </div>

          <div className="p-4 lg:p-8 lg:w-3/5">
            <img src="./long-term.svg" className="mb-2" alt="img" />
            <h1 className="text-[#333333] font-semibold text-[16px] lg:text-[24px]">
             Long Term <br />  Maintenance Support
            </h1>
            <p className="text-[#333333] text-[14px]">
              We provide ongoing care and technical support for your plantation. From soil health to pruning, we ensure sustainable growth and maximum yield year after year.
            </p>
            <p className="text-[#2E7D32] text-[14px] font-semibold mt-2">
              Learn More
            </p>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
}

export default Section5;
