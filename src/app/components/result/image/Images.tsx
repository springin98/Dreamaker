import Image from 'next/image';

import VariationsBtn from '@/components/result/image/VariationsBtn';
import DownloadBtn from '@/components/result/image/DownloadBtn';

export default function Images({ created, img, showSize }: ImagesProps) {
  if (!img) return <></>;

  return (
    <div>
      {img.map((data: getImageType, index: number) => (
        <div key={index}>
          <Image
            src={data.url}
            alt={`created : ${created}`}
            width={showSize}
            height={showSize}
          />
          <DownloadBtn url={data.url} created={created} />
          <VariationsBtn url={data.url} />
        </div>
      ))}
    </div>
  );
}

interface getImageType {
  url: string;
}

interface ImagesProps {
  created: string;
  img: Array<getImageType>;
  showSize: 1024 | 512 | 256;
}
