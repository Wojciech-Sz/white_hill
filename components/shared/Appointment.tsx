import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Appointment = () => {
  return (
    <section
      style={{
        backgroundImage:
          "url(https://utfs.io/f/8e81d9f4-5c07-4aa2-9e8d-376ec285c9be-oe69nl.jpg)",
      }}
      className="appointment"
    >
      <Button variant="default" className="btn">
        <Link href="/appointment" prefetch={false}>
          Umów spotkanie
        </Link>
      </Button>
    </section>
  );
};

export default Appointment;
