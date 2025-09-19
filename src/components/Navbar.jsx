"use client";
import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="px-4 md:px-[40px] xl:px-[124px] 2xl:px-[194px] flex items-center justify-between h-[80px] shadow">
      {/* Left Logo */}
      <div>
        <span className="text-[20px] sm:text-[26px] md:text-[36px] font-bold flex gap-2">
          <span className="text-[#1B5E20]">Kureekunnel</span>
          <span className="flex flex-col items-end">
            <span className="text-[#2E7D32]">Nursery</span>
            <span className="text-[#333333] text-[10px] md:text-[14px] pr-3 md:pr-6">
              Since 1986
            </span>
          </span>
        </span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-10 2xl:gap-20 text-[#333333] text-[20px]">
        <p>About us</p>
        <p>Service</p>
        <p>Plants</p>
        <p>Contact</p>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden flex flex-col gap-[3px] sm:gap-[5px] p-1"
        onClick={() => setIsOpen(true)}
      >
        <span className="w-6 sm:w-8 h-[3px] bg-[#2E7D32] rounded"></span>
        <span className="w-6 sm:w-8 h-[3px] bg-[#2E7D32] rounded"></span>
        <span className="w-6 sm:w-8 h-[3px] bg-[#2E7D32] rounded"></span>
      </button>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[260px] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center p-5 border-b">
          <h2 className="text-xl font-semibold text-[#2E7D32]">Menu</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-3xl font-bold text-[#2e7d32c8] rotate-45"
          >
            +
          </button>
        </div>

        {/* Drawer Menu Items */}
        <div className="flex flex-col gap-6 p-6 text-[#333333] text-lg">
          <p onClick={() => setIsOpen(false)}>About us</p>
          <p onClick={() => setIsOpen(false)}>Service</p>
          <p onClick={() => setIsOpen(false)}>Plants</p>
          <p onClick={() => setIsOpen(false)}>Contact</p>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-[#0e0e0e25] backdrop-blur-sm bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
}

export default Navbar;
