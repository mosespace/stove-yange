"use client";
import {
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
} from "lucide-react";
import React from "react";
import Carousel from "nuka-carousel";
import Link from "next/link";
import Image from "next/image";

export default function Product({ products, subCategories }) {
  const product = products.filter((item) => item.catId === 1);

  return (
    <div className='flex flex-col py-5'>
      <h3 className='text-2xl font-bold text-center'>
        Trending & Latest Today 💥🚀
      </h3>

      {/* Desktop Carousel */}
      <div className='hidden lg:block '>
        <Carousel
          autoplay
          wrapAround
          adaptiveHeight
          adaptiveHeightAnimation
          renderBottomCenterControls={null}
          slidesToShow={4}
          cellSpacing={20}
          className='my-5'
        >
          {product.slice(0, 12).map((product, id) => (
            <div
              className='relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md'
              key={id}
            >
              <Link
                className='relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl'
                href='#'
              >
                <Image
                  className='object-cover w-full h-full'
                  src={product.image}
                  alt={product.title}
                  width={500}
                  height={500}
                />
                <div className='absolute top-0 left-0 rounded-xl m-2 bg-[#0E7490] py1 px-3 text-center '>
                  <span className='text-xs font-bold text-white'>LATEST</span>
                </div>
              </Link>
              <div className='mt-4 flex flex-col gap-2 px-5 pb-5'>
                <Link href='#'>
                  <h5 className='text-[1.300rem] font-bold tracking-tight text-slate-900'>
                    {product.title}
                  </h5>
                </Link>

                <div className='flex items-center text-xs'>
                  <svg
                    class='w-4 h-4 text-yellow-300 mr-1'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 22 20'
                  >
                    <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                  </svg>
                  <svg
                    class='w-4 h-4 text-yellow-300 mr-1'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 22 20'
                  >
                    <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                  </svg>
                  <svg
                    class='w-4 h-4 text-yellow-300 mr-1'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 22 20'
                  >
                    <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                  </svg>
                  <svg
                    class='w-4 h-4 text-yellow-300 mr-1'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 22 20'
                  >
                    <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                  </svg>
                  <svg
                    class='w-4 h-4 text-gray-300 mr-1 dark:text-gray-500'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 22 20'
                  >
                    <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                  </svg>
                  <p className='ml-2 font-medium text-gray-500 dark:text-gray-400'>
                    23584 Reviews
                  </p>
                </div>

                <div className='mt-2 mb-5 flex items-center gap-4'>
                  <span className='text-sm font-bold text-slate-900'>
                    UGX {product.currentPrice}
                  </span>
                  <span className='text-xs text-slate-900 line-through'>
                    {product.originalPrice ? (
                      <>UGX {product.originalPrice}</>
                    ) : (
                      <div className='font-bold text-red-700'>
                        NO DISCOUNT 🥹
                      </div>
                    )}
                  </span>
                </div>
                <div className='text-xs'>
                  {product.originalPrice ? (
                    <div>
                      SAVE UGX{" "}
                      <span className='font-bold text-[#ffa500]'>
                        {product.originalPrice}%
                      </span>{" "}
                      Off
                    </div>
                  ) : (
                    <div className='font-bold text-red-700'>
                      Check out other discounts...
                    </div>
                  )}
                </div>

                <Link
                  href='#'
                  className='flex items-center justify-center gap-3 rounded-md bg-[#0E7490] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300'
                >
                  <ShoppingCart />
                  Add to cart
                </Link>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Mobile Carousel */}
      <div className='lg:hidden'>
        <Carousel
          autoplay
          // adaptiveHeight
          wrapAround={false}
          adaptiveHeightAnimation
          renderBottomCenterControls={null}
          renderCenterLeftControls={({ previousSlide }) => (
            <button onClick={previousSlide}>
              <ChevronLeft className='bg-amber-500 rounded-full w-9 h-9 text-white' />
            </button>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <button onClick={nextSlide}>
              <ChevronRight className='bg-amber-500 rounded-full w-9 h-9 text-white' />
            </button>
          )}
          slidesToShow={1.2}
          align='center'
          cellSpacing={20}
          className='py-5'
        >
          {product.slice(0, 7).map((product, id) => (
            <div
              className='relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md'
              key={id}
            >
              <Link
                className='relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl'
                href='#'
              >
                <Image
                  className='object-cover w-full h-full'
                  src={product.image}
                  alt={product.title}
                  width={500}
                  height={500}
                />
                <div className='absolute top-0 left-0 rounded-xl m-2 bg-[#0E7490] py1 px-3 text-center '>
                  <span className='text-xs font-bold text-white'>LATEST</span>
                </div>
              </Link>
              <div className='mt-4 flex flex-col gap-2 px-5 pb-5'>
                <Link href='#'>
                  <h5 className='text-[1.300rem] font-bold tracking-tight text-slate-900'>
                    {product.title}
                  </h5>
                </Link>

                <div className='flex items-center text-xs'>
                  <svg
                    class='w-4 h-4 text-yellow-300 mr-1'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 22 20'
                  >
                    <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                  </svg>
                  <svg
                    class='w-4 h-4 text-yellow-300 mr-1'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 22 20'
                  >
                    <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                  </svg>
                  <svg
                    class='w-4 h-4 text-yellow-300 mr-1'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 22 20'
                  >
                    <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                  </svg>
                  <svg
                    class='w-4 h-4 text-yellow-300 mr-1'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 22 20'
                  >
                    <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                  </svg>
                  <svg
                    class='w-4 h-4 text-gray-300 mr-1 dark:text-gray-500'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 22 20'
                  >
                    <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                  </svg>
                  <p className='ml-2 font-medium text-gray-500 dark:text-gray-400'>
                    23584 Reviews
                  </p>
                </div>

                <div className='mt-2 mb-5 flex items-center gap-4'>
                  <span className='text-sm font-bold text-slate-900'>
                    UGX {product.currentPrice}
                  </span>
                  <span className='text-xs text-slate-900 line-through'>
                    {product.originalPrice ? (
                      <>UGX {product.originalPrice}</>
                    ) : (
                      <div className='font-bold text-red-700'>
                        NO DISCOUNT 🥹
                      </div>
                    )}
                  </span>
                </div>
                <div className='text-xs'>
                  {product.originalPrice ? (
                    <div>
                      SAVE UGX{" "}
                      <span className='font-bold text-[#ffa500]'>
                        {product.originalPrice}%
                      </span>{" "}
                      Off
                    </div>
                  ) : (
                    <div className='font-bold text-red-700'>
                      Check out other discounts...
                    </div>
                  )}
                </div>

                <Link
                  href='#'
                  className='flex items-center justify-center gap-3 rounded-md bg-[#0E7490] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300'
                >
                  <ShoppingCart />
                  Add to cart
                </Link>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
