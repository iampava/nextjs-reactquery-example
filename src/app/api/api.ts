export async function fetchPosts() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return import("@/app/data/posts").then((module) => {
    return module.posts.slice(0, 5);
  });
}
