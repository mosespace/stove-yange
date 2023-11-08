"use client";
import React from "react";
import Carousel from "nuka-carousel";
import Logo from "../../../public/stove-2.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedCategories() {
  const categories = [
    {
      path: "/stove/category/11245buwofjms8wm247ns",
      image:
        "https://images.unsplash.com/photo-1554381401-dc595be1d842?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2luZSUyMGJvdHRsZXN8ZW58MHx8MHx8fDA%3D",
      catTitle: "Stove 3",
    },
    {
      path: "/stove/category/11245buwofjms8wm247ns",
      image:
        "https://images.unsplash.com/photo-1610631787813-9eeb1a2386cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2luZSUyMGJvdHRsZXxlbnwwfHwwfHx8MA%3D%3D",
      catTitle: "Stove 4",
    },
    {
      path: "/stove/category/11245buwofjms8wm247ns",
      image:
        "https://images.unsplash.com/photo-1586370434639-0fe43b2d32e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2luZSUyMGJvdHRsZXxlbnwwfHwwfHx8MA%3D%3D",
      catTitle: "Stove 5",
    },
    {
      path: "/stove/category/11245buwofjms8wm247ns",
      image:
        "https://images.unsplash.com/photo-1544804066-ff04a3f1ab8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdpbmV8ZW58MHx8MHx8fDA%3D",
      catTitle: "Stove 6",
    },
    {
      path: "/stove/category/11245buwofjms8wm247ns",
      image:
        "https://images.unsplash.com/photo-1556442281-77c90134c61f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2luZSUyMGJvdHRsZXN8ZW58MHx8MHx8fDA%3D",
      catTitle: "Stove 7",
    },
    {
      path: "/stove/category/11245buwofjms8wm247ns",
      image:
        "https://images.unsplash.com/photo-1592845148519-b0d41df97ac2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdpbmUlMjBib3R0bGV8ZW58MHx8MHx8fDA%3D",
      catTitle: "Stove 8",
    },
    {
      path: "/stove/category/11245buwofjms8wm247ns",
      image:
        "https://images.unsplash.com/photo-1628187832510-94b4d90445af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdpbmUlMjBib3R0bGV8ZW58MHx8MHx8fDA%3D",
      catTitle: "Stove 9",
    },
    {
      path: "/stove/category/11245buwofjms8wm247ns",
      image:
        "https://images.unsplash.com/photo-1557682204-e53b55fd750c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2luZSUyMGJvdHRsZXxlbnwwfHwwfHx8MA%3D%3D",
      catTitle: "Stove 10",
    },
    {
      path: "/stove/category/11245buwofjms8wm247ns",
      image:
        "https://images.unsplash.com/photo-1557682204-e53b55fd750c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2luZSUyMGJvdHRsZXxlbnwwfHwwfHx8MA%3D%3D",
      catTitle: "Stove 11",
    },
    {
      path: "/stove/category/11245buwofjms8wm247ns",
      image:
        "https://images.unsplash.com/photo-1557682204-e53b55fd750c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2luZSUyMGJvdHRsZXxlbnwwfHwwfHx8MA%3D%3D",
      catTitle: "Stove 12",
    },
    {
      path: "/stove/category/11245buwofjms8wm247ns",
      image:
        "https://images.unsplash.com/photo-1606298393349-4b117939dea0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdpbmUlMjBib3R0bGVzfGVufDB8fDB8fHww",
      catTitle: "Stove 13",
    },
  ];
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
            {categories.map((category, i) => (
              <Link href={category.path} className='w-full text-center'>
                <Image
                  className='object-cover object-center w-full h-48  rounded-lg'
                  src={category.image}
                  alt={category.title}
                  width={500}
                  height={500}
                />

                <div className='mt-2'>
                  <h3 className='text-lg font-bold'>{category.catTitle}</h3>
                </div>
              </Link>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
