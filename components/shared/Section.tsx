import { cn } from "@/lib/utils";
import React from "react";

const Section = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section className="flex-center w-full bg-background">
      <div className={cn("section", className)}>
        {children}
      </div>
    </section>
  );
};

export default Section;
