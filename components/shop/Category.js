import "twin.macro";
import ProductPreviewItem from "./ProductPreviewItem";
import ButtonLink from "../ButtonLink";

export default function Category({ category, products }) {
  return (
    <>
      <div tw="flex flex-col items-start space-y-4 sm:(flex-row items-center space-y-0 justify-between)">
        <h2 tw="text-3xl text-black font-semibold text-opacity-60">
          {category.name}
        </h2>
        <ButtonLink href={`/shop/${category.slug}`}>See More</ButtonLink>
      </div>

      <div tw="py-12 grid gap-12 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product, index) => {
          return (
            product.categories[0].slug == category.slug &&
            index <= 4 && <ProductPreviewItem product={product} key={index} />
          );
        })}
      </div>
    </>
  );
}
