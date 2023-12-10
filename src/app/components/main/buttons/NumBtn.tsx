import { useAtom } from 'jotai';
import { useEffect } from 'react';
import Image from 'next/image';

import styles from '@/styles/main/main.button.module.scss';
import minus_abled from '@/public/svgs/main/minus_abled.svg';
import minus_disabled from '@/public/svgs/main/minus_disabled.svg';
import plus_abled from '@/public/svgs/main/plus_abled.svg';
import plus_disabled from '@/public/svgs/main/plus_disabled.svg';

import { imageAtom } from '@/store/main/imageAtom';

export default function NumBtn() {
  const [image, setImage] = useAtom(imageAtom);
  const MIN_IMAGE = 1;
  const MAX_IMAGE = 5;

  const onClick = (isPlus: boolean) => {
    if (image.model === 3) return;
    if (isPlus && image.n < MAX_IMAGE) {
      setImage((draft) => {
        draft.n = image.n + 1;
      });
    } else if (!isPlus && image.n > MIN_IMAGE) {
      setImage((draft) => {
        draft.n = image.n - 1;
      });
    }
  };

  useEffect(() => {
    if (image.model === 2) return;
    setImage((draft) => {
      draft.n = 1;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [image.model]);

  return (
    <div className={styles.optionWrap}>
      <span>개수</span>
      <div className={styles.numBtnWrap}>
        <Image
          alt="minus"
          src={
            image.model === 2 && image.n > MIN_IMAGE
              ? minus_abled
              : minus_disabled
          }
          onClick={() => onClick(false)}
        />
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
        <Image
          alt="minus"
          src={
            image.model === 2 && image.n < MAX_IMAGE
              ? plus_abled
              : plus_disabled
          }
          onClick={() => onClick(true)}
        />
      </div>
    </div>
  );
}
