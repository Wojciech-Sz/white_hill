import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

const Appointment = () => {
  return (
    <section
      style={{
        backgroundImage:
          "url(https://utfs.io/f/8e81d9f4-5c07-4aa2-9e8d-376ec285c9be-oe69nl.jpg)",
      }}
      className="appointment section gap-10 text-center font-montserrat text-xl/none text-white md:text-2xl/none lg:text-3xl/none"
    >
      <div className="max-w-[60ch] px-6">
        <p>
          Odrobinę nas poznaliście. Jeśli chcecie zaprosić
          nas do pracy nad waszą wymarzoną przestrzenią,
          jesteśmy gotowi.
        </p>
      </div>
      <div className="group flex flex-col items-center gap-4">
        <div className="flex cursor-default flex-col items-center">
          <p className="font-bold">SKONTAKUJ SIĘ Z NAMI</p>
          <ArrowDown className="size-8 transition-transform duration-300 group-hover:translate-y-4 md:size-10 lg:size-12" />
        </div>
        <Button variant="default" className="btn">
          <Link href="/appointment" prefetch={false}>
            Umów spotkanie
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Appointment;
