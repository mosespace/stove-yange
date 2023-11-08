import Image from "next/image";
import Hero from "./components/hero/Hero";
import FeaturedCategories from "./components/categories/FeaturedCategories";

export default function Home() {
  return (
    <main className='text-black px-[10rem] flex flex-col gap-8 h-full'>
      <Hero />
      <FeaturedCategories />
    </main>
  );
}
