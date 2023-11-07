'use client';
import Images from '@/components/result/image/Images';
import { useAtomValue } from 'jotai';

import { imageAtom } from '@/store/main/imageAtom';
import { useEffect } from 'react';
export default function Page() {
  const image = useAtomValue(imageAtom);
  useEffect(() => {
    console.log(image.response);
  }, [image]);

  return (
    <div>
      <Images />
    </div>
  );
}
