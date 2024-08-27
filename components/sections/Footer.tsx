import Link from "next/link";
import React from "react";
import { footerLinks } from "@/constans";

const Footer = () => {
  return (
    <footer className="flex w-full justify-center bg-foreground py-5 text-white lg:py-8">
      <div className="wrapper flex w-full gap-5 max-sm:flex-col sm:justify-between">
        <Link
          href="/"
          className="flex-center"
          prefetch={false}
          title="White Hill"
        >
          <span className="ml-2 text-xl  font-bold">
            Architekt
          </span>
        </Link>
        <p className="lg:block">
          © {new Date().getFullYear()}. All rights
          reserved.
        </p>

        <div className="flex gap-2">
          {footerLinks.map((link, i) => (
            <Link
              key={link.name + i}
              href={link.href}
              className="flex size-full text-white hover:text-primary"
              prefetch={false}
              target="_blank"
              title={link.name}
            >
              {link.icon}
              <span className="sr-only">{link.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
