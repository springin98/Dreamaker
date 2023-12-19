'use client';
import { useState } from 'react';
import Image from 'next/image';

import styles from '@/styles/main/main.body.module.scss';

import logo from '@/public/svgs/common/logo.svg';

import SearchBtn from '@/components/main/buttons/SearchBtn';
import SearchInput from '@/components/main/SearchInput';
import OpenModalBtn from '@/components/main/buttons/OpenModalBtn';
import OptionsModal from '@/components/main/OptionsModal';
import Alert from '@/components/modal/Alert';
import Loading from '@/components/common/Loading';

export default function Body() {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [isAlert, setIsAlert] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [alertText, setAlertText] = useState<string>('');

  return (
    <div className={styles.body}>
      <div className={styles.contentWrap}>
        <Image src={logo} alt="logo" className={styles.logo} />
        <div className={styles.modalInputWrap}>
          <div className={styles.searchWrap}>
            <div className={styles.searchInputWrap}>
              <SearchInput />
              <OpenModalBtn isModal={isModal} setIsModal={setIsModal} />
            </div>
            <SearchBtn
              setIsModal={setIsModal}
              setIsAlert={setIsAlert}
              setIsLoading={setIsLoading}
              setAlertText={setAlertText}
            />
          </div>
          <div className={styles.modalWrap}>
            {isModal && <OptionsModal isModal={isModal} />}
          </div>
        </div>
      </div>
      {isAlert && <Alert text={alertText} setIsAlert={setIsAlert} />}
      {isLoading && <Loading />}
    </div>
  );
}
