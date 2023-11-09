import React from "react";
import Image from "next/image";
import DemoImage from "../../../public/stove-grid.jpg";

export default function Hero() {
  return (
    <div className='bg-white my-5'>
      <div className='flex flex-col lg:grid lg:grid-flow-col gap-8 lg:h-[420px] overflow-hidden'>
        <div className='row-span-full bg-teal-400 rounded-md relative isolate flex flex-col overflow-hidden px-8 justify-center w-full cursor-pointer h-[320px] lg:h-auto'>
          <video
            autoPlay
            loop
            muted
            className='absolute inset-0 object-cover w-full h-full'
          >
            <source src='vid.mp4' type='video/mp4' />
          </video>
          <div className='absolute inset-0 bg-gradient-to-t from-orange-900/50 via-gray-900/80'></div>
          <h3 className='z-10 mt-3 text-2xl lg:text-3xl font-bold text-white leading-snug'>
            Enjoy Up To UGX2500 <br />
            Off Fire Pits
          </h3>
          <div className='z-10 overflow-hidden text-sm leading-6 text-gray-300 flex flex-col gap-4'>
            <p>Lowest prices of the year are here</p>
            <div>
              <button className='bg-white hover:bg-[#ffa500] hover:text-white text-black px-5 py-2 rounded-md'>
                Shop Pi Prime
              </button>
            </div>
          </div>
        </div>

        <div className='row-span-auto flex gap-4 flex-col h-[420px]'>
          <div className='relative isolate flex-grow rounded-md px-8 py-4 gap-6 flex flex-col bg-[#E7E7E7] justify-center bg-stove bg-cover bg-no-repeat '>
            <div className='absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-gray-900/80 rounded-md'></div>
            <h2 className='font-bold text-lg text-white'>
              Win The Weekend With Pi Prime
            </h2>
            <p className='text-sm text-white'>
              Enjoy Up To UGX25000 off Pi Prime
            </p>
            <div>
              <button className='bg-white hover:bg-[#ffa500] hover:text-white px-5 py-2 rounded-md'>
                Shop Now
              </button>
            </div>
          </div>

          <div className='relative isolate flex-grow rounded-md px-8 py-4 gap-6 flex flex-col bg-[#E7E7E7] justify-center bg-[url(/stove-2.jpg)]  bg-cover bg-no-repeat'>
            <div className='absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-gray-900/80 rounded-md'></div>
            <h2 className='font-bold text-lg text-white'>Bundle & Save</h2>
            <p className='text-sm text-white'>
              All the essentials to get the most out of your Solo Stove
            </p>
            <div>
              <button className='bg-white hover:bg-[#ffa500] hover:text-white px-5 py-2 rounded-md'>
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
