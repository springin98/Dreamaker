import { useAtom } from 'jotai';
import OpenAI from 'openai';

import { imageAtom } from '@/utils/main/imageAtom';

export default function SearchBtn() {
  const [image, setImage] = useAtom(imageAtom);

  async function getImage(value: string) {
    const openai = new OpenAI({
      apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
      dangerouslyAllowBrowser: true,
    });

    let responseObj: responseObjType = {
      prompt: value,
      n: image.n,
      size: image.size,
      response_format: image.response_format,
    };

    if (image.model === 3) {
      responseObj.model = 'dall-e-3';
    }

    const response = (await openai.images.generate(responseObj)) as any;

    if (response.error) {
      alert(response.error.message);
    }
    if (response.data) {
      setImage((draft) => {
        draft.response = response;
      });
    }
    return response;
  }

  const onClick = () => {
    if (image.prompt.length < 5) {
      alert('검색할 키워드를 자세히 입력해주세요.');
      return;
    } else {
      getImage(image.prompt);
    }
  };

  return (
    <div>
      <button onClick={() => onClick()}>검색</button>
    </div>
  );
}

interface responseObjType {
  prompt: string;
  n: number;
  size: '1024x1024' | '512x512' | '256x256';
  response_format: 'url';
  model?: 'dall-e-3';
}
