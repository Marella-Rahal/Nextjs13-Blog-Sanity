import { postQuery, postSlugsQuery } from "@/sanity/lib/queries";
import { sanityFetch, token } from "@/sanity/lib/sanityFetch";
import { SanityDocument } from "next-sanity";
import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { draftMode } from "next/headers";
import PreviewProvider from "@/components/PreviewProvider";
import PreviewPost from "@/components/OnePost/PreviewPost";
import PostPage from "@/components/OnePost/PostPage";

type propsType = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params: { slug },
}: propsType): Promise<Metadata> {
  const post = await sanityFetch<SanityDocument>({
    query: postQuery,
    params: { slug: slug },
  });

  return {
    title: post.title,
    description: post.description,
    icons: "/logo.svg",
  };
}

export async function generateStaticParams() {
  const slugs: slugType[] = await client.fetch(postSlugsQuery);

  return slugs.map((one: slugType) => ({ slug: one.slug.current }));
}

const page = async ({ params: { slug } }: propsType) => {
  const post = await sanityFetch<SanityDocument>({
    query: postQuery,
    params: { slug: slug },
  });
  const isDraftMode = draftMode().isEnabled;

  if (isDraftMode && token) {
    return (
      <PreviewProvider token={token}>
        <PreviewPost post={post} />
      </PreviewProvider>
    );
  }
  return <PostPage post={post} />;
};

export default page;
