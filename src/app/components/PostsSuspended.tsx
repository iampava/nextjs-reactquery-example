"use client";

import { useSuspendedPosts } from "@/modules/posts/postQueries";
import { PostList } from "./PostList";

export const PostsSuspended = () => {
  const { data: posts } = useSuspendedPosts();

  return (
    <PostList posts={posts} />
  );
}

