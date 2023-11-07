import Image from 'next/image';
import { useAtomValue } from 'jotai';

import { imageAtom } from '@/utils/main/imageAtom';
import { useEffect } from 'react';

export default function Images() {
  const image = useAtomValue(imageAtom);

  useEffect(() => {
    console.log(image.response);
  }, [image.response]);

  if (!image.response) return <></>;

  return (
    <div>
      {image.response.data.map((data: getImageType, index: number) => (
        <Image
          src={data.url}
          alt={`created : ${image.response.created}`}
          key={index}
          width={512}
          height={512}
        />
      ))}
    </div>
  );
}

interface getImageType {
  url: string;
}
