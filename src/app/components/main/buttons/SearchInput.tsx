import { useAtom } from 'jotai';

import { imageAtom } from '@/store/main/imageAtom';
import { onCheckEng } from '@/utils/main/inputValidation';

export default function SearchInput() {
  const [image, setImage] = useAtom(imageAtom);

  const onChange = (value: string) => {
    if (!onCheckEng(value) && value.length > 0) return;

    setImage((draft) => {
      draft.prompt = value;
    });
  };

  return (
    <input
      type="text"
      value={image.prompt}
      onChange={(e) => onChange(e.target.value)}
      placeholder="A White Cute Cat"
    />
  );
}
