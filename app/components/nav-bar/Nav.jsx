"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  NavigationMenuIndicator,
} from "@/components/ui/navigation-menu";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import DemoImage from "../../../public/HomeCamp_Toolangi_FinalHigh-56.webp";
import { ShoppingCart, UserCircle2, Search, ChevronDown } from "lucide-react";

export default function Nav() {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const handleAccordionToggle = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };
  return (
    <div className='flex flex-col w-screen'>
      <div className='flex py-[1rem] bg-white border-b border-solid border-gray-300 text-black'>
        <div className='flex items-center justify-between px-[10rem] w-full'>
          <div>
            <Link
              href='/en-us'
              className='font-bold text-[1.7rem] text-[#ffa500]'
            >
              Stove<span className='font-light text-black'>Yo</span>
            </Link>
          </div>
          <div className='text-[13px] flex gap-3'>
            <Link href='/' className='hover:text-[#FFC862]'>
              Rewards |
            </Link>
            <Link href='/' className='hover:text-[#FFC862]'>
              Gift Cards |
            </Link>
            <Link href='/' className='hover:text-[#FFC862]'>
              Product Finder |
            </Link>
            <Link href='/' className='hover:text-[#FFC862]'>
              Community |
            </Link>
            <Link href='/' className='hover:text-[#FFC862]'>
              Corporate Sales |
            </Link>
            <Link href='/' className='hover:text-[#FFC862]'>
              Help
            </Link>
          </div>
        </div>
      </div>
      <div className='relative flex py-[1rem] border-b border-solid border-gray-300 text-black w-screen px-[10rem]'>
        <div className='flex items-center justify-between  w-full flex-wrap'>
          <div className='flex justify-start gap-9'>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Fire Pits</NavigationMenuTrigger>
                  <NavigationMenuContent className='bg-orange-500 overflow-hidden w-screen'>
                    <NavigationMenuLink className='py-6 bg-white text-black w-screen flex justify-between items-start px-[15rem]'>
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
                    <NavigationMenuLink className='py-6 bg-white text-black w-screen flex justify-between items-start px-[15rem]'>
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
                    <NavigationMenuLink className='py-6 bg-white text-black w-screen flex justify-between items-start px-[15rem]'>
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
                    <NavigationMenuLink className='py-6 bg-white text-black w-screen flex justify-between items-start px-[15rem]'>
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
                    <NavigationMenuLink className='py-6 bg-white text-black w-screen flex justify-between items-start px-[15rem]'>
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
                    <NavigationMenuLink className='py-6 bg-white text-black w-screen flex justify-between items-start px-[15rem]'>
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
                    <NavigationMenuLink className='py-6 bg-white text-black w-screen flex justify-between items-start px-[15rem]'>
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
                    <NavigationMenuLink className='py-6 bg-white text-black w-screen flex justify-between items-start px-[15rem]'>
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
      </div>
    </div>
  );
}
