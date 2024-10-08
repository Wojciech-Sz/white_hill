"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { projectLinks } from "@/constans";
import Link from "next/link";
import { Separator } from "@radix-ui/react-separator";

const ProjectsSectionTitle = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="relative flex w-full flex-col">
      <div className="projects-container">
        <h2
          className={`section-title ${className || "projects-title"}`}
        >
          {title}
        </h2>
        <Button
          className="btn projects-btn"
          onClick={() => setVisible(!visible)}
        >
          Więcej
        </Button>
      </div>
      <div
        className={`projects-links-container self-center ${visible ? "mb-2 h-9 opacity-100" : "mb-0 h-0 overflow-hidden opacity-0"}`}
      >
        {projectLinks.map((link, i) => (
          <div
            key={link.label}
            className="flex items-center gap-1 sm:gap-2"
          >
            <Link
              href={link.href}
              className="projects-link group hover:text-foreground/80"
              title={link.label}
            >
              {link.label}
              <div className="border-bottom" />
            </Link>
            <Separator
              className={`${projectLinks.length - 1 === i ? "h-0" : "h-7 xs:h-5 sm:h-6 md:h-7"} border-l-2 border-primary-foreground/70 md:hidden`}
            />
          </div>
        ))}
      </div>
      <Separator className="separator" />
    </div>
  );
};

export default ProjectsSectionTitle;
