'use client';
import Images from '@/components/result/image/Images';
import { useSearchParams } from 'next/navigation';

export default function Page() {
  const searchParams = useSearchParams();
  const created = searchParams.get('created');
  const img = searchParams.get('img');
  const showSize = Number(searchParams.get('showSize'));

  return created &&
    img &&
    (showSize === 1024 || showSize === 512 || showSize === 256) ? (
    <div>
      <Images created={created} img={JSON.parse(img)} showSize={showSize} />
    </div>
  ) : (
    <div>Error</div>
  );
}
