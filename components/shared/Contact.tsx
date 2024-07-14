import React from "react";
import ContactForm from "./ContactForm";
import {
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "../icons";

const Contact = () => {
  return (
    <section
      id="contact"
      className="section wrapper section-gap"
    >
      <h2 className="section-title">Kontakt</h2>
      <div className="flex flex-col-reverse gap-6 lg:flex-row md:gap-10 lg:gap-20">
        <div className="flex flex-col gap-2 text-center items-center lg:items-start lg:gap-4 lg:text-left">
          <h3 className="text-xl font-bold md:text-2xl">
            Informacje Kontaktowe
          </h3>
          <div className="flex flex-col gap-1 space-y-1 text-lg ">
            <a
              href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
            >
              <div className="flex items-center gap-2  hover:text-primary-foreground ">
                <PhoneIcon className="size-5 shrink-0" />
                +1 (555) 123-4567
              </div>
            </a>
            <div className="flex items-center gap-2  hover:text-primary-foreground ">
              <MailIcon className="size-5 shrink-0 " />
              <a
                href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
              >
                info@acme.com
              </a>
            </div>
            <div className="flex items-center gap-2  dark:">
              <MapPinIcon className="size-5 shrink-0 " />
              <p className="">123 Main St, Anytown USA</p>
            </div>
            <div className="flex items-center gap-2  dark:">
              <ClockIcon className="size-5 shrink-0 " />
              <div className="flex gap-2">
                <p className="">pon - pt:</p>
                <p className="">8:00 - 16:00</p>
              </div>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
