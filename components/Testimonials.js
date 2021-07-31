import "twin.macro";
import Image from "next/image";
import Container from "./Container";
import Star from "./icons/Star";

const Testimonial = ({ src, name, body }) => (
  <article tw="flex flex-col items-center">
    <div tw="shadow-md bg-yellow-200  p-10 pb-16 flex-1 flex items-center">
      <p tw="text-center text-black text-opacity-70">{body}</p>
    </div>
    <div tw="-mt-14">
      <Image
        src={`/testimonials/${src}`}
        layout="fixed"
        width="100"
        height="100"
        objectFit="contain"
        alt="Customer"
      />
    </div>
    <h3 tw="text-lg font-semibold mb-1 text-black text-opacity-60">{name}</h3>
    <div tw="text-black flex space-x-2 text-opacity-60">
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </div>
  </article>
);

export default function Brands() {
  return (
    <Container>
      <div tw="my-20">
        <h2 tw="text-3xl text-center text-black font-semibold text-opacity-60 mb-10">
          Testimonials
        </h2>

        <div tw="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12">
          <Testimonial
            src="customer1.png"
            body="Dustin is very nice, sold me a great vacuum and fixed the belt quickly while we waited! Very reasonable prices."
            name="Stephanie H."
          />
          <Testimonial
            src="customer2.png"
            body="Nice folks had bags and belts and fixed up my older sweeper. Left my sewing machine for an estimate."
            name="Lisa E."
          />
          <Testimonial
            src="customer3.png"
            body="Dustin was very helpful in troubleshooting my ancient sewing machine."
            name="Kate S."
          />
          <Testimonial
            src="customer4.png"
            body="I had a great experience at Al's Sweeper. He freed up a stuck wheel on our vacuum and didn't even charge me. We have had our vacuum cleaned there before and he has always done a great job."
            name="Dennis C."
          />
        </div>
      </div>
    </Container>
  );
}
