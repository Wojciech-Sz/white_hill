import React from "react";
import { CardBody, CardContainer } from "../ui/3d-card";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const Card = () => {
  return (
    <CardContainer
      containerClassName="py-0"
      className="inter-var cursor-default"
    >
      <CardBody className="group/card relative h-auto  w-full rounded-xl border border-black/[0.1] bg-gray-50 p-6 hover:shadow-2xl dark:border-white/[0.2] dark:bg-black dark:hover:shadow-emerald-500/[0.1] lg:h-[85vh]  ">
        <div className="flex size-full flex-col gap-6">
          <Image
            src="https://utfs.io/f/05dcd7ce-6483-44df-a481-d46c1a527dd4-mv8qnj.jpg"
            height="1000"
            width="1000"
            className="h-[70%] w-full rounded-xl object-cover lg:h-3/5"
            alt="Imie Nazwisko"
          />
          <div className="flex h-full flex-col justify-between">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold">
                  Imie Nazwisko
                </h3>
                <p className="text-xl italic text-muted-foreground">
                  Stanowisko
                </p>
              </div>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quo labore sed rerum
                dolorum magni eos sint eveniet minus
                molestiae, harum adipisci, aspernatur autem
                rem consequatur unde sapiente, similique
                culpa. Iusto?
              </p>
            </div>
            <Dialog>
              <DialogTrigger className="self-end">
                <div className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  Dowiedz się więcej
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">
                    Imie Nazwisko
                  </DialogTitle>
                  <DialogDescription className="text-xl italic text-muted-foreground">
                    Stanowisko
                  </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-4">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Asperiores itaque
                    nostrum voluptates esse odio amet,
                    perspiciatis obcaecati similique,
                    expedita cum sunt rem atque officiis
                    unde cupiditate ab officia, non ad.
                  </p>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Asperiores itaque
                    nostrum voluptates esse odio amet,
                    perspiciatis obcaecati similique,
                    expedita cum sunt rem atque officiis
                    unde cupiditate ab officia, non ad.
                  </p>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Asperiores itaque
                    nostrum voluptates esse odio amet,
                    perspiciatis obcaecati similique,
                    expedita cum sunt rem atque officiis
                    unde cupiditate ab officia, non ad.
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default Card;
