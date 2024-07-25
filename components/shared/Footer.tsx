import Link from "next/link";
import React from "react";
import { footerLinks } from "@/constans";

const Footer = () => {
  return (
    <footer className="wrapper w-full bg-[#201E1D] py-10 text-white">
      <div className="flex items-center justify-center gap-10 max-sm:flex-col sm:justify-between">
        <Link
          href="/"
          className="flex items-center"
          prefetch={false}
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
