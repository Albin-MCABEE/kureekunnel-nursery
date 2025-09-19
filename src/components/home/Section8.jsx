import React from "react";

function Section8() {
  return (
    <div className="bg-white px-4 md:px-[40px] xl:px-[124px] 2xl:px-[194px] py-[48px]">
      <h1 className="font-bold text-[20px] sm:text-[30px] lg:text-[40px] text-[#2E7D32] text-center">
        <span className="text-[#1B5E20]">Get in </span> Touch
      </h1>
      <hr className="w-[130px] sm:w-[230px] mx-auto bg-[#1B5E20] h-1" />
      <p className="text-[#333333] text-[16px] sm:text-[20pxx] text-center my-2">
        Established in 1986, we’ve been growing quality plants for over four
        decades.
      </p>

      <div className="flex flex-col-reverse md:flex-row gap-4 lg:gap-8 mt-10">
        <div className="md:w-1/2 border border-[#D9D9D9] rounded-[8px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7863.17608079803!2d76.71937968933116!3d9.800881283469682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07cf4bfaad8595%3A0x2301ff3e25d40993!2sNeeloor%2C%20Kerala%20686651!5e0!3m2!1sen!2sin!4v1758195795301!5m2!1sen!2sin"
            className="w-full h-[204px] md:h-full rounded-[8px]"
            loading="lazy"
          ></iframe>
        </div>
        <div className="bg-[#F1F8E9] md:w-1/2 rounded-[8px] flex flex-col gap-8  p-6 lg:p-12  border border-[#D9D9D9]">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="bg-[#DFEDD8] rounded-full size-10 lg:size-16 flex justify-center items-center">
              <img src="./location.svg" alt="img" />
            </div>
            <div className="">
              <h1 className="font-semibold text-[14px] text-[#333333] text-center sm:text-left">
                Address
              </h1>
              <p className="text-[#333333] text-[14px] text-center sm:text-left">
                Kureekunnel (H), Neeloor P.O, Pala, Kottayam - 686 651
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="bg-[#DFEDD8] rounded-full size-10 lg:size-16 flex justify-center items-center">
              <img src="./phone.svg" alt="img" />
            </div>
            <div>
              <h1 className="font-semibold text-[14px] text-[#333333] text-center sm:text-left">
                Phone
              </h1>
              <p className="text-[#333333] text-[14px] text-center sm:text-left">
                +91 - 9020211841
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="bg-[#DFEDD8] rounded-full size-10 lg:size-16 flex justify-center items-center">
              <img src="./email.svg" alt="img" />
            </div>
            <div>
              <h1 className="font-semibold text-[14px] text-[#333333] text-center sm:text-left">
                Mail
              </h1>
              <p className="text-[#333333] text-[14px] text-center sm:text-left">
                mail@kureekunnelnursery.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section8;
