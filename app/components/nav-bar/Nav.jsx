"use client";
import React from "react";
import Link from "next/link";
import { categories } from "@/data";
import { Dropdown } from "flowbite-react";
import { useEffect, useState } from "react";
import { ShoppingCart, UserCircle2, Search } from "lucide-react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

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
    <div className='flex flex-col '>
      <div className='flex py-[.7rem] bg-white border-b border-solid border-gray-300 text-black'>
        <div className='flex items-center justify-between px-[10rem] w-full'>
          <div>
            <Link
              href='/en-us'
              className='font-bold text-[1.7rem] text-[#ffa500]'
            >
              Owino<span className='text-[#0E7490]'>Ug</span>
            </Link>
          </div>
          <div className='text-[13px] flex gap-3'>
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
            ? "fixed top-0 left-0 right-0 z-[230] bg-white shadow-xl flex justify-center items-center gap-8 w-full py-[.8rem] border-b border-solid border-gray-300 text-black  lg:px-20"
            : "flex justify-center items-center gap-8 w-full py-[.8rem] border-b border-solid border-gray-300 text-black  lg:px-20"
        }`}
      >
        {scrolled ? (
          <Link href='/en-us' className='font-bold text-xl text-[#ffa500]'>
            Owino<span className='text-[#0E7490]'>Ug</span>
          </Link>
        ) : (
          ""
        )}

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

        <div className='flex items-center gap-8'>
          {/* <button className='flex gap-4'>
            <UserCircle2 />
            <span className='font-bold text-base'>Account</span>
          </button> */}
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
      {/* <div className='relative flex py-[1rem] border-b border-solid border-gray-300 text-black  px-[10rem]'>
        <div className='flex items-center justify-between  w-full flex-wrap'>
          <div className='flex justify-start gap-9'>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Fire Pits</NavigationMenuTrigger>
                  <NavigationMenuContent className='bg-[#ffa500] overflow-hidden '>
                    <NavigationMenuLink className='py-6 bg-white text-black  flex justify-between items-start px-[15rem]'>
                      <div className='flex flex-col gap-4'>
                        <h3 className='font-bold'>Fire pits</h3>
                        <div className='text-[13px] flex flex-col gap-4 font-light'>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Backyard
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Tabletop
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Tabletop
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            1.0 Free Pits
                          </Link>
                        </div>
                      </div>
                      <div className='flex flex-col gap-4'>
                        <h3 className='font-bold'>Bundles</h3>
                        <div className='text-[13px] flex flex-col gap-4 font-light'>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Backyard
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Cooking
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Seating
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            1.0 Free Pits
                          </Link>
                        </div>
                      </div>
                      <div className='flex flex-col gap-4'>
                        <h3 className='font-bold'>Accessories</h3>
                        <div className='text-[13px] flex flex-col gap-4 font-light'>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Heat Deflectors
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Pellet Adapter
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Table Surround
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Protective Gear
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Tools
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Covers & Carriers
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Storage
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Cooking
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Accessory Bundles
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Replacement Parts
                          </Link>
                        </div>
                      </div>
                      <div className='flex flex-col gap-4'>
                        <h3 className='font-bold'>FirePlaces</h3>
                        <div className='text-[13px] flex flex-col gap-4 font-light'>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            FirePlaces
                          </Link>
                        </div>
                      </div>
                      <div className='flex flex-col gap-5'>
                        <h3 className='font-bold'>Fuel</h3>
                        <div className='text-[13px] flex flex-col gap-4 font-light'>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Wood
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Pellets
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Gels
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Staters & Color Pack
                          </Link>
                          <Link
                            href='/'
                            className='hover:text-[#FFC862] flex gap-3'
                          >
                            Bio Ethanol
                            <span className='flex items-center justify-center py-[3px] px-1 bg-red-500 text-[.5rem] font-bold rounded-md'>
                              NEW
                            </span>
                          </Link>
                        </div>
                      </div>
                      <div className='border-l border-solid border-gray-300 pl-4 h-[300px]'>
                        <div className='flex flex-col gap-5'>
                          <h3 className='font-bold'>Futured In Fire Pits</h3>
                          <div className='text-[13px] flex gap-5 font-light'>
                            <Link href='/demo' className='hover:text-[#FFC862]'>
                              New In Fire Pits
                            </Link>

                            <Image
                              src={DemoImage}
                              width={350}
                              height={180}
                              className='w-96 h-50 object-contain'
                            />
                          </div>
                        </div>
                      </div>
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Pizza Oven</NavigationMenuTrigger>
                  <NavigationMenuContent className='w-full bg-pink-700'>
                    <NavigationMenuLink className='py-6 bg-white text-black  flex justify-between items-start px-[15rem]'>
                      <div className='flex flex-col gap-4'>
                        <h3 className='font-bold'>Pizza Oven</h3>
                        <div className='text-[13px] flex flex-col gap-4 font-light'>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Pi Prime Gas Password
                          </Link>
                          <Link
                            href='/'
                            className='hover:text-[#FFC862] flex gap-3'
                          >
                            Pi Duo Fuel
                            <span className='flex items-center justify-center py-[3px] px-1 bg-red-500 text-[.5rem] font-bold rounded-md'>
                              NEW
                            </span>
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Pi Duo Pizza Oven
                          </Link>
                        </div>
                      </div>
                      <div className='flex flex-col gap-4'>
                        <h3 className='font-bold'>Bundles</h3>
                        <div className='text-[13px] flex flex-col gap-4 font-light'>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Pit Pizza Oven
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Fire Pit Pizza Oven
                          </Link>
                        </div>
                      </div>
                      <div className='flex flex-col gap-4'>
                        <h3 className='font-bold'>Accessories</h3>
                        <div className='text-[13px] flex flex-col gap-4 font-light'>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Heat Deflectors
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Pellet Adapter
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Table Surround
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Protective Gear
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Tools
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Covers & Carriers
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Storage
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Cooking
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Accessory Bundles
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Replacement Parts
                          </Link>
                        </div>
                      </div>
                      <div className='flex flex-col gap-4'>
                        <h3 className='font-bold'>FirePlaces</h3>
                        <div className='text-[13px] flex flex-col gap-4 font-light'>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            FirePlaces
                          </Link>
                        </div>
                      </div>
                      <div className='flex flex-col gap-5'>
                        <h3 className='font-bold'>Fuel</h3>
                        <div className='text-[13px] flex flex-col gap-4 font-light'>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Wood
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Pellets
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Gels
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Staters & Color Pack
                          </Link>
                          <Link
                            href='/'
                            className='hover:text-[#FFC862] flex gap-3'
                          >
                            Bio Ethanol
                            <span className='flex items-center justify-center py-[3px] px-1 bg-red-500 text-[.5rem] font-bold rounded-md'>
                              NEW
                            </span>
                          </Link>
                        </div>
                      </div>
                      <div className='border-l border-solid border-gray-300 pl-4 h-[300px]'>
                        <div className='flex flex-col gap-5'>
                          <h3 className='font-bold'>Futured In Fire Pits</h3>
                          <div className='text-[13px] flex gap-5 font-light'>
                            <Link href='/demo' className='hover:text-[#FFC862]'>
                              New In Fire Pits
                            </Link>

                            <Image
                              src={DemoImage}
                              width={350}
                              height={180}
                              className='w-96 h-50 object-contain'
                            />
                          </div>
                        </div>
                      </div>
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Bundles</NavigationMenuTrigger>
                  <NavigationMenuContent className='w-full bg-pink-700'>
                    <NavigationMenuLink className='py-6 bg-white text-black  flex justify-between items-start px-[15rem]'>
                      <div className='flex flex-col gap-4'>
                        <h3 className='font-bold'>Pizza Oven</h3>
                        <div className='text-[13px] flex flex-col gap-4 font-light'>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Pi Prime Gas Password
                          </Link>
                          <Link
                            href='/'
                            className='hover:text-[#FFC862] flex gap-3'
                          >
                            Pi Duo Fuel
                            <span className='flex items-center justify-center py-[3px] px-1 bg-red-500 text-[.5rem] font-bold rounded-md'>
                              NEW
                            </span>
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Pi Duo Pizza Oven
                          </Link>
                        </div>
                      </div>
                      <div className='flex flex-col gap-4'>
                        <h3 className='font-bold'>Bundles</h3>
                        <div className='text-[13px] flex flex-col gap-4 font-light'>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Pit Pizza Oven
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Fire Pit Pizza Oven
                          </Link>
                        </div>
                      </div>
                      <div className='flex flex-col gap-4'>
                        <h3 className='font-bold'>Accessories</h3>
                        <div className='text-[13px] flex flex-col gap-4 font-light'>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Heat Deflectors
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Pellet Adapter
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Table Surround
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Protective Gear
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Tools
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Covers & Carriers
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Storage
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Cooking
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Accessory Bundles
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Replacement Parts
                          </Link>
                        </div>
                      </div>
                      <div className='flex flex-col gap-4'>
                        <h3 className='font-bold'>FirePlaces</h3>
                        <div className='text-[13px] flex flex-col gap-4 font-light'>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            FirePlaces
                          </Link>
                        </div>
                      </div>
                      <div className='flex flex-col gap-5'>
                        <h3 className='font-bold'>Fuel</h3>
                        <div className='text-[13px] flex flex-col gap-4 font-light'>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Wood
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Pellets
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Gels
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Staters & Color Pack
                          </Link>
                          <Link
                            href='/'
                            className='hover:text-[#FFC862] flex gap-3'
                          >
                            Bio Ethanol
                            <span className='flex items-center justify-center py-[3px] px-1 bg-red-500 text-[.5rem] font-bold rounded-md'>
                              NEW
                            </span>
                          </Link>
                        </div>
                      </div>
                      <div className='border-l border-solid border-gray-300 pl-4 h-[300px]'>
                        <div className='flex flex-col gap-5'>
                          <h3 className='font-bold'>Futured In Fire Pits</h3>
                          <div className='text-[13px] flex gap-5 font-light'>
                            <Link href='/demo' className='hover:text-[#FFC862]'>
                              New In Fire Pits
                            </Link>

                            <Image
                              src={DemoImage}
                              width={350}
                              height={180}
                              className='w-96 h-50 object-contain'
                            />
                          </div>
                        </div>
                      </div>
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Accessories</NavigationMenuTrigger>
                  <NavigationMenuContent className='w-full bg-pink-700'>
                    <NavigationMenuLink className='py-6 bg-white text-black  flex justify-between items-start px-[15rem]'>
                      <div className='flex flex-col gap-4'>
                        <h3 className='font-bold'>Pizza Oven</h3>
                        <div className='text-[13px] flex flex-col gap-4 font-light'>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Pi Prime Gas Password
                          </Link>
                          <Link
                            href='/'
                            className='hover:text-[#FFC862] flex gap-3'
                          >
                            Pi Duo Fuel
                            <span className='flex items-center justify-center py-[3px] px-1 bg-red-500 text-[.5rem] font-bold rounded-md'>
                              NEW
                            </span>
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Pi Duo Pizza Oven
                          </Link>
                        </div>
                      </div>
                      <div className='flex flex-col gap-4'>
                        <h3 className='font-bold'>Bundles</h3>
                        <div className='text-[13px] flex flex-col gap-4 font-light'>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Pit Pizza Oven
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Fire Pit Pizza Oven
                          </Link>
                        </div>
                      </div>
                      <div className='flex flex-col gap-4'>
                        <h3 className='font-bold'>Accessories</h3>
                        <div className='text-[13px] flex flex-col gap-4 font-light'>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Heat Deflectors
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Pellet Adapter
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Table Surround
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Protective Gear
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Tools
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Covers & Carriers
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Storage
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Cooking
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Accessory Bundles
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Replacement Parts
                          </Link>
                        </div>
                      </div>
                      <div className='flex flex-col gap-4'>
                        <h3 className='font-bold'>FirePlaces</h3>
                        <div className='text-[13px] flex flex-col gap-4 font-light'>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            FirePlaces
                          </Link>
                        </div>
                      </div>
                      <div className='flex flex-col gap-5'>
                        <h3 className='font-bold'>Fuel</h3>
                        <div className='text-[13px] flex flex-col gap-4 font-light'>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Wood
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Pellets
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Gels
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Staters & Color Pack
                          </Link>
                          <Link
                            href='/'
                            className='hover:text-[#FFC862] flex gap-3'
                          >
                            Bio Ethanol
                            <span className='flex items-center justify-center py-[3px] px-1 bg-red-500 text-[.5rem] font-bold rounded-md'>
                              NEW
                            </span>
                          </Link>
                        </div>
                      </div>
                      <div className='border-l border-solid border-gray-300 pl-4 h-[300px]'>
                        <div className='flex flex-col gap-5'>
                          <h3 className='font-bold'>Futured In Fire Pits</h3>
                          <div className='text-[13px] flex gap-5 font-light'>
                            <Link href='/demo' className='hover:text-[#FFC862]'>
                              New In Fire Pits
                            </Link>

                            <Image
                              src={DemoImage}
                              width={350}
                              height={180}
                              className='w-96 h-50 object-contain'
                            />
                          </div>
                        </div>
                      </div>
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Patio & Garden</NavigationMenuTrigger>
                  <NavigationMenuContent className='w-full bg-pink-700'>
                    <NavigationMenuLink className='py-6 bg-white text-black  flex justify-between items-start px-[15rem]'>
                      <div className='flex flex-col gap-4'>
                        <h3 className='font-bold'>Pizza Oven</h3>
                        <div className='text-[13px] flex flex-col gap-4 font-light'>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Pi Prime Gas Password
                          </Link>
                          <Link
                            href='/'
                            className='hover:text-[#FFC862] flex gap-3'
                          >
                            Pi Duo Fuel
                            <span className='flex items-center justify-center py-[3px] px-1 bg-red-500 text-[.5rem] font-bold rounded-md'>
                              NEW
                            </span>
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Pi Duo Pizza Oven
                          </Link>
                        </div>
                      </div>
                      <div className='flex flex-col gap-4'>
                        <h3 className='font-bold'>Bundles</h3>
                        <div className='text-[13px] flex flex-col gap-4 font-light'>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Pit Pizza Oven
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Fire Pit Pizza Oven
                          </Link>
                        </div>
                      </div>
                      <div className='flex flex-col gap-4'>
                        <h3 className='font-bold'>Accessories</h3>
                        <div className='text-[13px] flex flex-col gap-4 font-light'>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Heat Deflectors
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Pellet Adapter
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Table Surround
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Protective Gear
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Tools
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Covers & Carriers
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Storage
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Cooking
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Accessory Bundles
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Replacement Parts
                          </Link>
                        </div>
                      </div>
                      <div className='flex flex-col gap-4'>
                        <h3 className='font-bold'>FirePlaces</h3>
                        <div className='text-[13px] flex flex-col gap-4 font-light'>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            FirePlaces
                          </Link>
                        </div>
                      </div>
                      <div className='flex flex-col gap-5'>
                        <h3 className='font-bold'>Fuel</h3>
                        <div className='text-[13px] flex flex-col gap-4 font-light'>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Wood
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Pellets
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Gels
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Staters & Color Pack
                          </Link>
                          <Link
                            href='/'
                            className='hover:text-[#FFC862] flex gap-3'
                          >
                            Bio Ethanol
                            <span className='flex items-center justify-center py-[3px] px-1 bg-red-500 text-[.5rem] font-bold rounded-md'>
                              NEW
                            </span>
                          </Link>
                        </div>
                      </div>
                      <div className='border-l border-solid border-gray-300 pl-4 h-[300px]'>
                        <div className='flex flex-col gap-5'>
                          <h3 className='font-bold'>Futured In Fire Pits</h3>
                          <div className='text-[13px] flex gap-5 font-light'>
                            <Link href='/demo' className='hover:text-[#FFC862]'>
                              New In Fire Pits
                            </Link>

                            <Image
                              src={DemoImage}
                              width={350}
                              height={180}
                              className='w-96 h-50 object-contain'
                            />
                          </div>
                        </div>
                      </div>
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Fuel</NavigationMenuTrigger>
                  <NavigationMenuContent className='w-full bg-pink-700'>
                    <NavigationMenuLink className='py-6 bg-white text-black  flex justify-between items-start px-[15rem]'>
                      <div className='flex flex-col gap-4'>
                        <h3 className='font-bold'>Pizza Oven</h3>
                        <div className='text-[13px] flex flex-col gap-4 font-light'>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Pi Prime Gas Password
                          </Link>
                          <Link
                            href='/'
                            className='hover:text-[#FFC862] flex gap-3'
                          >
                            Pi Duo Fuel
                            <span className='flex items-center justify-center py-[3px] px-1 bg-red-500 text-[.5rem] font-bold rounded-md'>
                              NEW
                            </span>
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Pi Duo Pizza Oven
                          </Link>
                        </div>
                      </div>
                      <div className='flex flex-col gap-4'>
                        <h3 className='font-bold'>Bundles</h3>
                        <div className='text-[13px] flex flex-col gap-4 font-light'>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Pit Pizza Oven
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Fire Pit Pizza Oven
                          </Link>
                        </div>
                      </div>
                      <div className='flex flex-col gap-4'>
                        <h3 className='font-bold'>Accessories</h3>
                        <div className='text-[13px] flex flex-col gap-4 font-light'>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Heat Deflectors
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Pellet Adapter
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Table Surround
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Protective Gear
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Tools
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Covers & Carriers
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Storage
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Cooking
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Accessory Bundles
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Replacement Parts
                          </Link>
                        </div>
                      </div>
                      <div className='flex flex-col gap-4'>
                        <h3 className='font-bold'>FirePlaces</h3>
                        <div className='text-[13px] flex flex-col gap-4 font-light'>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            FirePlaces
                          </Link>
                        </div>
                      </div>
                      <div className='flex flex-col gap-5'>
                        <h3 className='font-bold'>Fuel</h3>
                        <div className='text-[13px] flex flex-col gap-4 font-light'>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Wood
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Pellets
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Gels
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Staters & Color Pack
                          </Link>
                          <Link
                            href='/'
                            className='hover:text-[#FFC862] flex gap-3'
                          >
                            Bio Ethanol
                            <span className='flex items-center justify-center py-[3px] px-1 bg-red-500 text-[.5rem] font-bold rounded-md'>
                              NEW
                            </span>
                          </Link>
                        </div>
                      </div>
                      <div className='border-l border-solid border-gray-300 pl-4 h-[300px]'>
                        <div className='flex flex-col gap-5'>
                          <h3 className='font-bold'>Futured In Fire Pits</h3>
                          <div className='text-[13px] flex gap-5 font-light'>
                            <Link href='/demo' className='hover:text-[#FFC862]'>
                              New In Fire Pits
                            </Link>

                            <Image
                              src={DemoImage}
                              width={350}
                              height={180}
                              className='w-96 h-50 object-contain'
                            />
                          </div>
                        </div>
                      </div>
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Camp Stoves</NavigationMenuTrigger>
                  <NavigationMenuContent className='w-full bg-pink-700'>
                    <NavigationMenuLink className='py-6 bg-white text-black  flex justify-between items-start px-[15rem]'>
                      <div className='flex flex-col gap-4'>
                        <h3 className='font-bold'>Pizza Oven</h3>
                        <div className='text-[13px] flex flex-col gap-4 font-light'>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Pi Prime Gas Password
                          </Link>
                          <Link
                            href='/'
                            className='hover:text-[#FFC862] flex gap-3'
                          >
                            Pi Duo Fuel
                            <span className='flex items-center justify-center py-[3px] px-1 bg-red-500 text-[.5rem] font-bold rounded-md'>
                              NEW
                            </span>
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Pi Duo Pizza Oven
                          </Link>
                        </div>
                      </div>
                      <div className='flex flex-col gap-4'>
                        <h3 className='font-bold'>Bundles</h3>
                        <div className='text-[13px] flex flex-col gap-4 font-light'>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Pit Pizza Oven
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Fire Pit Pizza Oven
                          </Link>
                        </div>
                      </div>
                      <div className='flex flex-col gap-4'>
                        <h3 className='font-bold'>Accessories</h3>
                        <div className='text-[13px] flex flex-col gap-4 font-light'>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Heat Deflectors
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Pellet Adapter
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Table Surround
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Protective Gear
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Tools
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Covers & Carriers
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Storage
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Cooking
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Accessory Bundles
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Replacement Parts
                          </Link>
                        </div>
                      </div>
                      <div className='flex flex-col gap-4'>
                        <h3 className='font-bold'>FirePlaces</h3>
                        <div className='text-[13px] flex flex-col gap-4 font-light'>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            FirePlaces
                          </Link>
                        </div>
                      </div>
                      <div className='flex flex-col gap-5'>
                        <h3 className='font-bold'>Fuel</h3>
                        <div className='text-[13px] flex flex-col gap-4 font-light'>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Wood
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Pellets
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Gels
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Staters & Color Pack
                          </Link>
                          <Link
                            href='/'
                            className='hover:text-[#FFC862] flex gap-3'
                          >
                            Bio Ethanol
                            <span className='flex items-center justify-center py-[3px] px-1 bg-red-500 text-[.5rem] font-bold rounded-md'>
                              NEW
                            </span>
                          </Link>
                        </div>
                      </div>
                      <div className='border-l border-solid border-gray-300 pl-4 h-[300px]'>
                        <div className='flex flex-col gap-5'>
                          <h3 className='font-bold'>Futured In Fire Pits</h3>
                          <div className='text-[13px] flex gap-5 font-light'>
                            <Link href='/demo' className='hover:text-[#FFC862]'>
                              New In Fire Pits
                            </Link>

                            <Image
                              src={DemoImage}
                              width={350}
                              height={180}
                              className='w-96 h-50 object-contain'
                            />
                          </div>
                        </div>
                      </div>
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Personalize</NavigationMenuTrigger>
                  <NavigationMenuContent className='w-full bg-pink-700'>
                    <NavigationMenuLink className='py-6 bg-white text-black  flex justify-between items-start px-[15rem]'>
                      <div className='flex flex-col gap-4'>
                        <h3 className='font-bold'>Pizza Oven</h3>
                        <div className='text-[13px] flex flex-col gap-4 font-light'>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Pi Prime Gas Password
                          </Link>
                          <Link
                            href='/'
                            className='hover:text-[#FFC862] flex gap-3'
                          >
                            Pi Duo Fuel
                            <span className='flex items-center justify-center py-[3px] px-1 bg-red-500 text-[.5rem] font-bold rounded-md'>
                              NEW
                            </span>
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Pi Duo Pizza Oven
                          </Link>
                        </div>
                      </div>
                      <div className='flex flex-col gap-4'>
                        <h3 className='font-bold'>Bundles</h3>
                        <div className='text-[13px] flex flex-col gap-4 font-light'>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Pit Pizza Oven
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Fire Pit Pizza Oven
                          </Link>
                        </div>
                      </div>
                      <div className='flex flex-col gap-4'>
                        <h3 className='font-bold'>Accessories</h3>
                        <div className='text-[13px] flex flex-col gap-4 font-light'>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Heat Deflectors
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Pellet Adapter
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Table Surround
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Protective Gear
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Tools
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Covers & Carriers
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Storage
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Cooking
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Accessory Bundles
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Replacement Parts
                          </Link>
                        </div>
                      </div>
                      <div className='flex flex-col gap-4'>
                        <h3 className='font-bold'>FirePlaces</h3>
                        <div className='text-[13px] flex flex-col gap-4 font-light'>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            FirePlaces
                          </Link>
                        </div>
                      </div>
                      <div className='flex flex-col gap-5'>
                        <h3 className='font-bold'>Fuel</h3>
                        <div className='text-[13px] flex flex-col gap-4 font-light'>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Wood
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Pellets
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Gels
                          </Link>
                          <Link href='/' className='hover:text-[#FFC862]'>
                            Staters & Color Pack
                          </Link>
                          <Link
                            href='/'
                            className='hover:text-[#FFC862] flex gap-3'
                          >
                            Bio Ethanol
                            <span className='flex items-center justify-center py-[3px] px-1 bg-red-500 text-[.5rem] font-bold rounded-md'>
                              NEW
                            </span>
                          </Link>
                        </div>
                      </div>
                      <div className='border-l border-solid border-gray-300 pl-4 h-[300px]'>
                        <div className='flex flex-col gap-5'>
                          <h3 className='font-bold'>Futured In Fire Pits</h3>
                          <div className='text-[13px] flex gap-5 font-light'>
                            <Link href='/demo' className='hover:text-[#FFC862]'>
                              New In Fire Pits
                            </Link>

                            <Image
                              src={DemoImage}
                              width={350}
                              height={180}
                              className='w-96 h-50 object-contain'
                            />
                          </div>
                        </div>
                      </div>
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className='flex gap-8'>
            <form className='flex items-center gap-3'>
              <div className='relative w-full'>
                <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                  <button type='button'>
                    <Search color='#000000' />
                  </button>
                </div>
                <input
                  type='text'
                  id='voice-search'
                  className='bg-gray-50 text-gray-900 text-sm rounded-full focus:outline-none focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-[#E7E7E7]

                  ] dark:placeholder-gray-400 dark:text-black'
                  placeholder='Search...'
                  required
                />
              </div>
            </form>
            <div className='flex items-center gap-4'>
              <button>
                <UserCircle2 />
              </button>
              <button className='relative'>
                <ShoppingCart />
                <div className='rounded-full bg-[#ffa500] p-1 text-xs absolute z-[230] left-4 bottom-2 font-bold'>
                  20
                </div>
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
