const SHOULD_THROW = false;

export async function fetchPosts() {
  console.log(`Fetching posts on ${typeof window === "undefined" ? "server" : "client"} at ${Date.now() % 10000}`);
  await new Promise((resolve) => setTimeout(resolve, 10000));

  return import("@/app/data/posts").then((module) => {
    if (SHOULD_THROW) {
      throw new Error("Failed to fetch posts");
    }
    return module.posts.slice(0, 5);
  });
}

export async function fetchUsers() {
  console.log(`Fetching users on ${typeof window === "undefined" ? "server" : "client"} at ${Date.now() % 10000}`);
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return import("@/app/data/users").then((module) => {
    if (SHOULD_THROW) {
      throw new Error("Failed to fetch users");
    }
    return module.users.slice(0, 5);
  });
}
