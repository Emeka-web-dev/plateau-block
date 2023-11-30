import { SanityDocument } from "next-sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";

import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { postQuery } from "@/sanity/lib/queries";
import { RichTextComponents } from "@/components/RichTextComponent";
import { Button } from "@/components/ui/button";
import RightContent from "@/components/RightContent";

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 30;
async function page({ params }: Props) {
  const post: SanityDocument = await client.fetch(postQuery, {
    slug: params.slug,
  });
  return (
    <article className="">
      <section className=" text-white">
        <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
          <div className="absolute top-0 w-full h-full opacity-70 blur-sm p-10">
            <Image
              className="object-center object-cover mx-auto"
              src={urlForImage(post.mainImage).url()}
              alt={post.author.name}
              fill
            />
          </div>
          <section className="p-5 bg-black/50 w-full z-10">
            <div className="flex flex-col space-y-4 max-w-6xl mx-auto">
              <div>
                <h1 className="text-2xl max-w-4xl md:text-3xl font-extrabold">
                  {post.title}
                </h1>
                <p>
                  {new Date(post._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="flex space-x-4">
                <span className="capitalize font-semibold text-lg">by:</span>
                <div className="flex space-x-2">
                  <div className="relative w-8 h-8">
                    <Image
                      src={urlForImage(post.author.image).url()}
                      className="object-cover object-center rounded-full"
                      fill
                      alt={post.author.name}
                    />
                  </div>
                  <p>{post.author.name}</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className="max-w-6xl mx-auto grid grid-cols-10">
        <div className="col-span-10 md:col-span-7 px-4 md:px-6 lg:px-10 pt-14 pb-8">
          <PortableText value={post.body} components={RichTextComponents} />
        </div>
        <RightContent post={post}/>
      </section>
      <section className="bg-[#dae5e6] dark:bg-[#323536]">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
            <h3 className="text-2xl font-semibold">Want to have a Word? Let&apos;s talk</h3>
            <Link href="/contact">
            <Button className="uppercase text-lg py-5 w-fit font-semibold tracking-wide rounded-none" size="lg">get in touch</Button>
            </Link>
        </div>
      </section>
    </article>
  );
}

export default page;
