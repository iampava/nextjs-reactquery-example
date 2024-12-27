import { Post } from "../types";

export const PostList = ({ posts }: { posts: Post[]}) => {
  return (
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.id} -  {post.title}</li>
        ))}
      </ul>
  );
}
