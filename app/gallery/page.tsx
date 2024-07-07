import { Separator } from '@/components/ui/separator';
import { projects } from '@/constans';
import React from 'react';

const Interiors = () => {
  return (
    <section className='max-w-[80vw] w-full mx-auto px-5 md:px-10 xl:px-0 flex flex-col gap-20 pt-12 md:pt-24 lg:pt-36  items-center'>
      <div className='flex flex-col gap-4 w-full items-center'>
        <h2 className='text-5xl font-bold'>Wnętrza</h2>
        <Separator
          className='border-gray-500 border-b w-full'
          orientation='vertical'
        />
      </div>
    </section>
  );
};

export default Interiors;
