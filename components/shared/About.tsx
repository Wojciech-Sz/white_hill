import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from '../ui/card';

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

          <Card>
            <div className='flex '>
              <Image
                src='https://utfs.io/f/05dcd7ce-6483-44df-a481-d46c1a527dd4-mv8qnj.jpg'
                alt='Imie Nazwisko'
                width={400}
                height={400}
              />
              <CardHeader>Imie Nazwisko</CardHeader>
              <CardDescription>Stanowisko</CardDescription>
            </div>
            <CardFooter>
              Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Nostrum rem, tenetur sed
              repudiandae quod ea reprehenderit voluptatum
              debitis impedit sit totam accusantium vel
              voluptate corrupti laboriosam nisi. Ex,
              asperiores praesentium?
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
