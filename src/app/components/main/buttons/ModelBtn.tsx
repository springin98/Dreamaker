import { useAtom } from 'jotai';

import { imageAtom } from '@/store/main/imageAtom';

export default function ModelBtn() {
  const [, setImage] = useAtom(imageAtom);

  const onClick = (value: 2 | 3) => {
    setImage((draft) => {
      draft.model = value;
    });
  };

  return (
    <div>
      <span>모델 선택</span>
      <button onClick={() => onClick(3)}>DELL-E 3</button>
      <button onClick={() => onClick(2)}>DELL-E 2</button>
    </div>
  );
}
