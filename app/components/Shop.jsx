// import React from "react";

// export default function Shop() {
//   return (
//     <>
//       <div className='pb-16'>
//         <div className='flex justify-center items-center'>
//           <div className='2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full'>
//             <div className='flex flex-col jusitfy-center items-center space-y-10'>
//               <div className='flex flex-col justify-center items-center space-y-2'>
//                 <p className='text-xl leading-5 text-gray-600'>
//                   2021 Trendsetters
//                 </p>
//                 <h1 className='text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800'>
//                   Shop By Category
//                 </h1>
//               </div>
//               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 md:gap-x-8 w-full'>
//                 <div className='relative group flex justify-center items-center h-full w-full'>
//                   <img
//                     className='object-center object-cover h-full w-full'
//                     src='https://i.ibb.co/ThPFmzv/omid-armin-m-VSb6-PFk-VXw-unsplash-1-1.png'
//                     alt='girl-image'
//                   />
//                   <button className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white'>
//                     Women
//                   </button>
//                   <div className='absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50' />
//                 </div>
//                 <div className='flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0'>
//                   <div className='relative group flex justify-center items-center h-full w-full'>
//                     <img
//                       className='object-center object-cover h-full w-full'
//                       src='https://i.ibb.co/SXZvYHs/irene-kredenets-DDqx-X0-7v-KE-unsplash-1.png'
//                       alt='shoe-image'
//                     />
//                     <button className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white'>
//                       Shoes
//                     </button>
//                     <div className='absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50' />
//                   </div>
//                   <div className='relative group flex justify-center items-center h-full w-full'>
//                     <img
//                       className='object-center object-cover h-full w-full'
//                       src='https://i.ibb.co/Hd1pVxW/louis-mornaud-Ju-6-TPKXd-Bs-unsplash-1-2.png'
//                       alt='watch-image'
//                     />
//                     <button className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white'>
//                       Watches
//                     </button>
//                     <div className='absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50' />
//                   </div>
//                 </div>
//                 <div className='relative group justify-center items-center h-full w-full hidden lg:flex'>
//                   <img
//                     className='object-center object-cover h-full w-full'
//                     src='https://i.ibb.co/PTtRBLL/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png'
//                     alt='girl-image'
//                   />
//                   <button className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white'>
//                     Women
//                   </button>
//                   <div className='absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50' />
//                 </div>
//                 <div className='relative group flex justify-center items-center h-full w-full mt-4 md:hidden md:mt-8 lg:hidden'>
//                   <img
//                     className='object-center object-cover h-full w-full hidden md:block'
//                     src='https://i.ibb.co/6FjW19n/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2.png'
//                     alt='girl-image'
//                   />
//                   <img
//                     className='object-center object-cover h-full w-full md:hidden'
//                     src='https://i.ibb.co/sQgHwHn/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png'
//                     alt='olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2'
//                   />
//                   <button className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white'>
//                     Women
//                   </button>
//                   <div className='absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50' />
//                 </div>
//               </div>
//               <div className='relative group hidden md:flex justify-center items-center h-full w-full mt-4 md:mt-8 lg:hidden'>
//                 <img
//                   className='object-center object-cover h-full w-full hidden md:block'
//                   src='https://i.ibb.co/6FjW19n/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2.png'
//                   alt='girl-image'
//                 />
//                 <img
//                   className='object-center object-cover h-full w-full sm:hidden'
//                   src='https://i.ibb.co/sQgHwHn/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png'
//                   alt='olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2'
//                 />
//                 <button className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white'>
//                   Women
//                 </button>
//                 <div className='absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50' />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// import React, { useState } from "react";

// export default function Shop() {
//   return (
//     <div className=' 2xl:container flex justify-center items-center w-full 2xl:mx-auto lg:px-20 md:py-12 md:px-6 py-9 px-4'>
//       <div className='w-80 md:w-auto grid lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-6'>
//         <div className='relative group'>
//           <img
//             className='lg:block hidden w-full'
//             src='https://i.ibb.co/SnL9NZV/pexels-two-dreamers-2345236-1.png'
//             alt='Women'
//           />
//           <img
//             className='lg:hidden md:block hidden w-full'
//             src='https://i.ibb.co/PwMpH9g/pexels-two-dreamers-2345236-1-1.png'
//             alt='Women'
//           />
//           <img
//             className='w-full md:hidden'
//             src='https://i.ibb.co/Ks91wpt/pexels-two-dreamers-2345236-1.png'
//             alt='Women'
//           />
//           <div className='opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full' />
//           <div className=' absolute top-0 left-0 w-full h-full flex justify-start items-end opacity-0 hover:opacity-100 p-8'>
//             <p className=' font-semibold text-2xl leading-6 text-white'>
//               Women
//             </p>
//           </div>
//         </div>
//         <div className=' lg:px-6 lg:py-0 md:py-16 md:px-24 py-16 px-6 flex flex-col justify-center items-center text-center bg-gray-100'>
//           <h2 className=' font-semibold lg:text-4xl text-3xl lg:leading-10 leading-9 text-gray-800 lg:w-full md:w-7/12 w-full'>
//             Shop your Favourite Designers
//           </h2>
//           <p className=' font-medium text-base leading-6 text-gray-600 mt-4 lg:w-full md:w-7/12 w-full'>
//             We offer a huge colletion of premium clothing that are crafted with
//             excellence for our adored customers
//           </p>
//           <button className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700 text-white text-base leading-4 bg-gray-800 lg:px-10 py-4 lg:w-auto w-72 mt-16'>
//             Discover More
//           </button>
//         </div>
//         <div className='relative group'>
//           <img
//             className='lg:block hidden w-full'
//             src='https://i.ibb.co/gVMrdyp/pexels-mpumelelo-buthelezi-4503712-1-1.png'
//             alt='Man'
//           />
//           <img
//             className='lg:hidden md:block hidden w-full'
//             src='https://i.ibb.co/hYmYWgT/pexels-two-dreamers-2345236-2.png'
//             alt='Man'
//           />
//           <img
//             className='w-full md:hidden'
//             src='https://i.ibb.co/99kYP9T/pexels-two-dreamers-2345236-2.png'
//             alt='Man'
//           />
//           <div className='opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full' />
//           <div className=' absolute top-0 left-0 w-full h-full flex justify-start items-end opacity-0 hover:opacity-100 p-8'>
//             <p className=' font-semibold text-2xl leading-6 text-white'>Men</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// import React from 'react'

// export default function Shop() {
//   return (
//     <section className="bg-red-700 mx-auto p-10 px-0 md:p-8 md:px-0">
//     <section
//         className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start ">
//         <section className="p-5 py-10 bg-purple-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
//             <img src="https://www.dropbox.com/s/mlor33hzk73rh0c/x14423.png?dl=1" alt=""/>
//             <div className="space-x-1 flex justify-center mt-10">
//                 <svg className="w-4 h-4 mx-px fill-current text-orange-600" xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 14 14">
//                     <path
//                         d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
//                     </path>
//                 </svg>
//                 <svg className="w-4 h-4 mx-px fill-current text-orange-600" xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 14 14">
//                     <path
//                         d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
//                     </path>
//                 </svg>
//                 <svg className="w-4 h-4 mx-px fill-current text-orange-600" xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 14 14">
//                     <path
//                         d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
//                     </path>
//                 </svg>
//                 <svg className="w-4 h-4 mx-px fill-current text-orange-600" xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 14 14">
//                     <path
//                         d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
//                     </path>
//                 </svg>
//                 <svg className="w-4 h-4 mx-px fill-current text-gray-300" xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 14 14">
//                     <path
//                         d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
//                     </path>
//                 </svg>
//             </div>
//             <h1 className="text-3xl my-5">Soft Plushy Cushion Chair</h1>
//             <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, incidunt!</p>
//             <h2 className="font-semibold mb-5">$29.99</h2>
//             <button className="p-2 px-6 bg-purple-500 text-white rounded-md hover:bg-purple-600">Add To Cart</button>
//         </section>

//         <section className="p-5 py-10 bg-green-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
//             <img src="https://www.dropbox.com/s/8ymeus1n9k9bhpd/y16625.png?dl=1" alt=""/>
//             <div className="space-x-1 flex justify-center mt-10">
//                 <svg className="w-4 h-4 mx-px fill-current text-orange-600" xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 14 14">
//                     <path
//                         d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
//                     </path>
//                 </svg>
//                 <svg className="w-4 h-4 mx-px fill-current text-orange-600" xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 14 14">
//                     <path
//                         d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
//                     </path>
//                 </svg>
//                 <svg className="w-4 h-4 mx-px fill-current text-orange-600" xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 14 14">
//                     <path
//                         d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
//                     </path>
//                 </svg>
//                 <svg className="w-4 h-4 mx-px fill-current text-orange-600" xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 14 14">
//                     <path
//                         d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
//                     </path>
//                 </svg>
//                 <svg className="w-4 h-4 mx-px fill-current text-gray-300" xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 14 14">
//                     <path
//                         d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
//                     </path>
//                 </svg>
//             </div>
//             <h1 className="text-3xl my-5">Comfortable Wooden Chair</h1>
//             <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, incidunt!</p>
//             <h2 className="font-semibold mb-5">$39.99</h2>
//             <button className="p-2 px-6 bg-green-500 text-white rounded-md hover:bg-green-600">Add To Cart</button>
//         </section>

//         <section className="p-5 py-10 bg-red-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
//             <img src="https://www.dropbox.com/s/ykdro56f2qltxys/hh2774663-87776.png?dl=1" alt=""/>
//             <div className="space-x-1 flex justify-center mt-10">
//                 <svg className="w-4 h-4 mx-px fill-current text-orange-600" xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 14 14">
//                     <path
//                         d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
//                     </path>
//                 </svg>
//                 <svg className="w-4 h-4 mx-px fill-current text-orange-600" xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 14 14">
//                     <path
//                         d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
//                     </path>
//                 </svg>
//                 <svg className="w-4 h-4 mx-px fill-current text-orange-600" xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 14 14">
//                     <path
//                         d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
//                     </path>
//                 </svg>
//                 <svg className="w-4 h-4 mx-px fill-current text-orange-600" xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 14 14">
//                     <path
//                         d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
//                     </path>
//                 </svg>
//                 <svg className="w-4 h-4 mx-px fill-current text-gray-300" xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 14 14">
//                     <path
//                         d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
//                     </path>
//                 </svg>
//             </div>
//             <h1 className="text-3xl my-5">Multipurpose Wooden Trolly</h1>
//             <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, incidunt!</p>
//             <h2 className="font-semibold mb-5">$19.99</h2>
//             <button className="p-2 px-6 bg-red-500 text-white rounded-md hover:bg-red-600">Add To Cart</button>
//         </section>

//         <section className="p-5 py-10 bg-blue-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
//             <img src="https://www.dropbox.com/s/1fav310i2eqkdz8/tool2.png?dl=1" alt=""/>
//             <div className="space-x-1 flex justify-center mt-10">
//                 <svg className="w-4 h-4 mx-px fill-current text-orange-600" xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 14 14">
//                     <path
//                         d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
//                     </path>
//                 </svg>
//                 <svg className="w-4 h-4 mx-px fill-current text-orange-600" xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 14 14">
//                     <path
//                         d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
//                     </path>
//                 </svg>
//                 <svg className="w-4 h-4 mx-px fill-current text-orange-600" xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 14 14">
//                     <path
//                         d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
//                     </path>
//                 </svg>
//                 <svg className="w-4 h-4 mx-px fill-current text-orange-600" xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 14 14">
//                     <path
//                         d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
//                     </path>
//                 </svg>
//                 <svg className="w-4 h-4 mx-px fill-current text-gray-300" xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 14 14">
//                     <path
//                         d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
//                     </path>
//                 </svg>
//             </div>
//             <h1 className="text-3xl my-5">Multipurpose Wooden Tool</h1>
//             <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, incidunt!</p>
//             <h2 className="font-semibold mb-5">$34.99</h2>
//             <button className="p-2 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600">Add To Cart</button>
//         </section>
//     </section>
// </section>
//   )
// }
