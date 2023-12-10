'use client';
import { useEffect } from 'react';
import { Provider, useSetAtom, useStore } from 'jotai';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { imageAtom } from '@/store/main/imageAtom';

import Body from '@/components/main/Body';

export default function Home() {
  const myStore = useStore();
  const queryClient = new QueryClient();
  const setImage = useSetAtom(imageAtom);

  useEffect(() => {
    setImage({
      response: {
        created: 0,
        data: [
          {
            revised_prompt: '',
            url: '',
          },
        ],
      },
      prompt: '',
      n: 1,
      size: '1024x1024',
      showSize: 1024,
      response_format: 'url',
      model: 3,
      style: 'none',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Provider store={myStore}>
      <QueryClientProvider client={queryClient}>
        <Body />
      </QueryClientProvider>
    </Provider>
  );
}
