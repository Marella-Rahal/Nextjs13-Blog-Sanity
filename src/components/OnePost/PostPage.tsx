import { urlForImage } from "@/sanity/lib/image";
import { SanityDocument } from "next-sanity";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "./RichTextComponents";

type propsType = {
  post: SanityDocument;
};
const PostPage = ({ post }: propsType) => {
  return (
    <div>
      {/* the top section */}
      <div className="relative my-10">
        <Image
          src={urlForImage(post?.mainImage).url()}
          alt={post?.mainImage?.alt}
          priority
          fill
        />
        <div className="relative bg-[#ff4c4c] text-white bg-opacity-90 w-full p-5 flex flex-col space-y-7">
          {/* first row */}
          <div className="flex flex-col items-start gap-y-5 gap-x-3 md:flex-row md:justify-between">
            {/* title and date */}
            <div className="flex flex-col space-y-1">
              <h1 className="font-bold text-2xl">{post?.title}</h1>
              <p>{new Date(post?._createdAt).toLocaleString()}</p>
            </div>
            {/* author */}
            <div className="flex gap-2 justify-center items-center">
              <Image
                src={urlForImage(post?.author?.image?.asset?._ref).url()}
                alt={post?.author?.image?.alt}
                width={500}
                height={500}
                className="w-[40px] h-[40px] rounded-full"
              />
              <h1 className="font-bold">{post?.author?.name}</h1>
            </div>
          </div>
          {/* description */}
          <p className="line-clamp-3 md:line-clamp-2">{post?.description}</p>
          {/* categories */}
          <div className="flex justify-end items-center gap-2 flex-wrap">
            {post?.categories.map((one: categoryType) => {
              return (
                <p
                  key={one._id}
                  className="bg-gray-800 rounded-2xl px-[10px] py-[5px]"
                >
                  {one.title}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      {/* the rest of the body */}
      <div className="mb-16 space-y-5">
        {post?.body && (
          <PortableText value={post.body} components={RichTextComponents} />
        )}
      </div>
    </div>
  );
};

export default PostPage;
