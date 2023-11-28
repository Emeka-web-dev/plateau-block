// import Posts from "@/components/BlogList";
import { client } from "@/sanity/lib/client";
import { postsQuery } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";
// import Banner from "@/components/Banner"
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import Banner from "@/components/Banner";

export const revalidate = 30;
export default async function Home() {
  // const posts = await sanityFetch<SanityDocument[]>({ query: postsQuery });
  const posts: SanityDocument[] = await client.fetch(postsQuery);
  const bannerPost = posts.slice(0, 2);
  return (
    <div className="overflow-x-hidden">
    <Banner posts={bannerPost} />
    <div className="max-w-6xl mx-auto px-5 py-10">
      <h2 className="uppercase font-semibold text-xl tracking-wider pb-4">Latest Article</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-12">
        {posts.map((post) => (
          <Link
            key={post._id}
            href={`/post/${post.slug.current}`}
            className="flex flex-col group"
          >
            {post.title}
            {/* <div className="w-full h-56 md:h-60 lg:h-56 relative overflow-hidden ">
              <Image
                src={urlForImage(post.mainImage).url()}
                layout="fill"
                alt={post.mainImage.alt}
                className="object-cover object-center group-hover:scale-105 transition-transform duration-200 ease-out"
              />
            </div>
            <div className="w-full bg-opacity-20 py-2 flex flex-col">
              <p className="font-light text-base capitalize">{post.title}</p>
              <div></div>
            </div> */}
          </Link>
        ))}
      </div>
    </div>
  </div>
  )
}
