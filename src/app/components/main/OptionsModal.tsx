import styles from '@/styles/main/main.modal.module.scss';

import ModelBtn from '@/components/main/buttons/ModelBtn';
import SizeBtn from '@/components/main/buttons/SizeBtn';
import NumBtn from '@/components/main/buttons/NumBtn';
import StyleBtn from './buttons/StyleBtn';

export default function OptionsModal({ isModal }: OptionsModalProps) {
  return (
    <div
      className={`${styles.optionModalWrap} ${
        isModal && styles.openOptionModal
      }`}
    >
      <ModelBtn />
      <SizeBtn />
      <NumBtn />
      <StyleBtn />
    </div>
  );
}

interface OptionsModalProps {
  isModal: boolean;
}
