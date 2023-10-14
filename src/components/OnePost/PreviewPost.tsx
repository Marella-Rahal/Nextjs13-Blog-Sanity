"use client";

import { useParams } from "next/navigation";
import type { SanityDocument } from "@sanity/client";
import { useLiveQuery } from "@sanity/preview-kit";
import { postQuery } from "@/sanity/lib/queries";
import PostPage from "./PostPage";

export default function PreviewPost({ post }: { post: SanityDocument }) {
  const params = useParams();
  const [data] = useLiveQuery(post, postQuery, params);

  return <PostPage post={data} />;
}
