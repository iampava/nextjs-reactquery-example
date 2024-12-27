import { Suspense } from "react";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { GenericLoading } from "./utils/GenericLoading";
import { GenericErrorBoundary } from "./utils/GenericErrorBoudary";
import { prefetchPosts } from "@/modules/posts/postQueries";
import { prefetchUsers } from "@/modules/users/userQueries";
import { PostsAndUsersSuspended } from "./PostsAndUsersSuspended";

export default async function Home() {
  const queryClient = new QueryClient()

  await Promise.all([
    prefetchPosts(queryClient),
    prefetchUsers(queryClient)
  ])

  return (
      <GenericErrorBoundary>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Suspense fallback={<GenericLoading />}>
            <PostsAndUsersSuspended />
          </Suspense>
        </HydrationBoundary>
      </GenericErrorBoundary>
  );
}
