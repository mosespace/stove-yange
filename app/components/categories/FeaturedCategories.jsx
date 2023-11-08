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
      <div className='flex flex-col items-center py-5'>
        <h3 className='text-2xl font-bold'>Featured Categories</h3>
        <div className=''>
          <Carousel
            renderCenterLeftControls={({ previousSlide }) => (
              <button onClick={previousSlide}>
                <ChevronLeft className='bg-white rounded-full w-9 h-9 text-black' />
              </button>
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <button onClick={nextSlide}>
                <ChevronRight className='bg-white rounded-full w-9 h-9 text-black' />
              </button>
            )}
            slidesToShow={6}
            cellSpacing={10}
            className='mt-5 overflow-hidden'
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

              <div className='mt-2'>
                <h3 className='text-lg font-bold'>Stove 7</h3>
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
                <h3 className='text-lg font-bold  '>Stove Yange</h3>
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
                <h3 className='text-lg font-bold  '>Pizza Stove</h3>
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
                <h3 className='text-lg font-bold  '>Fire Pit Stove</h3>
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
                <h3 className='text-lg font-bold  '>Funiture Stove</h3>
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
                <h3 className='text-lg font-bold  '>Fire Bundle Stove</h3>
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
                <h3 className='text-lg font-bold  '>Solar Stove</h3>
              </div>
            </Link>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
