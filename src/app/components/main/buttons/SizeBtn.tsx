import { useAtom } from 'jotai';
import { useEffect } from 'react';

import styles from '@/styles/main/main.button.module.scss';

import { imageAtom } from '@/store/main/imageAtom';

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
    <div className={styles.optionWrap}>
      <span>화질 선택</span>
      <button
        className={`${styles.btn} ${
          image.size === '1024x1024' ? styles.activeBtn : styles.inactiveBtn
        }`}
        onClick={() => onChangeSize(1024)}
      >
        1024x1024
      </button>
      <button
        className={`${styles.btn} ${
          image.size === '512x512' ? styles.activeBtn : styles.inactiveBtn
        }
        ${image.model === 3 && styles.disabledBtn}
        `}
        onClick={() => onChangeSize(512)}
        disabled={image.model === 3}
      >
        512x512
      </button>
      <button
        className={`${styles.btn} ${
          image.size === '256x256' ? styles.activeBtn : styles.inactiveBtn
        }
              ${image.model === 3 && styles.disabledBtn}
              `}
        onClick={() => onChangeSize(256)}
        disabled={image.model === 3}
      >
        256x256
      </button>
    </div>
  );
}
