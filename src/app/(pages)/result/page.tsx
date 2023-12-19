'use client';
import Header from '@/components/common/Header';
import Images from '@/components/result/image/Images';
import { useSearchParams } from 'next/navigation';

import styles from '@/styles/result/result.module.scss';

export default function Page() {
  const searchParams = useSearchParams();
  const prompt = searchParams.get('prompt');
  const created = searchParams.get('created');
  const img = searchParams.get('img');
  const showSize = Number(searchParams.get('showSize'));
  const model = Number(searchParams.get('model'));
  const style = searchParams.get('style');

  return prompt &&
    created &&
    img &&
    model &&
    showSize &&
    style &&
    (showSize === 1024 || showSize === 512 || showSize === 256) ? (
    <div className={styles.body}>
      <Header model={model} showSize={showSize} style={style} prompt={prompt} />
      <Images
        prompt={prompt}
        created={created}
        img={JSON.parse(img)}
        showSize={showSize}
      />
    </div>
  ) : (
    <div>Error</div>
  );
}
