import Image from 'next/image';
import { useAtomValue } from 'jotai';

import { imageAtom } from '@/utils/main/imageAtom';
import { useEffect } from 'react';

export default function Images() {
  const image = useAtomValue(imageAtom);

  useEffect(() => {
    console.log(image.response);
  }, [image.response]);

  if (!image.response) return <></>;

  return (
    <div>
      {/* {Array.isArray(image.response.data) ? (
        image.response.data.map((data: getImageType, index: number) => (
          <Image
            src={data.url}
            alt={`created : ${image.response.created}`}
            key={index}
          />
        ))
      ) : ( */}
      <Image
        src={image.response.data[0].url}
        alt={`created: ${image.response.created}`}
        width={512}
        height={512}
      />
      {/* )} */}
    </div>
  );
}

interface getImageType {
  url: string;
}

// {
//     "created": 1699274425,
//     "data": [
//         {
//             "url": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-8iNKcWmrHZnNzxPE37ti7ViC/user-ww46vDHFkW8cG30Ic74sLMqx/img-AqrkhseHVNNNLZHqXDoajihi.png?st=2023-11-06T11%3A40%3A25Z&se=2023-11-06T13%3A40%3A25Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-11-06T09%3A53%3A06Z&ske=2023-11-07T09%3A53%3A06Z&sks=b&skv=2021-08-06&sig=9qlMwhZliFhaAt6q5KfGLlaygYIyNVfACFZDCGOZJsE%3D"
//         }
//     ]
// }

// {
//     "created": 1699276074,
//     "data": [
//         {
//             "url": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-8iNKcWmrHZnNzxPE37ti7ViC/user-ww46vDHFkW8cG30Ic74sLMqx/img-JIqSawuYAn6PSqdsILNgMALs.png?st=2023-11-06T12%3A07%3A54Z&se=2023-11-06T14%3A07%3A54Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-11-06T11%3A23%3A13Z&ske=2023-11-07T11%3A23%3A13Z&sks=b&skv=2021-08-06&sig=nkKPCi%2BeCcd5haQ0HRiqQdKSnQy2%2BsMgAEJSfTeO1fo%3D"
//         }
//     ]
// }
