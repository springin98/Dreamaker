import { useRouter } from 'next/navigation';
import Image from 'next/image';

import styles from '@/styles/common/header.module.scss';
import logo from '@/public/svgs/common/logo.svg';

import { DrawingStyle, InputStyle } from '@/components/main/buttons/StyleBtn';

export default function Header({
  model,
  showSize,
  style,
  prompt,
}: HeaderProps) {
  const router = useRouter();
  const onClick = () => {
    router.push('/');
  };

  return (
    <div className={styles.header}>
      <div className={styles.headerWrap}>
        <Image alt="logo" src={logo} onClick={() => onClick()} />
        <span>{prompt.replaceAll('"', '')}</span>
        <div>
          <span className={styles.option}>
            {model === 3 ? 'DELL E 3' : 'DELL E 2'}
          </span>
          <span className={styles.option}>{`${showSize}x${showSize}`}</span>
          <span className={styles.option}>
            {InputStyle.indexOf(style)
              ? DrawingStyle[InputStyle.indexOf(style)]
              : 'None'}
          </span>
        </div>
      </div>
    </div>
  );
}

interface HeaderProps {
  prompt: string;
  model: number;
  showSize: number;
  style: string;
}
