import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Appointment = () => {
  return (
    <section
      style={{
        backgroundImage:
          "url(https://utfs.io/f/e9343b39-5585-4828-a56e-c5b26f5fbc83-oe69nl.jpg)",
      }}
      id="contact"
      className="appointment "
    >
      <p className="appointment-text">
        Odrobinę nas poznaliście. Jeśli chcecie zaprosić nas
        do pracy nad waszą wymarzoną przestrzenią, jesteśmy
        gotowi.
      </p>

      <Button variant="default" className="btn-contact">
        <Link href="/appointment" prefetch={false}>
          SKONTAKUJ SIĘ Z NAMI
        </Link>
      </Button>
    </section>
  );
};

export default Appointment;
