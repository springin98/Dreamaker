'use client';
import { Provider, useStore } from 'jotai';

import Body from '@/components/main/Body';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function Home() {
  const myStore = useStore();
  const queryClient = new QueryClient();

  return (
    <Provider store={myStore}>
      <QueryClientProvider client={queryClient}>
        <Body />
      </QueryClientProvider>
    </Provider>
  );
}
