"use client";
import { AlertCircle, ShoppingCart } from "lucide-react";
import React from "react";
import Carousel from "nuka-carousel";
import Link from "next/link";
import Image from "next/image";

export default function Product() {
  const product = [
    {
      image:
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Hello World",
      reviews: "23584",
      price: "UGX 250000",
      discount: "UGX 10000",
      save: "UGX 25000",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Hello World",
      reviews: "23584",
      price: "UGX 250000",
      discount: "UGX 10000",
      save: "UGX 25000",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Hello World",
      reviews: "23584",
      price: "UGX 250000",
      discount: "UGX 10000",
      save: "UGX 25000",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Hello World",
      reviews: "23584",
      price: "UGX 250000",
      discount: "UGX 10000",
      save: "UGX 25000",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Hello World",
      reviews: "23584",
      price: "UGX 250000",
      discount: "UGX 10000",
      save: "UGX 25000",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Hello World",
      reviews: "23584",
      price: "UGX 250000",
      discount: "UGX 10000",
      save: "UGX 25000",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Hello World",
      reviews: "23584",
      price: "UGX 250000",
      discount: "UGX 10000",
      save: "UGX 25000",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Hello World",
      reviews: "23584",
      price: "UGX 250000",
      discount: "UGX 10000",
      save: "UGX 25000",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Hello World",
      reviews: "23584",
      price: "UGX 250000",
      discount: "UGX 10000",
      save: "UGX 25000",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Hello World",
      reviews: "23584",
      price: "UGX 250000",
      discount: "UGX 10000",
      save: "UGX 25000",
    },
  ];
  return (
    <div className='mt-5 flex flex-col py-5'>
      <h3 className='text-2xl font-bold text-center'>
        Trending & Latest Today 💥🚀
      </h3>
      <Carousel
        wrapAround={false}
        renderBottomCenterControls={null}
        slidesToShow={4}
        cellSpacing={20}
        className='my-5'
      >
        {product.map((product, i) => (
          <div
            className='relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md'
            key={i}
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
                <h5 className='text-xl font-bold tracking-tight text-slate-900'>
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
                  {product.price}
                </span>
                <span className='text-xs text-slate-900 line-through'>
                  {product.discount}
                </span>
              </div>
              <p className='text-xs'>Save {product.save}</p>
              {/* <ul className='flex items-center my-4'>
                <li class='mr-4 last:mr-0'>
                  <span class='block p-1 border-2 border-gray-500 rounded-full transition ease-in duration-300'>
                    <a
                      href='#blue'
                      class='block w-4 h-4 bg-blue-900 rounded-full'
                    ></a>
                  </span>
                </li>
                <li class='mr-4 last:mr-0'>
                  <span class='block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300'>
                    <a
                      href='#yellow'
                      class='block w-4 h-4 bg-yellow-500 rounded-full'
                    ></a>
                  </span>
                </li>
                <li class='mr-4 last:mr-0'>
                  <span class='block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300'>
                    <a
                      href='#red'
                      class='block w-4 h-4 bg-red-500 rounded-full'
                    ></a>
                  </span>
                </li>
                <li class='mr-4 last:mr-0'>
                  <span class='block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300'>
                    <a
                      href='#green'
                      class='block w-4 h-4 bg-green-500 rounded-full'
                    ></a>
                  </span>
                </li>
              </ul> */}
              <Link
                href='#'
                className='flex items-center justify-center gap-3 rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300'
              >
                <ShoppingCart />
                Add to cart
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
