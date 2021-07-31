import "twin.macro";
import ProductPreviewItem from "./ProductPreviewItem";

export default function ProductsPreview({ category, products }) {
  return (
    <>
      <div tw="py-12 grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map(
          (product) =>
            product.categories[0].slug == category.slug && (
              <ProductPreviewItem product={product} />
            )
        )}
      </div>
    </>
  );
}
