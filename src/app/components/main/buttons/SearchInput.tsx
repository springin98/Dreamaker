import { useAtom } from 'jotai';

import { imageAtom } from '@/utils/main/imageAtom';

export default function SearchInput() {
  const [image, setImage] = useAtom(imageAtom);

  const onChange = (value: string) => {
    setImage((draft) => {
      draft.prompt = value;
    });
  };

  return (
    <input
      type="text"
      value={image.prompt}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
