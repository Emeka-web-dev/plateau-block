"use client";
import { SanityDocument } from "next-sanity";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { urlForImage } from "@/sanity/lib/image";
import { useMediaQuery } from "usehooks-ts";
import Link from "next/link";
import Image from "next/image";
type Props = {
  posts: SanityDocument[];
};

function Banner({ posts }: Props) {
  const match = useMediaQuery("(max-width: 820px)");
  return (
    <Carousel
      swipeable={true}
      autoPlay={true}
      showStatus={false}
      emulateTouch
      infiniteLoop
      interval={6000}
      useKeyboardArrows
      showArrows={match ? false : true}
    >
      {posts.map((post) => (
        <div
          key={post._id}
          className="relative w-full h-[20rem] md:h-[25rem] lg:h-[32rem] flex bg-black/60 dark:bg-black/70"
        >
          <div
            className="absolute right-0 w-full h-full bg-cover bg-center z-[-1]"
            style={{
              backgroundImage: `url(${urlForImage(post.mainImage).url()})`,
            }}
          />
          <div className="max-w-6xl mx-auto w-full text-white text-left flex flex-col justify-center px-8 space-y-6">
            <Link href={`/post/${post.slug.current}`}>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold capitalize w-full max-w-4xl">
                {post.title}
              </h2>
            </Link>
            <div className="flex space-x-2 items-center">
              <div className="relative h-8 w-8">
                <Image
                  alt={post.author.name}
                  src={urlForImage(post.author.image).url()}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <p>{post.author.name}</p>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default Banner;
