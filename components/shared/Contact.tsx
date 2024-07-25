import React from "react";
import ContactForm from "./ContactForm";
import {
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "../icons";

import SvgBackground from "./SvgBackground";
import { Button } from "../ui/button";
import Link from "next/link";

const Contact = () => {
  return (
    <section
      id="contact"
      className="section section-gap relative"
    >
      <h2 className="section-title self-center">Kontakt</h2>
      <SvgBackground />
      <div className="flex w-auto flex-col-reverse items-center gap-6 md:gap-10 lg:flex-row lg:items-start lg:justify-center lg:gap-20">
        <div className="flex flex-col items-center gap-2 text-center lg:items-start lg:gap-4 lg:text-left">
          <h3 className="text-xl font-bold md:text-2xl">
            Informacje Kontaktowe
          </h3>
          <div className="flex w-full flex-col items-center gap-2 font-montserrat text-lg font-normal lg:items-start ">
            <a
              href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
            >
              <div className="flex  items-center gap-2  hover:text-primary-foreground ">
                <PhoneIcon className="size-5 shrink-0" />
                +1 (555) 123-4567
              </div>
            </a>
            <div className="flex items-center gap-2  hover:text-primary-foreground ">
              <MailIcon
                className="size-5 shrink-0 "
                strokeWidth="2.5"
              />
              <a
                href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
              >
                info@acme.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPinIcon className="size-5 shrink-0 " />
              <p className="">123 Main St, Anytown USA</p>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="size-5 shrink-0 " />
              <div className="flex gap-2">
                <p className="">pon - pt:</p>
                <p className="">8:00 - 16:00</p>
              </div>
            </div>
            <Button variant="default" className="btn">
              <Link href="/appointment" prefetch={false}>
                Umów spotkanie
              </Link>
            </Button>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
