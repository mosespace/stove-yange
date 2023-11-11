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
//                   <Image
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
//                     <Image
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
//                     <Image
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
//                   <Image
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
//                   <Image
//                     className='object-center object-cover h-full w-full hidden md:block'
//                     src='https://i.ibb.co/6FjW19n/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2.png'
//                     alt='girl-image'
//                   />
//                   <Image
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
//                 <Image
//                   className='object-center object-cover h-full w-full hidden md:block'
//                   src='https://i.ibb.co/6FjW19n/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2.png'
//                   alt='girl-image'
//                 />
//                 <Image
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
import React from "react";
import Image from "next/image";
import Burner from "../../public/burner-01.jpg";
import BurnerTwo from "../../public/burner-02.jpg";

export default function Shop() {
  return (
    <div className='flex justify-center items-center my-5'>
      <div className='md:w-auto grid lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-6'>
        <div className='relative group'>
          <Image
            className='lg:block hidden w-full object-cover object-center h-full rounded-l-lg '
            src={Burner}
            alt='Women'
          />
          <Image
            className='lg:hidden md:block hidden w-full object-cover object-center h-full rounded-t-lg'
            src={Burner}
            alt='Women'
          />
          <Image
            className='w-full md:hidden object-cover object-center h-full rounded-t-lg'
            src={Burner}
            alt='Women'
          />
          <div className='opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full' />
          <div className=' absolute top-0 left-0 w-full h-full flex justify-start items-end opacity-0 hover:opacity-100 p-8'>
            <p className=' font-semibold text-2xl leading-6 text-white'>
              Women
            </p>
          </div>
        </div>
        <div className=' lg:px-6 lg:py-0 md:py-16 md:px-24 py-16 px-6 flex flex-col justify-center items-center text-center bg-gray-100'>
          <h2 className=' font-semibold lg:text-4xl text-3xl lg:leading-normal leading-9 text-gray-800 lg:w-full md:w-7/12 w-full'>
            Shop your Favorite Brands
          </h2>
          <p className=' font-medium text-base leading-6 text-gray-600 mt-4 lg:w-full md:w-7/12 w-full'>
            We offer a huge collection of premium clothing that are crafted with
            excellence for our adored customers
          </p>
          <button className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-[#0E7490] hover:bg-[#0E7490]/90 text-white text-base leading-4 bg-[#0E7490] lg:px-10 py-4 lg:w-auto w-72 mt-16'>
            Discover More
          </button>
        </div>
        <div className='relative group'>
          <Image
            className='lg:block hidden w-full object-cover object-center h-full rounded-r-lg'
            src={BurnerTwo}
            alt='Man'
          />
          <Image
            className='lg:hidden md:block hidden w-full object-cover object-center  h-full rounded-r-lg'
            src={BurnerTwo}
            alt='Man'
          />
          <Image
            className='w-full md:hidden object-cover object-center h-full rounded-b-lg'
            src={BurnerTwo}
            alt='Man'
          />
          <div className='opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full' />
          <div className=' absolute top-0 left-0 w-full h-full flex justify-start items-end opacity-0 hover:opacity-100 p-8'>
            <p className=' font-semibold text-2xl leading-6 text-white'>Men</p>
          </div>
        </div>
      </div>
    </div>
  );
}