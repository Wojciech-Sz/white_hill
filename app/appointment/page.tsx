"use client";

import { ChevronRight } from "lucide-react";
import { appointments } from "@/constans";
import gsap from "gsap";
import { useState } from "react";
import AppointmentForm from "@/components/shared/AppointmentForm";

const Appointment = () => {
  // Appointment logic
  const [isDown, setIsDown] = useState<{
    [key: string]: boolean;
  }>({
    chevron0: false,
    chevron1: false,
    chevron2: false,
  });

  const showAppointment = (
    chevronTarget: string,
    contentTarget: string
  ) => {
    setIsDown((prev) => ({
      ...prev,
      [chevronTarget]: !prev[chevronTarget],
    }));

    gsap.to(`#${chevronTarget}`, {
      rotate: isDown[chevronTarget] ? 0 : 90,
      duration: 0.2,
      ease: "linear",
    });

    gsap.to(`#${contentTarget}`, {
      height: isDown[chevronTarget] ? "0" : "200",
      overflowY: isDown[chevronTarget] ? "hidden" : "auto",
      duration: 0.2,
      ease: "linear",
    });
  };

  return (
    <section
      className="wrapper appointment-container"
      id="hero"
    >
      <div
        style={{
          backgroundImage:
            "url(https://utfs.io/f/e9343b39-5585-4828-a56e-c5b26f5fbc83-oe69nl.jpg)",
        }}
        className="fixed inset-0 -z-10 min-h-screen bg-gray-400 bg-cover bg-center bg-no-repeat bg-blend-multiply"
      />
      <div className="appointment-fieldset">
        {appointments.map((appointment, i) => (
          <div
            key={appointment.title}
            className="appointment-field cursor-pointer"
            onMouseDown={() =>
              showAppointment(`chevron${i}`, `content${i}`)
            }
          >
            <div className="flex justify-between">
              <h2 className="appointment-field_title">
                {appointment.title}
              </h2>
              <ChevronRight id={`chevron${i}`} />
            </div>
            <p>{appointment.description}</p>

            <div
              id={`content${i}`}
              className="left-0 h-0 w-full overflow-hidden bg-white px-2"
            >
              <p>{appointment.content.text}</p>
              <p>Dane do przelewu:</p>
            </div>
          </div>
        ))}
      </div>
      <AppointmentForm />
    </section>
  );
};

export default Appointment;
