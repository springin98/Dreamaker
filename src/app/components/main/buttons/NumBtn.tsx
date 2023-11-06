import { useAtom } from 'jotai';

import { imageAtom } from '@/utils/main/imageAtom';

export default function NumBtn() {
  const [image, setImage] = useAtom(imageAtom);

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
      />
    </div>
  );
}
