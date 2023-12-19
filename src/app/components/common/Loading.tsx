import styles from '@/styles/common/loading.module.scss';

import loading from '@/public/svgs/common/loading.svg';
import Image from 'next/image';

export default function Loading() {
  return (
    <div className={styles.modalWrap}>
      <div className={styles.background} />
      <div className={styles.loadingWrap}>
        <div className={styles.imgWrap}>
          <Image alt="loading" src={loading} />
        </div>
        <div className={styles.textWrap}>
          <span>A</span>
          <span>I</span>
          <span>가</span>
          <span>&nbsp;</span>
          <span>그</span>
          <span>림</span>
          <span>을</span>
          <span>&nbsp;</span>
          <span>그</span>
          <span>리</span>
          <span>는</span>
          <span>&nbsp;</span>
          <span>중</span>
          <span>&nbsp;</span>
          <span>입</span>
          <span>니</span>
          <span>다</span>
          <span>.</span>
        </div>
      </div>
    </div>
  );
}
