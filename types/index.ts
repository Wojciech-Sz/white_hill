import { gallery } from "@/constans";

export type IconProps = {
  className?: string;
  strokeWidth?: string;
  width?: string;
  height?: string;
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
  title: string;
  subtitle?: string;
};

export interface IAppointment {
  title: string;
  description: string;
  content: {
    text: string;
  };
}
