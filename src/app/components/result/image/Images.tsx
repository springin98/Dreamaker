import Image from 'next/image';
import Slider from 'react-slick';

import '@/styles/slider/slick-theme.scss';
import '@/styles/slider/slick.scss';
import styles from '@/styles/result/result.module.scss';

import VariationsBtn from '@/components/result/image/VariationsBtn';
import DownloadBtn from '@/components/result/image/DownloadBtn';

export default function Images({
  prompt,
  created,
  img,
  showSize,
}: ImagesProps) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (!img) return <></>;

  return (
    <div className={styles.imagesWrap}>
      <Slider {...settings}>
        {img.map((data: getImageType, index: number) => (
          <div key={index} className={styles.imageWrap}>
            <Image
              src={data.url}
              alt={`created : ${created}`}
              width={showSize}
              height={showSize}
            />
            {/* <DownloadBtn prompt={prompt} url={data.url} created={created} />
  <VariationsBtn url={data.url} /> */}
          </div>
        ))}
      </Slider>
    </div>
  );
}

interface getImageType {
  url: string;
}

interface ImagesProps {
  prompt: string;
  created: string;
  img: Array<getImageType>;
  showSize: 1024 | 512 | 256;
}
