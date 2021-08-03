import "twin.macro";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const Brand = ({ src, alt }) => (
  <div tw="mx-5 md:mx-10 lg:mx-20">
    <Image
      src={`/brands/${src}`}
      layout="fixed"
      width="100"
      height="100"
      objectFit="contain"
      alt={alt}
    />
  </div>
);

export default function Brands() {
  return (
    <div tw="my-20">
      <h2 tw="text-3xl text-center text-black font-semibold text-opacity-60 mb-10">
        Shop The Best Brands
      </h2>
      <Marquee>
        <Brand src="bissell.png" alt="Bissell" />
        <Brand src="dirt-devil.png" alt="Dirt Devil" />
        <Brand src="dyson.png" alt="Dyson" />
        <Brand src="eureka.png" alt="Eureka" />
        <Brand src="fuller.png" alt="Fuller Brush" />
        <Brand src="hoover.png" alt="Hoover" />
        <Brand src="kenmore.png" alt="Kenmore" />
        <Brand src="oreck.png" alt="Oreck" />
        <Brand src="royal.png" alt="Royal" />
        <Brand src="shark.png" alt="Shark" />
        <Brand src="pro-team.png" alt="Pro Team" />
        <Brand src="windsor.jpg" alt="Windsor" />
        <Brand src="sanitaire.png" alt="Sanitaire" />
        <Brand src="titan.jpg" alt="Titan" />
        <Brand src="rainbow.png" alt="Rainbow" />
        <Brand src="sirena.png" alr="Sirena" />
      </Marquee>
    </div>
  );
}
