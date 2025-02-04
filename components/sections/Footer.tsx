import Link from "next/link";
import React from "react";
import { footerLinks } from "@/constans";

const Footer = () => {
  return (
    <footer className="flex w-full justify-center bg-foreground py-5 text-white lg:py-8">
      <div className="wrapper box-content flex w-full items-center gap-3 max-sm:flex-col sm:justify-between">
        <Link
          href="/"
          prefetch={false}
          className="flex-center"
          title="White Hill"
          scroll
        >
          <span className="text-2xl/none  font-bold">
            White Hill
          </span>
        </Link>
        <p className="text-center leading-none lg:block">
          © {new Date().getFullYear()} White Hill.
          <br />
          Wszelkie prawa zastrzeżone.
        </p>

        <ul className="flex gap-2">
          {footerLinks.map((link, i) => (
            <li
              key={link.name + i}
              className="flex size-full text-white hover:text-primary"
            >
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                title={link.name}
              >
                {link.icon}
                <span className="sr-only">{link.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
