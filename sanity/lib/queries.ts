// ./nextjs-app/sanity/lib/queries.ts

import { groq } from "next-sanity";

// Get all posts
export const postsQuery = groq`*[_type == "post"]{
    _id, 
    title, 
    slug, 
    mainImage, 
    _createdAt,
    author -> {
      image,
      name
    }
  }`;

// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{ 
    title, 
    mainImage, 
    body, 
    _createdAt,
    author -> {
      image,
      name,
    },
    relatedArticle [] -> {
      title,
      slug,
      mainImage,
    }
  }`;

// Get all post slugs
// export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
//     "params": { "slug": slug.current }
//   }`;

export const aboutQuery = groq`*[_type == "about"][0]{
  name,
    description,
    socialLinks,
    body,
    address,
}`;
export const aboutStateQuery = groq`*[_type == "about"][0]{
    description,
    socialLinks,    
    address,
}`;
