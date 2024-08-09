"use client";

import "react-datepicker/dist/react-datepicker.css";
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
    gsap.to(`#${chevronTarget}`, {
      rotate: isDown[chevronTarget] ? 0 : 90,
      duration: 0.2,
      ease: "linear",
    });

    gsap.to(`#${contentTarget}`, {
      height: isDown[chevronTarget] ? "0" : "100",
      overflowY: "hidden",
      duration: 0.2,
      ease: "linear",
      onComplete: () => {
        gsap.to(contentTarget, {
          overflowY: isDown[chevronTarget]
            ? "auto"
            : "hidden",
        });
      },
    });
    setIsDown((prev) => ({
      ...prev,
      [chevronTarget]: !prev[chevronTarget],
    }));
  };

  return (
    <section
      style={{
        backgroundImage:
          "url(https://utfs.io/f/e9343b39-5585-4828-a56e-c5b26f5fbc83-oe69nl.jpg)",
      }}
      className="background-img wrapper appointment-container overflow-hidden"
      id="hero"
    >
      <div className="appointment-fieldset">
        {appointments.map((appointment, i) => (
          <div
            key={appointment.title}
            className="appointment-field"
          >
            <div className="flex justify-between">
              <h2 className="appointment-field_title">
                {appointment.title}
              </h2>
              <ChevronRight
                className="cursor-pointer"
                id={`chevron${i}`}
                onMouseDown={() =>
                  showAppointment(
                    `chevron${i}`,
                    `content${i}`
                  )
                }
              />
            </div>
            <p>{appointment.description}</p>

            <div
              id={`content${i}`}
              className="left-0 h-0 w-full overflow-hidden bg-white"
            >
              {appointment.content.text}
            </div>
          </div>
        ))}
      </div>
      <AppointmentForm />
    </section>
  );
};

export default Appointment;
