import { atomWithImmer } from 'jotai-immer';

export const imageAtom = atomWithImmer<imageAtomType>({
  response: null,
  prompt: '',
  n: 1,
  size: '1024x1024',
  response_format: 'url',
  model: 3,
});

interface imageAtomType {
  response: any;
  prompt: string;
  n: number;
  size: '1024x1024' | '512x512' | '256x256';
  response_format: 'url';
  model: 2 | 3;
}
