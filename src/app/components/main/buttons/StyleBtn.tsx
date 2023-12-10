import { useAtom } from 'jotai';

import styles from '@/styles/main/main.button.module.scss';

import { imageAtom } from '@/store/main/imageAtom';
import { useEffect } from 'react';

export default function StyleBtn() {
  const [image, setImage] = useAtom(imageAtom);

  const onClick = (styleIndex: number) => {
    setImage((draft) => {
      draft.style = InputStyle[styleIndex];
    });
  };

  useEffect(() => {
    setImage((draft) => {
      draft.style = InputStyle[0];
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [image.model]);

  return (
    <div className={styles.optionWrap}>
      <span>스타일</span>
      {image.model === 3 ? (
        DrawingStyle.map((style, index) => (
          <button
            className={`${styles.btn} ${
              DrawingStyle.indexOf(style) === InputStyle.indexOf(image.style)
                ? styles.activeBtn
                : styles.inactiveBtn
            }`}
            onClick={() => onClick(index)}
            key={index}
          >
            {style}
          </button>
        ))
      ) : (
        <button className={`${styles.btn} ${styles.activeBtn}`}>
          {DrawingStyle[0]}
        </button>
      )}
    </div>
  );
}

const DrawingStyle = ['None', 'Disney', 'Marvel', 'Sketch', 'Webtoon'];
export const InputStyle = [
  'none',
  'disney animation style',
  'marvel cartoon style',
  'sketch',
  'webtoon',
];
