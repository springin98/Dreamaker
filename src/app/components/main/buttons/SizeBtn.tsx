import { useAtom } from 'jotai';

import { imageAtom } from '@/utils/main/imageAtom';

export default function SizeBtn() {
  const [, setImage] = useAtom(imageAtom);

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
      <button onClick={() => onChangeSize('512x512')}>512x512</button>
      <button onClick={() => onChangeSize('256x256')}>256x256</button>
    </div>
  );
}
