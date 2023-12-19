import { useRouter } from 'next/navigation';
import { useAtom } from 'jotai';
import OpenAI from 'openai';

import styles from '@/styles/main/main.button.module.scss';

import { imageAtom } from '@/store/main/imageAtom';
import { InputStyle } from './StyleBtn';

export default function SearchBtn({
  setIsModal,
  setIsAlert,
  setIsLoading,
  setAlertText,
}: SearchBtnProps) {
  const router = useRouter();
  const [image, setImage] = useAtom(imageAtom);

  async function getImage(value: string) {
    setIsModal(false);
    setIsLoading(true);

    const openai = new OpenAI({
      apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
      dangerouslyAllowBrowser: true,
    });

    let responseObj: responseObjType = {
      prompt: value + ' hyper detail',
      n: image.n,
      size: image.size,
      response_format: image.response_format,
    };

    if (image.style !== InputStyle[0]) {
      responseObj.prompt = responseObj.prompt + ' ' + image.style;
    }

    if (image.model === 3) {
      responseObj.model = 'dall-e-3';
    }

    try {
      const response = (await openai.images.generate(responseObj)) as any;
      if (response.data) {
        setImage((draft) => {
          draft.response = response;
        });
        router.push(
          `/result?prompt=${encodeURIComponent(
            JSON.stringify(image.prompt)
          )}&created=${response.created}&img=${encodeURIComponent(
            JSON.stringify(response.data)
          )}&showSize=${image.showSize}&model=${image.model}&style=${
            image.style
          }`
        );
      }
    } catch (error) {
      setIsLoading(false);
      setAlertText(`보안 정책을 위배했습니다.\n다시 입력해주세요.`);
      setIsAlert(true);
    }
  }

  const onClick = () => {
    if (image.prompt.length < 1) {
      setAlertText('검색할 키워드를 자세히 입력해주세요.');
      setIsAlert(true);
      return;
    } else {
      getImage(image.prompt);
    }
  };

  return (
    <button onClick={() => onClick()} className={styles.searchBtn}>
      검색
    </button>
  );
}

interface responseObjType {
  prompt: string;
  n: number;
  size: '1024x1024' | '512x512' | '256x256';
  response_format: 'url';
  model?: 'dall-e-3';
}

interface SearchBtnProps {
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIsAlert: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setAlertText: React.Dispatch<React.SetStateAction<string>>;
}
