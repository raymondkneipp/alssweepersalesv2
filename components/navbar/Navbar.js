import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "../icons/Logo";
import Container from "../Container";
import tw from "twin.macro";
import NavLink from "./NavLink";
import Cart from "../icons/Cart";
import MenuButton from "./MenuButton";
import commerce from "../../lib/commerce";

const StyledContainer = tw(Container)`min-w-full`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState(null);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    commerce.cart.retrieve().then((cart) => setCart(cart));

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      css={[
        tw`py-2 sm:py-4 fixed left-0 right-0 top-0 z-20 transition duration-300`,
        scrollPosition >= 70 && tw`bg-white shadow-md`,
      ]}
    >
      <StyledContainer>
        <div tw="flex items-center justify-between">
          <Link href="/" passHref>
            <a tw="font-bold text-base sm:text-lg lg:text-xl grid grid-flow-col gap-2 items-center hocus:(underline outline-none)">
              <Logo />
              Al&apos;s Sweeper &amp;
              <br /> Sewing Center
            </a>
          </Link>
          <MenuButton toggle={handleToggle} open={open} />
          <div
            css={[
              tw`hidden flex-1 justify-center fixed top-20 py-5 px-10 right-4 left-4 bg-white rounded-lg shadow-md z-0 space-y-4 sm:(py-0 px-0 space-y-0 flex relative bg-transparent justify-center top-0 right-0 left-0 bottom-0 shadow-none)`,
              open && tw`flex flex-col sm:(flex-row)`,
            ]}
          >
            <div tw="flex sm:flex-row flex-col sm:space-x-2 lg:space-x-4 sm:flex-1 justify-center items-center space-y-4 sm:space-y-0">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/shop">Shop</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </div>
            <div tw="grid grid-flow-col gap-4 justify-center mb-5 sm:mb-0">
              <NavLink href="/cart">
                <Cart />
                <span tw="inline sm:hidden lg:inline">Cart</span>
                <span tw="bg-yellow-300 w-6 h-6 flex items-center justify-center rounded-lg text-xs">
                  {(cart && cart.total_unique_items) || 0}
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      </StyledContainer>
    </nav>
  );
}
