import React from "react";
import Image from "next/image";
import BurnerOne from "../../../public/burner-01.jpg";
import Link from "next/link";

export default function Hero() {
  return (
    <div className='bg-white lg:my-5'>
      <div className='flex px-0 flex-col lg:grid lg:grid-flow-col gap-8 overflow-hidden'>
        <div className='row-span-full bg-teal-400 md:rounded-md relative isolate flex flex-col overflow-hidden px-8 justify-center w-full cursor-pointer h-[400px] lg:h-auto'>
          {/* <video
            autoPlay
            loop
            muted
            className='absolute inset-0 object-cover w-full h-full'
          >
            <source src='vid.mp4' type='video/mp4' />
          </video> */}
          <Link
            href='/demo-url'
            className='absolute inset-0 object-cover object-center w-full h-full'
          >
            <Image
              src={BurnerOne}
              width={1000}
              height={1333}
              className='w-full h-full object-cover'
            />
          </Link>
          <div className='hidden lg:block absolute inset-0 bg-gradient-to-t from-[#0E7490]'></div>
          <h3 className='hidden lg:block z-10 mt-3 text-2xl lg:text-3xl font-bold text-white leading-snug'>
            Enjoy Up To UGX2500 <br />
            Off Fire Pits
          </h3>
          <div className='hidden lg:flex z-10 overflow-hidden text-sm leading-6 text-gray-300 flex-col gap-4'>
            <p>Lowest prices of the year are here</p>
            <div>
              <button className='bg-white hover:bg-[#ffa500] hover:text-white text-black px-5 py-2 rounded-md'>
                Shop Pi Prime
              </button>
            </div>
          </div>
        </div>

        <div className='px-5 row-span-auto flex gap-4 flex-col'>
          <div className='relative isolate flex-grow rounded-md px-8 py-4 gap-5 flex flex-col bg-[#E7E7E7] justify-center bg-[url(/burner-02.jpg)] bg-cover bg-no-repeat '>
            <div className='absolute inset-0 -z-10 bg-gradient-to-b from-[#0E7490] rounded-md'></div>
            <h2 className='font-bold lg:text-lg text-2xl text-white'>
              Win The Weekend With Premium pants
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

          <div className='relative isolate flex-grow rounded-md px-8 py-4 gap-5 flex flex-col bg-[#E7E7E7] justify-center bg-[url(/burner-03.jpg)]  bg-cover bg-no-repeat'>
            <div className='absolute inset-0 -z-10 bg-gradient-to-b from-[#ffa500] rounded-md'></div>
            <h2 className='font-bold lg:text-lg text-2xl text-white'>
              Never Get Cold, Get a Premium Hoods
            </h2>
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
