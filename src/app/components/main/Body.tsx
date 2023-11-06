'use client';

import SizeBtn from '@/components/main/buttons/SizeBtn';
import NumBtn from '@/components/main/buttons/NumBtn';
import SearchBtn from '@/components/main/buttons/SearchBtn';
import Images from '@/components/main/Images';
import SearchInput from '@/components/main/buttons/SearchInput';

export default function Body() {
  return (
    <div>
      <div>
        <SearchInput />
        <SearchBtn />
      </div>
      <SizeBtn />
      <NumBtn />
      <Images />
    </div>
  );
}
