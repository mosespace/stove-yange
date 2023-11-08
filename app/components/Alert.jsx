import React from "react";

export default function Alert() {
  return (
    <div className='text-center bg-[#1A1A1A] text-white py-[8px] w-full'>
      <span className='underline text-sm cursor-wait px-8'>
        Always Giving Out Offers:
        <span className='text-[#ffa500] font-semibold decoration-0 tracking-[.2rem]'>
          {" "}
          Next Offer In 1:45:00
        </span>{" "}
        (hrs)
      </span>
    </div>
  );
}
