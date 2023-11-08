import Image from "next/image";
import Hero from "./components/hero/Hero";
import FeaturedCategories from "./components/categories/FeaturedCategories";
import Shop from "./components/Shop";

export default function Home() {
  return (
    <main className='text-black w-full px-[10rem] flex flex-col gap-8 h-full overflow-hidden'>
      <Hero />
      <Shop />
      <FeaturedCategories />
    </main>
  );
}
