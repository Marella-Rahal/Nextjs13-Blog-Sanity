import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-96">
          <Image
            className="object-contain"
            src={urlForImage(value).url()}
            alt="blog post image"
            fill
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-7 space-y-2 list-disc">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="ml-7 space-y-2 list-decimal">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-5xl font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-4xl font-bold">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-3xl font-bold">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-2xl font-bold">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-[#ff4c4c] border-l-4 p-3">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      return (
        <Link
          href={value.href}
          className="underline decoration-[#ff4c4c] hover:decoration-black"
        >
          {children}
        </Link>
      );
    },
  },
};
