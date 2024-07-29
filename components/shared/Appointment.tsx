import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

const Appointment = () => {
  return (
    <section
      style={{
        backgroundImage:
          "url(https://utfs.io/f/e9343b39-5585-4828-a56e-c5b26f5fbc83-oe69nl.jpg)",
      }}
      className="appointment group mt-12 flex w-full flex-col gap-4 text-center font-montserrat text-xl/none text-white md:mt-24 md:text-2xl/none lg:text-3xl/none"
    >
      <div className="flex max-w-[60ch] cursor-default flex-col items-center px-6">
        <p>
          Odrobinę nas poznaliście. Jeśli chcecie zaprosić
          nas do pracy nad waszą wymarzoną przestrzenią,
          jesteśmy gotowi.
        </p>
        <ArrowDown className="size-8 transition-transform duration-300 group-hover:translate-y-4 md:size-10 lg:size-12" />
      </div>
      <Button
        variant="default"
        className="font-museoSansCyrl text-lg/[1px] font-bold uppercase md:text-xl/[1px]"
      >
        <Link href="/appointment" prefetch={false}>
          SKONTAKUJ SIĘ Z NAMI
        </Link>
      </Button>
    </section>
  );
};

export default Appointment;
