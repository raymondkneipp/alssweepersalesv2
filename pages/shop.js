import "twin.macro";
import Layout from "../components/Layout";
import Container from "../components/Container";
import commerce from "../lib/commerce";
import PushContent from "../components/navbar/PushContent";
import Category from "../components/shop/Category";

export async function getServerSideProps() {
  const { data: categories } = await commerce.categories.list();
  const { data: products } = await commerce.products.list({ limit: 200 });

  return {
    props: {
      products,
      categories,
    },
  };
}

export default function Shop({ products, categories }) {
  return (
    <Layout title="Shop">
      <div tw="bg-yellow-200">
        <PushContent />
        <Container>
          <h1 tw="text-4xl sm:text-5xl md:text-5xl lg:text-6xl text-center font-bold py-10">
            Shop
          </h1>
        </Container>
        <Container>
          {categories.map((category, index) => {
            return (
              <Category category={category} products={products} key={index} />
            );
          })}
        </Container>
      </div>
    </Layout>
  );
}
