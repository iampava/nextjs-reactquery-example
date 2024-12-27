"use client";

import { UserList } from "./UserList";
import { useSuspendedUsers } from "./userQueries";

export const UsersSuspended = () => {
  const { data: users } = useSuspendedUsers();

  return (
    <UserList users={users} />
  );
}

