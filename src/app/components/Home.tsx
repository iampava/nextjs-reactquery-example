import { Suspense } from "react";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { GenericLoading } from "./utils/GenericLoading";
import { PostsSuspended } from "./PostsSuspended";
import { GenericErrorBoundary } from "./utils/GenericErrorBoudary";
import { prefetchPosts } from "@/modules/posts/postQueries";
import { prefetchUsers } from "@/modules/users/userQueries";
import { UsersSuspended } from "@/modules/users/UsersSuspended";

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
          <PostsSuspended />
        </Suspense>
        <Suspense fallback={<GenericLoading />}>
          <UsersSuspended />
        </Suspense>
      </HydrationBoundary>
    </GenericErrorBoundary>
  );
}
