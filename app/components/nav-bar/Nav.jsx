"use client";
import React from "react";
import Link from "next/link";
import { categories } from "@/data";
import { Dropdown } from "flowbite-react";
import { useEffect, useState } from "react";
import {
  ShoppingCart,
  UserCircle2,
  User,
  Heart,
  Search,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle(true);
  }
  function handleCloseToggle() {
    setToggle(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className='hidden md:flex flex-col overflow-hidden'>
        <div className='flex py-[.7rem] bg-white border-b border-solid border-gray-300 text-black'>
          <div className='flex items-center justify-between px-[10rem] w-full md:px-[2rem] md:flex-wrap'>
            <div>
              <Link
                href='/en-us'
                className='font-bold text-[1.7rem] text-[#ffa500]'
              >
                Owino<span className='text-[#0E7490]'>Ug</span>
              </Link>
            </div>
            <div className='text-[13px] flex md:flex-wrap gap-3'>
              {categories.map((category, id) => {
                return (
                  <Link
                    key={id}
                    href={`/categories/${category.slug}`}
                    className='hover:text-[#FFC862]'
                  >
                    {category.title} |
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div
          className={`${
            scrolled
              ? "fixed top-0 left-0 right-0 z-[230] bg-white shadow-xl flex md:flex-wrap lg:flex-nowrap md:justify-normal md:px-[2rem] lg:justify-center items-center gap-8 w-full py-[.8rem] border-b border-solid border-gray-300 text-black  lg:px-20"
              : "flex md:flex-wrap lg:flex-nowrap md:px-[2rem] md:justify-normal lg:justify-center items-center gap-8 w-full py-[.8rem] border-b border-solid border-gray-300 text-black  lg:px-20"
          }`}
        >
          {scrolled ? (
            <Link href='/en-us' className='font-bold text-xl text-[#ffa500]'>
              Owino<span className='text-[#0E7490]'>Ug</span>
            </Link>
          ) : (
            ""
          )}

          <form>
            <div className='flex'>
              <label
                for='search-dropdown'
                className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
              >
                Your Email
              </label>
              <button
                id='dropdown-button'
                data-dropdown-toggle='dropdown'
                className='flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white dark:border-gray-600'
                type='button'
              >
                All categories
                <svg
                  className='w-2.5 h-2.5 ml-2.5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 10 6'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='m1 1 4 4 4-4'
                  />
                </svg>
              </button>
              <div
                id='dropdown'
                className='z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700'
              >
                <ul
                  className='py-2 text-sm text-gray-700 dark:text-gray-200'
                  aria-labelledby='dropdown-button'
                >
                  <Link href='/'>
                    <button
                      type='button'
                      className='inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                    >
                      Mockups
                    </button>
                  </Link>
                  <Link href='/'>
                    <button
                      type='button'
                      className='inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                    >
                      Templates
                    </button>
                  </Link>
                  <Link href='/'>
                    <button
                      type='button'
                      className='inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                    >
                      Design
                    </button>
                  </Link>
                  <Link href='/'>
                    <button
                      type='button'
                      className='inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                    >
                      Logos
                    </button>
                  </Link>
                </ul>
              </div>
              <div className='relative w-full'>
                <input
                  type='search'
                  id='search-dropdown'
                  className='block p-2.5 w-[450px] z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 dark:bg-gray-700 dark:border-l-gray-700 outline-0 dark:border-gray-600 dark:placeholder-gray-400 focus:outline-none dark:text-white'
                  placeholder='Search products brands and categories...'
                  required
                />
                <button
                  type='submit'
                  className='absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-[#ffa500] rounded-r-lg border border-[#ffa500]'
                >
                  <Search />
                  <span className='sr-only'>Search</span>
                </button>
              </div>
            </div>
          </form>

          <div className='flex items-center md:justify-between lg:justify-normal md:w-full lg:w-auto gap-8'>
            <button className='relative flex gap-5'>
              <ShoppingCart />
              <div className='rounded-full bg-[#ffa500] p-1 text-xs absolute z-[230] left-4 bottom-4 font-bold'>
                20
              </div>
              <p className='text-lg font-bold'>Cart</p>
            </button>

            <Dropdown
              className=''
              label={
                <div className='flex gap-4'>
                  <UserCircle2 />
                  <span className='text-base'>Account</span>
                </div>
              }
            >
              <Dropdown.Item>SignIn</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
          </div>
        </div>
      </div>

      <div className='md:hidden'>
        <div
          className={`${
            scrolled
              ? "fixed z-10 shadow-lg top-0 right-0 left-0 flex justify-between items-center px-5 py-3 bg-white border-b border-solid border-gray-300"
              : "flex justify-between items-center px-5 py-3 bg-white border-b border-solid border-gray-300 overflow-hidden"
          }`}
        >
          <button onClick={handleToggle} className=''>
            <Menu className='w-8 h-8' />
          </button>

          <Link
            href='/en-us'
            className='font-bold text-[1.5rem] text-[#ffa500]'
          >
            Owino<span className='text-[#0E7490]'>Ug</span>
          </Link>
          <div className='relative flex items-center md:justify-between md:w-full gap-8'>
            <button className='relative flex gap-5'>
              <ShoppingCart className='w-8 h-8' />
              <div className='rounded-full bg-[#ffa500] p-1 text-xs absolute z-[230] left-4 bottom-3 font-bold'>
                20
              </div>
            </button>
          </div>
        </div>

        {toggle ? (
          <div className='py-8 px-5 fixed z-[230] left-0 top-0 bottom-0 right-0 bg-black/80 backdrop-blur-md flex w-full text-white h-screen flex-col gap-8 overflow-y-scroll overflow-hidden'>
            <div className='flex items-center justify-between py-3 px-5'>
              <button onClick={handleCloseToggle}>
                <X className='h-8 w-8' />
              </button>
              <div className='flex gap-4'>
                <button>
                  <User className='w-8 h-8' />
                </button>
                <button>
                  <Heart className='w-8 h-8' />
                </button>
              </div>
            </div>

            <div className='flex flex-col w-full gap-4'>
              <div class=' mb-4 flex w-full flex-wrap items-stretch'>
                <input
                  type='search'
                  class='relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary'
                  placeholder='Search'
                  aria-label='Search'
                  aria-describedby='button-addon1'
                />

                <button
                  class='relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg'
                  type='button'
                  id='button-addon1'
                  data-te-ripple-init
                  data-te-ripple-color='light'
                >
                  <Search />
                </button>
              </div>
              <>
                {categories.map((category, id) => (
                  <Link
                    key={id}
                    href={`/categories/${category.slug}`}
                    className='border border-[#ffa500] flex justify-between w-full py-3 rounded-md px-4'
                  >
                    {category.title}
                    <ChevronRight className='' />
                  </Link>
                ))}
              </>
            </div>

            <div className='pb-8'>
              <button className='bg-[#0E7490] w-full px-4 py-3 rounded-lg'>
                Login or SignUp
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
