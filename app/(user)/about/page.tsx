import { client } from "@/sanity/lib/client";
import { aboutQuery } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";
import React from "react";
import { RichTextComponents } from "@/components/RichTextComponent";
import { PortableText } from "@portabletext/react";

export const revalidate = 30;
async function page() {
  const about: SanityDocument = await client.fetch(aboutQuery);
  return (
    <article>
      <div className="py-12 bg-[#dae5e6] dark:bg-[#323536] border-y-black dark:border-y-white border-y">
        <h3 className="text-center text-3xl sm:text-4xl md:text-6xl lg:text-7xl pb-4 md:pb-6 font-bold capitalize">
          {about.name}
        </h3>
        <p className="max-w-2xl mx-auto text-center px-5">
          {about.description}
        </p>
      </div>
      <section className="mx-auto max-w-[45rem] px-5 py-10">
        <PortableText value={about.body} components={RichTextComponents} />
      </section>
    </article>
  );
}

export default page;
