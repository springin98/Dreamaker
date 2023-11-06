import Image from 'next/image';
import { useAtom } from 'jotai';
import OpenAI from 'openai';

import { imageAtom } from '@/utils/main/imageAtom';
import { useQuery } from '@tanstack/react-query';
import Loading from '@/components/common/Loading';

export default function SearchBtn() {
  const [image, setImage] = useAtom(imageAtom);

  async function getImage(value: string) {
    const openai = new OpenAI({
      apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
      dangerouslyAllowBrowser: true,
    });

    const response = (await openai.images.generate({
      prompt: value,
      n: image.n,
      size: image.size,
      response_format: image.response_format,
    })) as any;

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

  //react-query 사용한 api 호출 : <Images /> 로 계속 호출되어 사용 안 함
  function Images() {
    const { isPending, error, data } = useQuery({
      queryKey: ['images'],
      queryFn: () => getImage(image.prompt),
    });

    if (isPending) return <Loading />;

    if (error) {
      alert(data.error.message);
      return <p>Error!</p>;
    }

    return (
      <div>
        <Image src={data.data[0].url} alt={`created: ${data.created}`} />
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => onClick()}>검색</button>
    </div>
  );
}
