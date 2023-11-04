'use client';

import { atom, useAtom } from 'jotai';
import { atomsWithQuery } from 'jotai-tanstack-query';
export default function Body() {
  const idAtom = atom(1);
  const [userAtom] = atomsWithQuery((get) => ({
    queryKey: ['users', get(idAtom)],
    queryFn: async ({ queryKey: [, id] }) => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      return res.json();
    },
  }));

  const UserData = () => {
    const [data] = useAtom(userAtom);
    return <div>{JSON.stringify(data)}</div>;
  };

  return (
    <div>
      <UserData />
    </div>
  );
}
