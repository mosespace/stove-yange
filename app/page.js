import Image from "next/image";
import Shop from "./components/Shop";
import Hero from "./components/hero/Hero";
import Product from "./components/Product";
import { categories, products, subCategories } from "@/data";
import FeaturedCategories from "./components/categories/FeaturedCategories";

export default function Home() {
  return (
    <main className='text-black w-full lg:px-20 flex flex-col gap-8 h-full overflow-hidden'>
      <Hero />
      <div className='flex flex-col px-5'>
        <FeaturedCategories categories={categories} />
        <Product
          products={products}
          categories={categories}
          subCategories={subCategories}
        />
        <Shop />
      </div>
    </main>
  );
}
