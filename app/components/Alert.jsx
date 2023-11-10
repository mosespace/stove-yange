import React from "react";

export default function Alert() {
  return (
    <div className='flex justify-center bg-[#0E7490] text-white py-[7px] w-full'>
      <p className='text-xs px-8 cursor-pointer'>
        Always Giving Out Offers:
        <span className='text-[#ffa500] font-semibold'>
          Next Offer In 1:45:00
        </span>
        (hrs)
      </p>
    </div>
  );
}
