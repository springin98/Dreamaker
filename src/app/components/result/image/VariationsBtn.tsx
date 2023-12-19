import fs from 'fs';
import { useAtom, useAtomValue } from 'jotai';
import OpenAI from 'openai';

import { imageAtom, remakeImageAtom } from '@/store/main/imageAtom';

export default function VariationsBtn({ url }: VariationsBtnProps) {
  const [remakeImage, setRemakeImage] = useAtom(remakeImageAtom);
  const image = useAtomValue(imageAtom);

  const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const onClick = async () => {
    const response = await openai.images.createVariation({
      image: fs.createReadStream(url),
      model: remakeImage.model,
      n: remakeImage.n,
      response_format: remakeImage.response_format,
      size: image.size,
    });
  };

  return <button onClick={() => onClick()}>AI 변형</button>;
}

interface VariationsBtnProps {
  url: string;
}
