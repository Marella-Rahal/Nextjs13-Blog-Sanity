import { SanityDocument } from "next-sanity";
import ClientSideRoute from "../ClientSideRoute";
import Post from "./Post";

type propsType = {
  posts: SanityDocument[];
};
const Posts = ({ posts }: propsType) => {
  return (
    <>
      {posts.map((post) => {
        return (
          <>
            <ClientSideRoute
              key={post._id}
              route={`/post/${post.slug.current}`}
            >
              <Post post={post} />
            </ClientSideRoute>
          </>
        );
      })}
    </>
  );
};

export default Posts;
