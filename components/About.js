import tw from "twin.macro";
import Image from "next/image";
import Container from "./Container";
import Location from "./icons/Location";
import ButtonLink from "./ButtonLink";

const StyledContainer = tw(
  Container
)`grid lg:(grid-cols-2) gap-12 items-center my-20`;

export default function About() {
  return (
    <StyledContainer>
      <Image
        src="/images/storefront.png"
        layout="responsive"
        width="400"
        height="250"
        objectFit="cover"
      />
      <div>
        <h2 tw="text-3xl text-black font-semibold text-opacity-60 mb-4">
          Who We Are
        </h2>
        <p tw="text-black text-opacity-70 mb-4">
          Since we opened, Al's has been providing quality vacuums, parts,
          supplies, and cleaners as well as vacuum and sewing machine repair
          services in Wilmington, Ohio. Our goal is to provide exceptional
          service to anyone who walks through our door.
        </p>
        <p tw="text-black text-opacity-60 flex space-x-2 mb-4 items-center">
          <Location />
          <span>239 W Locust St, Wilmington, OH 45177</span>
        </p>

        <div tw="flex sm:(space-x-4 flex-row space-y-0) space-y-4 flex-col items-start">
          <ButtonLink href="https://www.google.com/maps/dir//Al's+Sweeper+Sales,+239+W+Locust+St,+Wilmington,+OH+45177/@39.4465689,-83.8375522,15.76z/data=!4m9!4m8!1m0!1m5!1m1!1s0x8840c6d8a21da3f9:0xe05e769e45ffa2a7!2m2!1d-83.8326449!2d39.4469675!3e0">
            Get Directions
          </ButtonLink>
          <ButtonLink href="/contact" primary>
            Contact Us
          </ButtonLink>
        </div>
      </div>
    </StyledContainer>
  );
}
