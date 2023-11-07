import Image from 'next/image';
import { useAtomValue } from 'jotai';

import { imageAtom } from '@/store/main/imageAtom';
import VariationsBtn from '@/components/result/image/VariationsBtn';
import DownloadBtn from '@/components/result/image/DownloadBtn';

export default function Images() {
  const image = useAtomValue(imageAtom);
  if (!image.response) return <></>;

  return (
    <div>
      {image.response.data.map((data: getImageType, index: number) => (
        <div key={index}>
          <Image
            src={data.url}
            alt={`created : ${image.response.created}`}
            width={image.showSize}
            height={image.showSize}
          />
          <DownloadBtn url={data.url} created={image.response.created} />
          <VariationsBtn url={data.url} />
        </div>
      ))}
    </div>
  );
}

interface getImageType {
  url: string;
}

// {
//     "created": 1699362485,
//     "data": [
//         {
//             "revised_prompt": "A handsome adult man of Middle-Eastern descent, with finely trimmed facial hair, wearing a stylish shirt, and a pair of glasses. He might be seen relaxing in a modern urban cafe, holding a cup of coffee in his hand, and a newspaper with today's date on the other, while offering a friendly, charismatic, and inviting smile. ",
//             "url": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-8iNKcWmrHZnNzxPE37ti7ViC/user-ww46vDHFkW8cG30Ic74sLMqx/img-0W4VNYKZo1YnAqfHu24Iz7Tv.png?st=2023-11-07T12%3A08%3A05Z&se=2023-11-07T14%3A08%3A05Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-11-06T16%3A52%3A17Z&ske=2023-11-07T16%3A52%3A17Z&sks=b&skv=2021-08-06&sig=7tb0p/ZYl0QXiWAGDE/3PYWKbOJfEYKXY/qNVPExrZ0%3D"
//         }
//     ]
// }
