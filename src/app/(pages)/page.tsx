'use client';
import { Provider, useStore } from 'jotai';

export default function Home() {
  const myStore = useStore();

  return (
    <Provider store={myStore}>
      <div>test</div>
    </Provider>
  );
}
