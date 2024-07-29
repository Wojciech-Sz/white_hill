import React from "react";
import ContactForm from "./ContactForm";
import {
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "../icons";

import SvgBackground from "./SvgBackground";
import { Mails } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="section wrapper section-gap relative items-center"
    >
      <h2 className="section-title">Kontakt</h2>
      <p className="mb-4 max-w-[60ch] text-center text-xl md:text-2xl">
        Nasze biuro stacjonarne mieści się w Białymstoku.
        Projektu realizujemy na terenie całego kraju oraz
        poza jego granicami.
      </p>
      <SvgBackground />
      <div className="flex w-auto flex-col-reverse items-center gap-6 md:gap-10 lg:flex-row lg:items-start lg:justify-center lg:gap-20">
        <div className="flex flex-col items-center gap-2 text-center lg:items-start lg:gap-4 lg:text-left">
          <h3 className="text-xl font-bold md:text-2xl">
            Informacje Kontaktowe
          </h3>
          <div className="flex w-full flex-col items-center gap-2 font-montserrat text-lg font-normal lg:items-start ">
            <a
              aria-label="Zadzwoń"
              href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
            >
              <div className="flex  items-center gap-2  hover:text-primary-foreground/70 ">
                <PhoneIcon className="size-5 shrink-0" />
                501-458-229
              </div>
            </a>
            <a
              aria-label="Napisz do nas"
              href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
            >
              <div className="flex items-center gap-2  hover:text-primary-foreground/70 ">
                <MailIcon
                  className="size-5 shrink-0 "
                  strokeWidth="2.5"
                />
                biuro@wharchitecture.pl
              </div>
            </a>
            <a
              href="https://maps.google.com/maps?hl=pl&gl=pl&um=1&ie=UTF-8&fb=1&sa=X&ftid=0x471ffff413081853:0x2a68fbc7479fa52f"
              target="_blank"
            >
              <div className="flex items-center gap-2 hover:text-primary-foreground/70">
                <MapPinIcon className="size-5 shrink-0 " />
                ul. Dobra 10 lok.76, Białystok
              </div>
            </a>
            <div className="flex items-center gap-2">
              <ClockIcon className="size-5 shrink-0 " />
              <div className="flex gap-2">
                <p className="">pon - pt:</p>
                <p className="">9:00 - 17:00</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-primary-foreground lg:items-start">
              <span className="flex items-center gap-2">
                <Mails className="size-5 shrink-0" />
                Korespondencja:
              </span>
              <p>ul. Piastowska 13a/1, 15-207 Białystok</p>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
