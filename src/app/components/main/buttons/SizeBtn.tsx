import { useAtom } from 'jotai';

import { imageAtom } from '@/store/main/imageAtom';
import { useEffect } from 'react';

export default function SizeBtn() {
  const [image, setImage] = useAtom(imageAtom);

  useEffect(() => {
    if (image.model === 2) return;

    setImage((draft) => {
      draft.size = '1024x1024';
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [image.model]);

  const onChangeSize = (size: number) => {
    if (size !== 1024 && size !== 512 && size !== 256) return;

    setImage((draft) => {
      switch (size) {
        case 1024:
          draft.size = '1024x1024';
          break;
        case 512:
          draft.size = '512x512';
          break;
        case 256:
          draft.size = '256x256';
          break;
      }
      draft.showSize = size;
    });
  };

  return (
    <div>
      <span>화질 선택</span>
      <button onClick={() => onChangeSize(1024)}>1024x1024</button>
      <button onClick={() => onChangeSize(512)} disabled={image.model === 3}>
        512x512
      </button>
      <button onClick={() => onChangeSize(256)} disabled={image.model === 3}>
        256x256
      </button>
    </div>
  );
}
