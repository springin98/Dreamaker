import { useAtom } from 'jotai';

import { imageAtom } from '@/utils/main/imageAtom';
import { useEffect } from 'react';

export default function SizeBtn() {
  const [image, setImage] = useAtom(imageAtom);

  useEffect(() => {
    if (image.model === 2) return;

    setImage((draft) => {
      draft.size = '1024x1024';
    });
  }, [image.model]);

  const onChangeSize = (size: string) => {
    setImage((draft) => {
      if (size === '1024x1024' || size === '512x512' || size === '256x256')
        draft.size = size;
    });
  };

  return (
    <div>
      <span>화질 선택</span>
      <button onClick={() => onChangeSize('1024x1024')}>1024x1024</button>
      <button
        onClick={() => onChangeSize('512x512')}
        disabled={image.model === 3}
      >
        512x512
      </button>
      <button
        onClick={() => onChangeSize('256x256')}
        disabled={image.model === 3}
      >
        256x256
      </button>
    </div>
  );
}
