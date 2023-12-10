import { useRouter } from 'next/navigation';
import { useAtom } from 'jotai';
import OpenAI from 'openai';

import { imageAtom } from '@/store/main/imageAtom';
import { InputStyle } from './StyleBtn';

export default function SearchBtn({
  setIsModal,
  setIsAlert,
  setIsLoading,
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
            JSON.stringify(responseObj.prompt)
          )}&created=${response.created}&img=${encodeURIComponent(
            JSON.stringify(response.data)
          )}&showSize=${image.showSize}`
        );
      }
    } catch (error) {
      setIsLoading(false);
      setIsAlert(true);
    }
  }

  const onClick = () => {
    if (image.prompt.length < 1) {
      alert('검색할 키워드를 자세히 입력해주세요.');
      return;
    } else {
      getImage(image.prompt);
    }
  };

  return (
    <button
      onClick={() => onClick()}
      className="rounded border-2 border-purple300 bg-purple300 flex items-center text-white flex-1 ml-8 justify-center text-2xl"
    >
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
}
