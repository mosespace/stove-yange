import Image from "next/image";
import { categories } from "@/data";
import Shop from "./components/Shop";
import Hero from "./components/hero/Hero";
import Product from "./components/Product";
import FeaturedCategories from "./components/categories/FeaturedCategories";

export default function Home() {
  return (
    <main className='text-black w-full px-5 lg:px-20 flex flex-col gap-8 h-full overflow-hidden'>
      <Hero />
      <FeaturedCategories categories={categories} />
      <Product />
      {/* <Shop /> */}
    </main>
  );
}
