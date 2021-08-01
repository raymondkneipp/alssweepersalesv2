import "twin.macro";
import Link from "next/link";
import Image from "next/image";

export default function ProductPreviewItem({ product }) {
  return (
    <Link href={`/shop/product/${product.permalink}`} passHref>
      <a tw="flex flex-col transition-all duration-300 hocus:(text-opacity-80) bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out transform outline-none hocus:(outline-none)">
        <Image
          src={product.media.source}
          layout="intrinsic"
          width={300}
          height={300}
          objectFit="contain"
          alt={product.name}
        />
        <div tw="p-5 border-t flex-1 flex flex-col">
          <p tw="text-black text-opacity-70">{product.name}</p>
          <h4 tw="text-lg font-semibold mb-1 text-black text-opacity-60 flex-1 flex items-end">
            {product.price.formatted_with_symbol}
          </h4>
        </div>
      </a>
    </Link>
  );
}
