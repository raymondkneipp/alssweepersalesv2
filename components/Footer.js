import tw from "twin.macro";
import Container from "./Container";
import Facebook from "./icons/Facebook";

const StyledContainer = tw(
  Container
)`flex flex-col items-center justify-between space-y-4 md:(space-y-0 flex-row)`;

export default function Footer() {
  return (
    <footer tw="py-10 border-t text-sm">
      <StyledContainer>
        <div tw="flex flex-col items-center md:(space-x-4 space-y-0 flex-row) space-y-4 text-black text-opacity-60">
          <p>&copy; 2021 by Al&apos;s Sweeper &amp; Sewing Center</p>
          <a
            href="https://raymondkneipp.com"
            tw="hocus:(outline-none underline)"
          >
            Website by Raymond Kneipp
          </a>
        </div>
        <a
          href="https://www.facebook.com/AlsSweeper/"
          tw="transition duration-300 ease-in-out transform hocus:(scale-150 outline-none) text-black text-opacity-60"
        >
          <Facebook />
        </a>
      </StyledContainer>
    </footer>
  );
}
