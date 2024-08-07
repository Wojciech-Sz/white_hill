import { Separator } from "@radix-ui/react-separator";
import React from "react";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col">
      <h2 className="section-title projects-title">
        {title}
      </h2>
      <Separator className="separator" />
    </div>
  );
};

export default SectionTitle;
