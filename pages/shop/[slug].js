import commerce from "../../lib/commerce";
import Container from "../../components/Container";
import "twin.macro";
import Layout from "../../components/Layout";
import PushContent from "../../components/navbar/PushContent";
import ProductPreviewItem from "../../components/shop/ProductPreviewItem";

export async function getServerSideProps({ params }) {
  const { slug } = params;

  const category = await commerce.categories.retrieve(slug, {
    type: "slug",
  });

  const { data: products } = await commerce.products.list({
    category_slug: slug,
    limit: 200,
  });

  return {
    props: {
      category,
      products: products || null,
    },
  };
}

export default function CategoryPage({ products, category }) {
  return (
    <Layout title={category.name}>
      <div tw="bg-yellow-200 flex-1">
        <PushContent />
        <Container>
          <h1 tw="text-4xl sm:text-5xl md:text-5xl lg:text-6xl text-center font-bold py-10">
            {category.name}
          </h1>
        </Container>
        <Container>
          <div tw="py-12 grid gap-12 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            {products.map((product, index) => {
              return (
                product.categories[0].slug == category.slug && (
                  <ProductPreviewItem product={product} />
                )
              );
            })}
          </div>
        </Container>
      </div>
    </Layout>
  );
}
