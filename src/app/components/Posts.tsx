"use client";

import { usePosts } from "@/modules/posts/postQueries";
import { GenericLoading } from "./utils/GenericLoading";
import { GenericError } from "./utils/GenericError";
import { PostList } from "./PostList";

export const Posts = () => {
  const { data: posts, isPending, isError, error } = usePosts();

  if (isPending) {
    return <GenericLoading />;
  }

  if (isError) {
    return <GenericError err={error} />
  }

  return (
    <PostList posts={posts} />
  );
}

