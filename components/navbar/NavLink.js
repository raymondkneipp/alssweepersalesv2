import Link from "next/link";
import { useRouter } from "next/router";
import tw from "twin.macro";

export default function NavLink({ children, href }) {
  const router = useRouter();

  return (
    <Link href={href} passHref>
      <a
        css={[
          tw`flex items-center py-2 px-4 space-x-2 rounded-lg transition duration-300 transform ease-in-out hocus:(scale-110 bg-yellow-300 outline-none) justify-center`,
          router.asPath === href && tw`font-semibold`,
        ]}
      >
        {children}
      </a>
    </Link>
  );
}
