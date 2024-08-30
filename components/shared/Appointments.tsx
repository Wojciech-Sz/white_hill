"use client";

import { appointments } from "@/constans";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ChevronRight } from "lucide-react";
import React, { useState } from "react";

gsap.registerPlugin(useGSAP);
const Appointments = () => {
  const [isDown, setIsDown] = useState<{
    [key: string]: boolean;
  }>({
    chevron0: false,
    chevron1: false,
    chevron2: false,
  });
  const { contextSafe } = useGSAP();

  const showAppointment = contextSafe(
    (chevronTarget: string, contentTarget: string) => {
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
        overflowY: isDown[chevronTarget]
          ? "hidden"
          : "auto",
        duration: 0.2,
        ease: "linear",
      });
    }
  );

  return (
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
  );
};

export default Appointments;
