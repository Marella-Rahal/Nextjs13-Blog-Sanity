import Posts from "@/components/AllPosts/Posts";
import PreviewPosts from "@/components/AllPosts/PreviewPosts";
import PreviewProvider from "@/components/PreviewProvider";
import { postsQuery } from "@/sanity/lib/queries";
import { sanityFetch, token } from "@/sanity/lib/sanityFetch";
import { SanityDocument } from "next-sanity";
import { draftMode } from "next/headers";

export default async function Home() {
  const posts = await sanityFetch<SanityDocument[]>({
    query: postsQuery,
  });

  const isDraftMode = draftMode().isEnabled;

  return (
    <div>
      <div className="w-full h-[1px] bg-[#ff4c4c] mt-5 mb-10" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-16 pb-16">
        {isDraftMode && token ? (
          <PreviewProvider token={token}>
            <PreviewPosts posts={posts} />
          </PreviewProvider>
        ) : (
          <Posts posts={posts} />
        )}
      </div>
    </div>
  );
}
