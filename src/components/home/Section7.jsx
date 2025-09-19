import React from "react";

function Section7() {
  return (
    <div className="bg-[#2E7D32] text-white py-[40px]">
      <h1 className="text-center text-[20px] md:text-[40px] font-bold px-4">
        Want a free consultation?
      </h1>
      <p className="text-[16px] md:text-[20px] text-center px-4">
        Talk to our experts today for the right plants and plantation guidance.
      </p>

      <div className="flex justify-center items-center gap-4 mt-8">
        <a
          href="https://wa.me/9020211841"
          target="_blank"
          rel="noopener noreferrer"
        >
           <button className="flex justify-center items-center gap-4 rounded-[8px] bg-white text-[16px] md:text-[20px] text-[#333333] py-[10px] sm:py-[12] px-[30px] sm:px-[60px] cursor-pointer">
          <img src="./whatsapp.svg" alt="img" />
          <span className="hidden md:inline-block">Connect via </span>WhatsApp
        </button>
        </a>
       

        <button className="flex justify-center items-center gap-4 rounded-[8px] bg-white text-[16px] md:text-[20px] text-[#333333]  py-[10px] sm:py-[12] px-[30px] sm:px-[60px]">
          Call
        </button>
      </div>
    </div>
  );
}

export default Section7;
