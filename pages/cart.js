import "twin.macro";
import Layout from "../components/Layout";
import Container from "../components/Container";
import commerce from "../lib/commerce";
import PushContent from "../components/navbar/PushContent";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import ButtonLink from "../components/ButtonLink";

export default function Cart() {
  const router = useRouter();

  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);
    commerce.cart.retrieve().then((cart) => {
      setLoading(false);
      setCart(cart.line_items);
      setData(cart);
    });
  }, []);

  return (
    <Layout title="Cart">
      <div tw="bg-yellow-200 flex-1 py-10">
        <PushContent />
        <Container>
          <h1 tw="text-4xl sm:text-5xl md:text-5xl lg:text-6xl text-center font-bold pb-10">
            Cart
          </h1>
        </Container>
        <Container>
          {loading && (
            <p tw="text-black text-opacity-70 text-center mb-4">Loading...</p>
          )}
          {cart &&
            (cart.length == 0 ? (
              <div tw="flex flex-col space-y-6 items-center">
                <h2 tw="text-3xl text-black font-semibold text-opacity-60 text-center">
                  No Items In Cart
                </h2>
                <ButtonLink href="/shop" primary>
                  Shop For Items
                </ButtonLink>
              </div>
            ) : (
              <>
                {cart.map((item) => (
                  <>
                    <div tw="bg-white rounded-lg shadow-lg mb-5 grid sm:grid-cols-3 md:grid-cols-4 overflow-hidden">
                      <Image
                        src={item.media.source}
                        layout="intrinsic"
                        width="100"
                        height="100"
                        objectFit="contain"
                      />
                      <div tw="sm:(border-t-0 border-l) border-t p-5 sm:col-span-2 md:col-span-3">
                        <h2 tw="text-lg text-black font-semibold text-opacity-60 mb-2">
                          {item.product_name}
                        </h2>
                        <p tw="text-black text-opacity-70 mb-2">
                          Quantity: {item.quantity}
                        </p>
                        <p tw="text-black text-opacity-70 mb-2">
                          {item.line_total.formatted_with_symbol}
                        </p>
                        <button
                          onClick={() => {
                            setCart(cart.filter((cart) => item.id != cart.id));

                            commerce.cart
                              .remove(item.id)
                              .then((response) =>
                                response.success
                                  ? router.push("/cart")
                                  : router.push("/_error")
                              );
                          }}
                          tw="inline-flex items-center bg-yellow-300 rounded-lg py-2 px-3 font-bold transition duration-300 ease-in-out transform hocus:(scale-110 bg-yellow-400 outline-none)"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </>
                ))}
                <div tw="flex flex-col sm:(flex-row justify-between space-y-0) items-center space-y-4">
                  <ButtonLink href="/shop">Continue Shopping</ButtonLink>
                  <ButtonLink
                    href={(data && data.hosted_checkout_url) || "/_error"}
                    primary
                  >
                    Checkout
                  </ButtonLink>
                </div>
              </>
            ))}
        </Container>
      </div>
    </Layout>
  );
}
