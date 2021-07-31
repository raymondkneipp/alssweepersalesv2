import "twin.macro";
import Layout from "../components/Layout";
import Container from "../components/Container";
import commerce from "../lib/commerce";
import PushContent from "../components/navbar/PushContent";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Cart() {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    commerce.cart.retrieve().then((cart) => {
      setCart(cart);
      console.log(cart);
    });
  }, []);

  return (
    <Layout title="Cart">
      <div tw="bg-yellow-200 flex-1">
        <PushContent />
        <Container>
          <h1 tw="text-4xl sm:text-5xl md:text-5xl lg:text-6xl text-center font-bold py-10">
            Cart
          </h1>
        </Container>
        <Container>
          {cart &&
            cart.line_items.map((item) => (
              <div tw="bg-white rounded-lg shadow-lg mb-5 grid grid-cols-3 md:grid-cols-4 overflow-hidden">
                <Image
                  src={item.media.source}
                  layout="intrinsic"
                  width="100"
                  height="100"
                  objectFit="contain"
                />
                <div tw="border-l p-5 col-span-2 md:col-span-3">
                  <h2 tw="text-lg text-black font-semibold text-opacity-60 mb-2">
                    {item.product_name}
                  </h2>
                  <p>Quantity: {item.quantity}</p>
                  <p>{item.line_total.formatted_with_symbol}</p>
                </div>
              </div>
            ))}
        </Container>
      </div>
    </Layout>
  );
}
