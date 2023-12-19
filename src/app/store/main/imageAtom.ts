import { atom } from 'jotai';
import { atomWithImmer } from 'jotai-immer';

export const imageAtom = atomWithImmer<imageAtomType>({
  response: {
    created: 0,
    data: [
      {
        revised_prompt: '',
        url: '',
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
