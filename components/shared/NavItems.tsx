import {
  footerLinks,
  headerLinks,
  projectLinks,
} from "@/constans";
import Link from "next/link";
import React from "react";

const NavItems = ({
  closeMenu,
}: {
  closeMenu: () => void;
}) => {
  return (
    <nav className="flex size-full flex-col justify-between gap-5 p-5 sm:px-10">
      <ul className="mobile-links_container">
        {headerLinks.map((link) =>
          link.label === "Realizacje" ? (
            <li
              className="mobile-projects_container"
              key={link.label}
            >
              <Link
                href={link.route}
                className="mobile-link group"
                prefetch={false}
                scroll
                title={link.label}
                onClick={closeMenu}
              >
                {link.label}

                <div className="border-bottom" />
              </Link>
              <ul className="mobile-projects_container">
                {projectLinks.map((link) => (
                  <li
                    className="mobile-link_projects group"
                    key={link.label}
                  >
                    <Link
                      href={link.href}
                      title={link.label}
                      onClick={closeMenu}
                    >
                      {link.label}

                      <div className="border-bottom" />
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li
              className="mobile-link group"
              key={link.route}
            >
              <Link
                href={link.route}
                prefetch={false}
                scroll
                title={link.label}
                onClick={closeMenu}
              >
                {link.label}

                <div className="border-bottom" />
              </Link>
            </li>
          )
        )}

        <li className="mobile-link group">
          <Link
            href="/#contact"
            scroll
            prefetch={false}
            title="Kontakt"
            onClick={closeMenu}
          >
            Kontakt
            <div className="border-bottom" />
          </Link>
        </li>

        <li className="mobile-link group">
          <Link
            href="/appointment"
            prefetch={false}
            title="Umów spotkanie"
            onClick={closeMenu}
          >
            Umów spotkanie
            <div className="border-bottom" />
          </Link>
        </li>
      </ul>

      <ul className="flex gap-2 self-center md:hidden">
        {footerLinks.map((link, i) => (
          <li className="nav-social" key={link.name}>
            <Link
              href={link.href}
              prefetch={false}
              target="_blank"
              rel="noreferrer"
              title={link.name}
            >
              {link.icon}
              <span className="sr-only">{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavItems;
