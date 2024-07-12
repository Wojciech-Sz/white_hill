import { headerLinks } from "@/constans";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="hidden items-center space-x-6 md:flex">
      {headerLinks.map((link, i) => (
        <Link
          key={i}
          href={link.route}
          className="text-lg font-semibold text-gray-900 transition-colors hover:text-gray-600 dark:hover:text-gray-50"
          prefetch={false}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
