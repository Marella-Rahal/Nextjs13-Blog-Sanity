import { groq } from "next-sanity";

// Get all posts
export const postsQuery = groq`
*[_type == "post"]{
    ...,
    author->,
    categories[]->
} | order(createdAt desc)
`;

// Get a single post by its slug
export const postQuery = groq`
*[_type == "post" && slug.current == $slug][0]{ 
    ...,
    author->,
    categories[]->
}
`;

// Get all post slugs
export const postSlugsQuery = groq`
*[_type == "post" ]{
  slug { current }
}
`;
