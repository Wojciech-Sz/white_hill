'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  CardBody,
  CardContainer,
  CardItem,
} from '../ui/3d-card';
import React from 'react';

const About = () => {
  return (
    <section
      id='about'
      className='w-full xl:max-w-[80vw] px-5 md:px-10 xl:px-0 flex flex-col gap-16 pt-12 md:pt-24 items-center'
    >
      <h2 className='text-5xl font-bold'>O Nas</h2>
      <div className='w-full grid grid-cols-1 gap-4'>
        <Image
          src='https://utfs.io/f/cdaa3749-c2a3-4fb8-bea3-f14fbe6e2a18-njtigs.jpg'
          className='w-full object-cover h-[60vh] object-bottom'
          alt='O Nas'
          width={840}
          height={840}
        />
        <div className='flex flex-col w-full gap-10'>
          <p className='text-2xl'>
            Jesteśmy zespołem doświadczonych architektów z
            pasją do tworzenia wyjątkowych przestrzeni.
            Każdy projekt jest dla nas unikalnym wyzwaniem,
            które realizujemy z pełnym zaangażowaniem i
            dbałością o każdy detal. Wierzymy, że dobrze
            zaprojektowana przestrzeń może znacząco poprawić
            jakość życia, dlatego staramy się tworzyć
            projekty, które łączą estetykę z
            funkcjonalnością.
          </p>

          <div className='grid grid-cols-1 xl:grid-cols-2 gap-10'>
            <CardContainer
              containerClassName='py-0'
              className='inter-var cursor-default'
            >
              <CardBody className='bg-gray-50 relative group/card  hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-[70vh] rounded-xl p-6 border  '>
                <div className='flex h-full flex-col w-full gap-6'>
                  <Image
                    src='https://utfs.io/f/05dcd7ce-6483-44df-a481-d46c1a527dd4-mv8qnj.jpg'
                    height='1000'
                    width='1000'
                    className='h-[70%] w-full object-cover rounded-xl'
                    alt='Imie Nazwisko'
                  />
                  <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                      <h3 className='text-2xl font-bold'>
                        Imie Nazwisko
                      </h3>
                      <p className='text-xl text-muted-foreground italic'>
                        Stanowisko
                      </p>
                    </div>
                    <p className='text-lg'>
                      Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Quo labore sed rerum
                      dolorum magni eos sint eveniet minus
                      molestiae, harum adipisci, aspernatur
                      autem rem consequatur unde sapiente,
                      similique culpa. Iusto?
                    </p>
                  </div>
                </div>
              </CardBody>
            </CardContainer>
            <CardContainer
              containerClassName='py-0'
              className='inter-var cursor-default'
            >
              <CardBody className='bg-gray-50 relative group/card  hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-[70vh] rounded-xl p-6 border  '>
                <div className='flex flex-col h-full w-full gap-6'>
                  <Image
                    src='https://utfs.io/f/2e186a62-ad97-4ec3-a4b8-c8835204b807-mv8qnk.jpg'
                    height='1000'
                    width='1000'
                    className='h-[70%] w-full object-cover rounded-xl'
                    alt='Imie Nazwisko'
                  />
                  <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                      <h3 className='text-2xl font-bold'>
                        Imie Nazwisko
                      </h3>
                      <p className='text-xl text-muted-foreground italic'>
                        Stanowisko
                      </p>
                    </div>
                    <p className='text-lg'>
                      Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Quo labore sed rerum
                      dolorum magni eos sint eveniet minus
                      molestiae, harum adipisci, aspernatur
                      autem rem consequatur unde sapiente,
                      similique culpa. Iusto?
                    </p>
                  </div>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
