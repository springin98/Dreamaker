import styles from '@/styles/main/main.button.module.scss';
import { useEffect } from 'react';

export default function OpenModalBtn({
  isModal,
  setIsModal,
}: OpenModalBtnProps) {
  const onClick = () => {
    setIsModal(!isModal);
  };

  return (
    <button
      className={`${styles.modalBtn} ${isModal && styles.closeModalBtn}`}
      onClick={() => onClick()}
    />
  );
}

interface OpenModalBtnProps {
  isModal: boolean;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
}
