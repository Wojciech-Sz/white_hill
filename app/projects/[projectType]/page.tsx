"use client";
import GalleryComponent from "@/components/shared/GalleryComponent";
import Hero from "@/components/shared/Hero";
import { Button } from "@/components/ui/button";

import { gallery, projectLinks } from "@/constans";
import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";
import React, { useState } from "react";

const ProjectGallery = ({
  params,
  searchParams,
}: {
  params: { projectType: keyof typeof gallery };
  searchParams: { type: string };
}) => {
  const [visible, setVisible] = useState(false);
  const heroImages = [
    {
      url: gallery[params.projectType][0].url,
      id: params.projectType + "-img-1",
    },
    {
      url: gallery[params.projectType][1].url,
      id: params.projectType + "-img-2",
    },
    {
      url: gallery[params.projectType][2].url,
      id: params.projectType + "-img-3",
    },
  ];

  return (
    <>
      <Hero heroImages={heroImages} />
      <section className="wrapper section section-gap ">
        <div className="projects-container">
          <h2
            className={`section-title ${searchParams.type === "Wnętrza" ? "translate-x-[-0.5px]" : "projects-title"}`}
          >
            {searchParams.type}
          </h2>
          <Button
            className="btn projects-btn"
            onClick={() => setVisible(!visible)}
          >
            Więcej
          </Button>
        </div>
        <div className="relative flex w-full flex-col">
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
        <GalleryComponent
          type={params.projectType}
          images={gallery[params.projectType]}
        />
      </section>
    </>
  );
};

export default ProjectGallery;
