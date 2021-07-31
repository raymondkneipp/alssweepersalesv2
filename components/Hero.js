import tw from "twin.macro";
import ButtonLink from "./ButtonLink";
import Container from "./Container";
import Vacuums from "./icons/Vacuums";

const StyledContainer = tw(
  Container
)`max-w-screen-xl flex flex-col items-center space-y-6 relative z-10`;

export default function Hero() {
  return (
    <div tw="bg-yellow-200 h-screen flex items-center relative">
      <StyledContainer>
        <h1 tw="text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-center font-bold">
          Find The Best Vacuum For Your Home
        </h1>
        <h2 tw="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center text-black text-opacity-60">
          Trusted Family Owned Business Since 1987
        </h2>
        <div tw="flex items-center md:space-x-6 flex-col justify-center space-y-6 md:space-y-0 md:flex-row">
          <ButtonLink href="/shop" primary>
            Shop Collection
          </ButtonLink>
          <ButtonLink href="/contact">Free Estimate</ButtonLink>
        </div>
      </StyledContainer>
      <Vacuums />
    </div>
  );
}
