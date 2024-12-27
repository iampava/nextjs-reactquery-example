import { fetchPosts } from "../api/api";

export const Home = async () => {
  const posts = await fetchPosts();
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.id} -  {post.title}</li>
      ))}
    </ul>
  );
}
