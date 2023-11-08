"use client";
import React from "react";
import Carousel from "nuka-carousel";
import Logo from "../../../public/stove-2.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedCategories() {
  return (
    <section className='my-5'>
      <div className='flex flex-col items-center py-5relative'>
        <h3 className='text-2xl font-bold text-center'>Featured Categories</h3>
        <Carousel
          // renderCenterLeftControls={({ previousSlide }) => (
          //   <button onClick={previousSlide}>
          //     <ChevronLeft className='bg-white rounded-full w-9 h-9 text-black' />
          //   </button>
          // )}
          // renderCenterRightControls={({ nextSlide }) => (
          //   <button onClick={nextSlide}>
          //     <ChevronRight className='bg-white rounded-full w-9 h-9 text-black' />
          //   </button>
          // )}
          slidesToShow={6}
          cellSpacing={10}
          className='mt-5'
        >
          <Link
            href='/stove/category/11245buwofjms8wm247ns'
            className='w-full text-center'
          >
            <Image
              className='object-cover object-center w-full h-48  rounded-lg'
              src={Logo}
              alt='avatar'
              width={500}
              height={500}
            />

            <div className='mt-2 bg-green-700'>
              <h3 className='text-lg text-gray-700 dark:text-gray-200 font-bold'>
                Stove 7
              </h3>
            </div>
          </Link>

          <Link
            href='/stove/category/11245buwofjms8wm247ns'
            className='w-full  text-center'
          >
            <Image
              className='object-cover object-center w-full h-48  rounded-lg'
              src={Logo}
              alt='avatar'
              width={500}
              height={500}
            />

            <div className='mt-2'>
              <h3 className='text-lg font-bold text-gray-700 dark:text-gray-200'>
                Stove Yange
              </h3>
            </div>
          </Link>

          <Link
            href='/stove/category/11245buwofjms8wm247ns'
            className='w-full text-center'
          >
            <Image
              className='object-cover object-center w-full h-48  rounded-lg'
              src={Logo}
              alt='avatar'
              width={500}
              height={500}
            />

            <div className='mt-2'>
              <h3 className='text-lg font-bold text-gray-700 dark:text-gray-200'>
                Pizza Stove
              </h3>
            </div>
          </Link>

          <Link
            href='/stove/category/11245buwofjms8wm247ns'
            className='w-full  text-center'
          >
            <Image
              className='object-cover object-center w-full h-48  rounded-lg'
              src={Logo}
              alt='avatar'
              width={500}
              height={500}
            />

            <div className='mt-2'>
              <h3 className='text-lg font-bold text-gray-700 dark:text-gray-200'>
                Fire Pit Stove
              </h3>
            </div>
          </Link>

          <Link
            href='/stove/category/11245buwofjms8wm247ns'
            className='w-full  text-center'
          >
            <Image
              className='object-cover object-center w-full h-48  rounded-lg'
              src={Logo}
              alt='avatar'
              width={500}
              height={500}
            />

            <div className='mt-2'>
              <h3 className='text-lg font-bold text-gray-700 dark:text-gray-200'>
                Funiture Stove
              </h3>
            </div>
          </Link>

          <Link
            href='/stove/category/11245buwofjms8wm247ns'
            className='w-full  text-center'
          >
            <Image
              className='object-cover object-center w-full h-48  rounded-lg'
              src={Logo}
              alt='avatar'
              width={500}
              height={500}
            />

            <div className='mt-2'>
              <h3 className='text-lg font-bold text-gray-700 dark:text-gray-200'>
                Fire Bundle Stove
              </h3>
            </div>
          </Link>

          <Link
            href='/stove/category/11245buwofjms8wm247ns'
            className='w-full  text-center'
          >
            <Image
              className='object-cover object-center w-full h-48  rounded-lg'
              src={Logo}
              alt='avatar'
              width={500}
              height={500}
            />

            <div className='mt-2'>
              <h3 className='text-lg font-bold text-gray-700 dark:text-gray-200'>
                Solar Stove
              </h3>
            </div>
          </Link>
        </Carousel>
        {/* <div className='bg-black/25 rounded-3xl w-[400px] py-1 mt-5'></div> */}
      </div>
    </section>
  );
}
