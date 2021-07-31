import commerce from "../../../lib/commerce";
import Container from "../../../components/Container";
import "twin.macro";
import Layout from "../../../components/Layout";
import PushContent from "../../../components/navbar/PushContent";
import Image from "next/image";
import ButtonLink from "../../../components/ButtonLink";
import { useRouter } from "next/router";

export async function getServerSideProps({ params }) {
  const { permalink } = params;

  const product = await commerce.products.retrieve(permalink, {
    type: "permalink",
  });

  return {
    props: {
      product,
    },
  };
}

export default function ProductPage({ product }) {
  const router = useRouter();
  return (
    <Layout title={product.name}>
      <div tw="bg-yellow-200 flex-1 py-20">
        <PushContent />
        <Container>
          <div tw="bg-white rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-12">
            <Image
              src={product.media.source}
              width={400}
              height={400}
              layout="responsive"
              objectFit="contain"
            />
            <div tw="flex flex-col items-start p-10 space-y-4 border-t md:(border-l border-t-0)">
              <h1 tw="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                {product.name}
              </h1>
              <h2 tw="text-3xl text-black font-semibold text-opacity-60">
                {product.price.formatted_with_symbol}
              </h2>

              <div
                dangerouslySetInnerHTML={{ __html: product.description }}
              ></div>

              <div tw="flex-1 flex items-end">
                <button
                  onClick={() => {
                    commerce.cart
                      .add(product.id, 1)
                      .then((response) =>
                        response.success
                          ? router.push("/cart")
                          : router.push("/_error")
                      );
                  }}
                  tw="inline-flex items-center bg-yellow-300 rounded-lg py-3 px-6 text-lg font-bold transition duration-300 ease-in-out transform hocus:(scale-110 bg-yellow-400 outline-none)"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
}
