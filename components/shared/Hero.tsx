import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <section className='w-full h-[90vh]'>
      <Image
        src='https://utfs.io/f/93fce74e-e3ba-413a-8234-5d77037e4634-41yl6f.jpg'
        alt='hero'
        width={1920}
        height={1080}
        className='w-full h-full object-cover'
      ></Image>
    </section>
  );
};

export default Hero;
