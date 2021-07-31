import Link from "next/link";
import tw from "twin.macro";

export default function ButtonLink({ children, href, primary }) {
  return (
    <Link href={href} passHref>
      <a
        css={[
          tw`inline-flex items-center bg-yellow-300 rounded-lg py-3 px-6 text-lg font-bold transition duration-300 ease-in-out transform hocus:(scale-110 bg-yellow-400 outline-none)`,
          primary && tw`bg-white hocus:(bg-gray-100)`,
        ]}
      >
        {children}
      </a>
    </Link>
  );
}
