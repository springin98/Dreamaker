'use client';

import SizeBtn from '@/components/main/buttons/SizeBtn';
import NumBtn from '@/components/main/buttons/NumBtn';
import SearchBtn from '@/components/main/buttons/SearchBtn';
import Images from '@/components/main/Images';
import SearchInput from '@/components/main/buttons/SearchInput';
import ModelBtn from '@/components/main/buttons/ModelBtn';

export default function Body() {
  return (
    <div>
      <div>
        <SearchInput />
        <SearchBtn />
      </div>
      <ModelBtn />
      <SizeBtn />
      <NumBtn />
      <Images />
    </div>
  );
}
