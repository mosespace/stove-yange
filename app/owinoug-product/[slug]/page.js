import { products, categories, subCategories } from "@/data";
import ProductDetailed from "@/app/components/DetailedProduct/ProductDetailed";

export default function page({ params: { slug } }) {
  const product = products?.find((product) => product.slug === slug);

  const productSubCatId = product.subCatId;
  const productCatId = product.catId;

  const subCategory = subCategories?.find(
    (category) => category.id === productSubCatId
  );

  const category = categories?.find((category) => category.id == productCatId);
  //   console.log(subCategory);
  return (
    <div className='text-black px-5 w-full lg:px-20 flex flex-col gap-8 h-full overflow-hidden'>
      <ProductDetailed
        product={product}
        subCategory={subCategory}
        category={category}
      />
    </div>
  );
}
