import { useAtom } from 'jotai';

import { imageAtom } from '@/store/main/imageAtom';
import { useEffect } from 'react';

export default function NumBtn() {
  const [image, setImage] = useAtom(imageAtom);

  useEffect(() => {
    if (image.model === 2) return;
    setImage((draft) => {
      draft.n = 1;
    });
  }, [image.model]);

  return (
    <div>
      <span>개수</span>
      <input
        type="number"
        min={1}
        max={5}
        value={image.n}
        step={1}
        onChange={(e) => {
          setImage((draft) => {
            draft.n = Number(e.target.value);
          });
        }}
        readOnly={image.model === 3}
      />
    </div>
  );
}
