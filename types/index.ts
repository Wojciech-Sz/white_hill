import { gallery } from "@/constans";
import React from "react";

export type IconProps = {
  className?: string;
  strokeWidth?: string;
  width?: string;
  height?: string;
};

export type MenuIconProps = {
  className: string;
  topLine: React.LegacyRef<SVGLineElement>;
  middleLine: React.LegacyRef<SVGLineElement>;
  bottomLine: React.LegacyRef<SVGLineElement>;
};

export type ContactFormProps = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  subject: string;
  message: string;
};

export interface IProject {
  url: string;
  route: string;
  title: string;
  type?: keyof typeof gallery;
}

export interface IHero {
  url: string;
  id: string;
}

export type HeroProps = {
  heroImages: IHero[];
  className: string;
  children: React.ReactNode;
};

export interface IAppointment {
  title: string;
  description: string;
  content: {
    text: string;
  };
}
