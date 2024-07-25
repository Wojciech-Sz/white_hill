import { gallery } from "@/constans";

export type IconProps = {
  className?: string;
  strokeWidth?: string;
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
