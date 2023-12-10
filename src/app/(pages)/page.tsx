'use client';
import { Provider, useStore } from 'jotai';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Body from '@/components/main/Body';

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
