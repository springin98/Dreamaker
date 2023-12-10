import { useAtom } from 'jotai';

import styles from '@/styles/main/main.button.module.scss';

import { imageAtom } from '@/store/main/imageAtom';

export default function ModelBtn() {
  const [image, setImage] = useAtom(imageAtom);

  const onClick = (value: 2 | 3) => {
    setImage((draft) => {
      draft.model = value;
    });
  };

  return (
    <div className={styles.optionWrap}>
      <span>모델 선택</span>
      <button
        className={`${styles.btn} ${
          image.model === 3 ? styles.activeBtn : styles.inactiveBtn
        }`}
        onClick={() => onClick(3)}
      >
        DELL-E 3
      </button>
      <button
        className={`${styles.btn} ${
          image.model === 2 ? styles.activeBtn : styles.inactiveBtn
        }`}
        onClick={() => onClick(2)}
      >
        DELL-E 2
      </button>
    </div>
  );
}
