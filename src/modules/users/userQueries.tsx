import { fetchUsers } from "@/app/api/api"
import { QueryClient, useQuery, useSuspenseQuery } from "@tanstack/react-query"

const userKeys = {
  all: ["users"] as const,
}

export const useUsers = () => {
  return useQuery({
    queryKey: userKeys.all,
    queryFn: fetchUsers
  })
}

export const useSuspendedUsers = () => {
  return useSuspenseQuery({
    queryKey: userKeys.all,
    queryFn: fetchUsers
  })
}

export const prefetchUsers = (queryClient: QueryClient) => {
  return queryClient.prefetchQuery({
    queryKey: userKeys.all,
    queryFn: fetchUsers,
  });
}
