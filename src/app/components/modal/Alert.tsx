import { useEffect, useRef } from 'react';
import { useAtom } from 'jotai';

import styles from '@/styles/modal/modal.module.scss';

import { imageAtom } from '@/store/main/imageAtom';

export default function Alert({ text, setIsAlert }: AlertProps) {
  const alertRef = useRef<HTMLDivElement>(null);
  const [, setImage] = useAtom(imageAtom);

  const onClick = () => {
    setIsAlert(false);
    setImage((draft) => {
      draft.prompt = '';
    });
  };

  useEffect(() => {
    function handleClickOutside(e: MouseEvent): void {
      if (alertRef.current && !alertRef.current.contains(e.target as Node)) {
        onClick();
      }
    }
    document.addEventListener('mouseup', handleClickOutside);
    return () => {
      document.removeEventListener('mouseup', handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [alertRef]);

  return (
    <div className={styles.modalWrap}>
      <div className={styles.background} />
      <div className={styles.modalAlertWrap} ref={alertRef}>
        <span>{text}</span>
        <button onClick={() => onClick()}>확인</button>
      </div>
    </div>
  );
}

interface AlertProps {
  text: string;
  setIsAlert: React.Dispatch<React.SetStateAction<boolean>>;
}
