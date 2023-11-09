import React from "react";

export default function Alert() {
  return (
    <div className='flex items-center justify-center bg-[#0E7490] text-white py-[7px] w-full'>
      <span className='text-xs px-8 cursor-pointer'>
        Always Giving Out Offers:
        <span className='text-[#ffa500] font-semibold'>
          Next Offer In 1:45:00
        </span>
        (hrs)
      </span>
    </div>
  );
}
