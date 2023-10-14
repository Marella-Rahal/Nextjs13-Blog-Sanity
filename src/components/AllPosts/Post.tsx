import { urlForImage } from "@/sanity/lib/image";
import { SanityDocument } from "next-sanity";
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";

type propsType = {
  post: SanityDocument;
};

const Post = ({ post }: propsType) => {
  return (
    <div className="flex flex-col space-y-7 cursor-pointer group">
      {/* Image div */}
      <div className="relative h-80 group-hover:scale-[1.03] lg:group-hover:scale-105 transition ease-out duration-500 drop-shadow-2xl rounded">
        <Image
          src={urlForImage(post?.mainImage).url()}
          alt={post?.mainImage?.alt}
          priority
          fill
          className="rounded"
        />
        {/* bottom section */}
        <div className="absolute bottom-0 w-full rounded px-5 py-3 lg:p-5 bg-black bg-opacity-30 backdrop-blur-xl flex justify-between items-center space-x-2">
          <div className="flex flex-col space-y-1 text-white">
            <h1 className="font-bold">{post?.title}</h1>
            <p>{new Date(post?._createdAt).toLocaleString()}</p>
          </div>
          <div className="flex flex-col gap-2 justify-start items-center lg:flex-row lg:flex-wrap md:justify-end">
            {post.categories.map((one: categoryType) => {
              return (
                <p
                  key={one._id}
                  className="bg-[#ff4c4c] rounded-2xl px-[7px] py-[2px]"
                >
                  {one.title}
                </p>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <h1 className="font-bold underline text-xl">{post?.title}</h1>
        <p className="line-clamp-2 text-gray-500">{post?.description}</p>
      </div>

      <div className="font-bold group-hover:underline flex space-x-2 items-center">
        <span>Read post</span>
        <BsArrowUpRight />
      </div>
    </div>
  );
};

export default Post;
