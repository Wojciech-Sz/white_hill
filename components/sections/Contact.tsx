import React from "react";
import {
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "../icons";

import { Mails } from "lucide-react";
import SvgBackground from "../shared/SvgBackground";
import ContactForm from "../shared/ContactForm";
import Section from "../shared/Section";

const Contact = () => {
  return (
    <Section className="section-start items-center gap-1 px-5 lg:px-0">
      <h2 className="section-title z-[1]">Kontakt</h2>
      <p className="contact-text z-[1]">
        Nasze biuro stacjonarne mieści się w Białymstoku.
        Projekty realizujemy na terenie całego kraju oraz
        poza jego granicami.
      </p>
      <SvgBackground />
      <div className="contact-container z-[1]">
        <div className="contact-info_container">
          <h3 className="text-lg font-bold xs:text-xl">
            Informacje Kontaktowe
          </h3>
          <address className="contact-info not-italic">
            <a
              aria-label="Zadzwoń"
              href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
              title="501-458-229"
            >
              <div className="info-link ">
                <PhoneIcon className="size-5 shrink-0" />
                501-458-229
              </div>
            </a>
            <a
              aria-label="Napisz do nas"
              href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
              title="biuro@wharchitecture.pl"
            >
              <div className="info-link ">
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
              title="ul. Dobra 10 lok.76, Białystok"
            >
              <div className="info-link">
                <MapPinIcon className="size-5 shrink-0" />
                ul. Dobra 10 lok. 76, Białystok
              </div>
            </a>
            <div className="flex items-center gap-2">
              <ClockIcon className="size-5 shrink-0" />
              <div className="flex gap-2">
                <p className="">pon - pt:</p>
                <p className="">9:00 - 17:00</p>
              </div>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <span className="flex items-center gap-2">
                <Mails className="size-5 shrink-0" />
                Korespondencja:
              </span>
              <p>ul. Piastowska 13a/1, 15-207 Białystok</p>
            </div>
          </address>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
};

export default Contact;
