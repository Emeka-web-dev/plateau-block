import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="mb-5">
          <div className="relative w-full h-72  md:h-96 mx-auto">
            <Image
              className="object-contain"
              src={urlForImage(value).url()}
              alt="Blog Post Image"
              fill
            />
          </div>
          <p className="italic text-center text-gray-700 dark:text-white text-sm">{value.alt}</p>
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 pb-3 list-disc space-y-5">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-lg list-decimal">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-5xl py-3 font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-4xl py-3 font-bold">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-3xl py-3 font-bold">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-2xl py-3 font-bold">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-[#6e5112] border-l-4 pl-5 py-1 my-2 italic">
        {children}
      </blockquote>
    ),
    normal: ({ children }: any) => <p className="pb-3">{children}</p>,
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link href={value.href} rel={rel} className="underline font-[500]">
          {children}
        </Link>
      );
    },
  },
};
