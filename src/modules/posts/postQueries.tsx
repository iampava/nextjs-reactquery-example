import { fetchPosts } from "@/app/api/api"
import { QueryClient, useQuery, useSuspenseQuery } from "@tanstack/react-query"

const postsKeys = {
  all: ["posts"] as const,
}

export const usePosts = () => {
  return useQuery({
    queryKey: postsKeys.all,
    queryFn: () => fetchPosts()
  })
}

export const useSuspendedPosts = () => {
  return useSuspenseQuery({
    queryKey: postsKeys.all,
    queryFn: () => fetchPosts()
  })
}

export const prefetchPosts = (queryClient: QueryClient) => {
  return queryClient.prefetchQuery({
    queryKey: postsKeys.all,
    queryFn: () => fetchPosts(),
  });
}
