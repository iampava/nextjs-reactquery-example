import { User } from "@/app/types";

export const UserList = ({ users }: { users: User[] }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img width="20" height="20" src={user.avatar} alt={user.name} />
          {user.name}
        </li>
      ))}
    </ul>
  )
}
