import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";
import { coop } from "@/constans";

const Partners = () => {
  return (
    <section
      id="coop"
      className="w-full lg:max-w-[80vw] px-5 md:px-10 xl:px-0 flex flex-col gap-16 pt-12 pb-[100rem] md:pt-24 items-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center">
        Współracujemy z
      </h2>
      <div className="flex w-full flex-col gap-8 items-center">
        <Carousel
          opts={{ loop: true, align: "start" }}
          className="w-full"
        >
          <CarouselContent>
            {coop.map((item) => (
              <CarouselItem
                key={item.name}
                className="basis-1/2 lg:basis-1/4"
              >
                <div className="hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <Image
                    src="/assets/icons/yourlogo.svg"
                    width="140"
                    height="70"
                    alt="Partner Logo"
                    className="aspect-[3/1] w-full overflow-hidden rounded-lg bg-black object-contain object-center px-2 py-4 grayscale "
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex" />
          <CarouselNext className="hidden lg:flex" />
        </Carousel>
        <Carousel opts={{ loop: true }} className="w-full">
          <CarouselContent>
            {coop.map((item) => (
              <CarouselItem
                key={item.name}
                className="basis-1/2 lg:basis-1/4"
              >
                <div className="hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <Image
                    src="/assets/icons/yourlogo.svg"
                    width="140"
                    height="70"
                    alt="Partner Logo"
                    className="aspect-[3/1] w-full overflow-hidden rounded-lg bg-black object-contain object-center px-2 py-4 grayscale "
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex" />
          <CarouselNext className="hidden lg:flex" />
        </Carousel>
        <Carousel
          opts={{ loop: true, align: "start" }}
          className="w-full "
        >
          <CarouselContent>
            {coop.map((item) => (
              <CarouselItem
                key={item.name}
                className="basis-1/2 lg:basis-1/4"
              >
                <div className="hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <Image
                    src="/assets/icons/yourlogo.svg"
                    width="140"
                    height="70"
                    alt="Partner Logo"
                    className="aspect-[3/1] w-full overflow-hidden rounded-lg bg-black object-contain object-center px-2 py-4 grayscale "
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex" />
          <CarouselNext className="hidden lg:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Partners;
