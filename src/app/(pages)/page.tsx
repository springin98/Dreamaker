'use client';
import { Provider, useStore } from 'jotai';

import Body from '@/components/main/Body';

export default function Home() {
  const myStore = useStore();

  return (
    <Provider store={myStore}>
      <Body />
    </Provider>
  );
}
