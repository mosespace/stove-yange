import Shop from "./components/Shop";
import Hero from "./components/hero/Hero";
import Faqs from "./components/faqs/Faqs";
import Product from "./components/Product";
import { categories, products, subCategories } from "@/data";
import FeaturedCategories from "./components/categories/FeaturedCategories";

export default function Home() {
  return (
    <main className='text-black w-full flex flex-col gap-8 h-full overflow-hidden'>
      <Hero />
      <div className='flex flex-col'>
        <FeaturedCategories categories={categories} />
        <Product
          products={products}
          categories={categories}
          subCategories={subCategories}
        />
        <Faqs />
        <Shop />
      </div>
    </main>
  );
}
