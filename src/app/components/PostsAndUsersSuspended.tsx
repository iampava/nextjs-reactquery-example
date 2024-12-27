"use client";

import { useSuspendedPosts } from "@/modules/posts/postQueries";
import { PostList } from "./PostList";
import { useSuspendedUsers } from "@/modules/users/userQueries";
import { UserList } from "@/modules/users/UserList";
import { Timer } from "./timer/Timer";

export const PostsAndUsersSuspended = () => {
  const { data: posts } = useSuspendedPosts();
  const { data: users } = useSuspendedUsers();

  return (
    <div>
        <p> Posts: </p>
        <PostList posts={posts} />
        <p> Users: </p>
        <UserList users={users} />
        <Timer />
    </div>
  );
}

