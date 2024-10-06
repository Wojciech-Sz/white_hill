"use client";
import { approach } from "@/constans";
import { CardBody, CardContainer } from "../ui/3d-card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const Card = ({
  type,
}: {
  type: keyof typeof approach;
}) => {
  return (
    <CardContainer
      containerClassName="py-0 cursor-default size-full aspect-[7/10] max-h-[80vh]"
      className="size-full"
    >
      <CardBody className="group/card relative flex size-full flex-col gap-6 bg-background p-6 hover:shadow-2xl ">
        <div className="flex h-full flex-col gap-4 overflow-hidden">
          <div className="flex flex-col gap-2">
            <h2 className="approach_title">
              {approach[type].title}
            </h2>
            <h3 className="approach_subtitle">
              {approach[type].subtitle}
            </h3>
          </div>
          <div className="flex max-h-[90%] flex-col gap-2 overflow-auto">
            {approach[type].description.map(
              (desc, index) => (
                <p
                  key={index}
                  className="approach_description"
                >
                  {desc}
                </p>
              )
            )}
          </div>
        </div>
        <Dialog>
          <DialogTrigger className="self-end">
            <div className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-border bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Dowiedz się więcej
            </div>
          </DialogTrigger>
          <DialogContent className="h-full max-h-[80vh] overflow-hidden">
            <DialogHeader>
              <DialogTitle className="approach_title">
                {approach[type].title}
              </DialogTitle>
              <DialogDescription className="approach_subtitle">
                {approach[type].subtitle}
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-2 overflow-auto">
              {approach[type].description.map(
                (desc, index) => (
                  <p
                    key={index}
                    className="approach_description"
                  >
                    {desc}
                  </p>
                )
              )}
            </div>
          </DialogContent>
        </Dialog>
      </CardBody>
    </CardContainer>
  );
};

export default Card;
