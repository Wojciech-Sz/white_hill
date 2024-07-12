import Link from "next/link";
import React from "react";
import { footerLinks } from "@/constans";

const Footer = () => {
  return (
    <footer className="w-full bg-black py-10 text-white">
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
          © {new Date().getFullYear()}. All rights reserved.
        </p>

        <ul className="flex flex-wrap gap-5">
          {footerLinks.map((link, i) => (
            <li
              className="flex size-10 items-center justify-center"
              key={i}
            >
              <Link
                href={link.href}
                className="text-gray-500 hover:text-white dark:text-gray-400 dark:hover:text-gray-50"
                prefetch={false}
                target="_blank"
              >
                {link.icon}
                <span className="sr-only">{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
