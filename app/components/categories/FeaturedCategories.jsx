"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Carousel from "nuka-carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FeaturedCategories({ categories }) {
  return (
    <section className='overflow-hidden'>
      <div className='flex flex-col items-center py-5'>
        <h3 className='text-2xl font-bold'>Featured Categories</h3>

        <Carousel
          wrapAround={false}
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
          slidesToShow={6.5}
          cellSpacing={20}
          className='mt-5 rounded-lg'
        >
          {categories.map((category, id) => (
            <Link
              href={`/category/${category.slug}`}
              key={category.id}
              className='lg:w-full text-center'
            >
              <Image
                className='object-cover object-center w-full h-40 lg:h-48  rounded-lg'
                src={category.image}
                alt={category.title}
                width={500}
                height={500}
              />

              <div className='mt-2'>
                <h3 className='text-sm font-bold'>{category.title}</h3>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
