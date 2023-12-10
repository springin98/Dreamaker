import { atom } from 'jotai';
import { atomWithImmer } from 'jotai-immer';

export const imageAtom = atomWithImmer<imageAtomType>({
  response: {
    created: 1699362485,
    data: [
      {
        revised_prompt:
          "A handsome adult man of Middle-Eastern descent, with finely trimmed facial hair, wearing a stylish shirt, and a pair of glasses. He might be seen relaxing in a modern urban cafe, holding a cup of coffee in his hand, and a newspaper with today's date on the other, while offering a friendly, charismatic, and inviting smile. ",
        url: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-8iNKcWmrHZnNzxPE37ti7ViC/user-ww46vDHFkW8cG30Ic74sLMqx/img-0W4VNYKZo1YnAqfHu24Iz7Tv.png?st=2023-11-07T12%3A08%3A05Z&se=2023-11-07T14%3A08%3A05Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-11-06T16%3A52%3A17Z&ske=2023-11-07T16%3A52%3A17Z&sks=b&skv=2021-08-06&sig=7tb0p/ZYl0QXiWAGDE/3PYWKbOJfEYKXY/qNVPExrZ0%3D',
      },
    ],
  },
  prompt: '',
  n: 1,
  size: '1024x1024',
  showSize: 1024,
  response_format: 'url',
  model: 3,
  style: 'none',
});

interface imageAtomType {
  response: any;
  prompt: string;
  n: number;
  size: '1024x1024' | '512x512' | '256x256';
  showSize: 1024 | 512 | 256;
  response_format: 'url';
  model: 2 | 3;
  style: string;
}

export const remakeImageAtom = atomWithImmer<remakeImageType>({
  model: 'dall-e-2',
  n: 1,
  response_format: 'url',
});

interface remakeImageType {
  model: 'dall-e-2'; //dall-e-2 만 사용가능
  n: number;
  response_format: 'url';
}
