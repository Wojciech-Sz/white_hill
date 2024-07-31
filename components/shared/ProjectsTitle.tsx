"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { projectLinks } from "@/constans";
import Link from "next/link";
import { Separator } from "@radix-ui/react-separator";

const ProjectsTitle = ({
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
        className={`projects-links-container ${visible ? "mb-2 h-9 opacity-100" : "mb-0 h-0 overflow-hidden opacity-0"}`}
      >
        {projectLinks.map((link, i) => (
          <div
            key={link.label}
            className="flex items-center gap-2"
          >
            <Link
              href={link.href}
              className="projects-link"
            >
              {link.label}
            </Link>
            <Separator
              className={`${projectLinks.length - 1 === i ? "h-0" : "h-7 xs:h-5 sm:h-6 md:h-7"} border-l-2 border-primary-foreground/70 lg:hidden`}
            />
          </div>
        ))}
      </div>
      <Separator className="w-full border-b-2 border-primary-foreground" />
    </div>
  );
};

export default ProjectsTitle;
