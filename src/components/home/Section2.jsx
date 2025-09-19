import React from 'react'

function Section2() {
  return (
       <div className='bg-white  px-4 md:px-[40px] xl:px-[124px] 2xl:px-[194px] py-[48px] flex justify-between gap-4 overflow-hidden overflow-x-scroll'>
            <div className='bg-[#F1F8E9] rounded-[8px]  min-w-[304px] lg:w-auto 2xl:w-[360px] p-8 sm:p-10 '>
                <div className='bg-[#DFEDD8] flex justify-center items-center size-16 rounded-full'>
                    <img src="./premium-quality.svg" alt="quality-img" />
                </div>
                 <h1 className='text-[20px] lg:text-[24px] text-[#333333] font-bold mt-[16px]'>Premium Quality</h1>
                 <p className='text-[14px] lg:text-[16px] text-[#333333] '>Healthy, budded /grafted plants grown from trusted mother stock.</p>
            </div>
              <div className='bg-[#F1F8E9] rounded-[8px] min-w-[304px] lg:w-auto 2xl:w-[360px]  p-8 sm:p-10'>
                <div className='bg-[#DFEDD8] flex justify-center items-center size-16 rounded-full'>
                    <img src="./onsite-delivery.svg" alt="quality-img" />
                </div>
                 <h1 className='text-[20px] lg:text-[24px] text-[#333333] font-bold mt-[16px]'>On-Site Delivery</h1>
                 <p className='text-[14px] lg:text-[16px] text-[#333333] '>Fresh plants delivered safely and directly to your field.</p>
            </div>
              <div className='bg-[#F1F8E9] rounded-[8px]  min-w-[304px] lg:w-auto 2xl:w-[360px]  p-8 sm:p-10'>
                <div className='bg-[#DFEDD8] flex justify-center items-center size-16 rounded-full'>
                    <img src="./plantation-service.svg" alt="quality-img" />
                </div>
                 <h1 className='text-[20px] lg:text-[24px] text-[#333333] font-bold mt-[16px]'>Plantation Service</h1>
                 <p className='text-[14px] lg:text-[16px] text-[#333333] '>Complete land preparation, planting, and long-term care solutions.</p>
            </div>
       </div>
  )
}

export default Section2