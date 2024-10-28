import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Appointment = () => {
  return (
    <section
      id="contact"
      className="appointment-section min-h-[60vh]"
    >
      <div
        style={{
          backgroundImage:
            "url(https://utfs.io/f/e9343b39-5585-4828-a56e-c5b26f5fbc83-oe69nl.jpg)",
        }}
        className="fixed inset-0 -z-20 min-h-screen bg-gray-500/80 bg-cover bg-center bg-no-repeat bg-blend-multiply"
      />
      <p className="appointment-text">
        Odrobinę nas poznaliście. Jeśli chcecie zaprosić nas
        do pracy nad Waszą wymarzoną przestrzenią, jesteśmy
        gotowi.
      </p>

      <Link
        href="/konsultacje"
        title="Umów spotkanie"
        className="flex items-center"
      >
        <Button variant="default" className="btn-contact">
          SKONTAKUJ SIĘ Z NAMI
        </Button>
      </Link>
    </section>
  );
};

export default Appointment;
