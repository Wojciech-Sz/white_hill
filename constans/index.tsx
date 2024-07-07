import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from "@/components/icons";

export const headerLinks = [
  {
    label: "O Nas",
    route: "/#about",
  },
  {
    label: "Usługi",
    route: "/#services",
  },
  {
    label: "Projekty",
    route: "/#projects",
  },
  {
    label: "Współprace",
    route: "/#partners",
  },
  {
    label: "Opinie",
    route: "/#testimonials",
  },
];

export const team = [
  {
    firstName: "Imię",
    lastName: "Nazwisko",
    role: "Stanowisko",
  },
  {
    firstName: "Imię",
    lastName: "Nazwisko",
    role: "Stanowisko",
  },
  {
    firstName: "Imię",
    lastName: "Nazwisko",
    role: "Stanowisko",
  },
  {
    firstName: "Imię",
    lastName: "Nazwisko",
    role: "Stanowisko",
  },
  {
    firstName: "Imię",
    lastName: "Nazwisko",
    role: "Stanowisko",
  },
  {
    firstName: "Imię",
    lastName: "Nazwisko",
    role: "Stanowisko",
  },
];

export const coop = [
  { name: "firma 1", logo: "/assets/icons/yourlogo.svg" },
  { name: "firma 2", logo: "/assets/icons/yourlogo.svg" },
  { name: "firma 3", logo: "/assets/icons/yourlogo.svg" },
  { name: "firma 4", logo: "/assets/icons/yourlogo.svg" },
  { name: "firma 5", logo: "/assets/icons/yourlogo.svg" },
  { name: "firma 6", logo: "/assets/icons/yourlogo.svg" },
  { name: "firma 7", logo: "/assets/icons/yourlogo.svg" },
  { name: "firma 8", logo: "/assets/icons/yourlogo.svg" },
  { name: "firma 9", logo: "/assets/icons/yourlogo.svg" },
];

export const projects = [
  {
    type: "Wnętrza",
    images: [
      {
        url: "https://utfs.io/f/acb2f00f-f2c6-4afc-91a3-258babe869d1-4opkkl.jpg",
        title: "Tytuł",
        description: "Opis",
      },
      {
        url: "https://utfs.io/f/cfe48f1c-62e9-4ca1-8518-b458fbb0c7b4-4oplba.jpg",
        title: "Tytuł",
        description: "Opis",
      },
      {
        url: "https://utfs.io/f/1e3a505d-f20e-4694-ab48-a18b8c834fba-4opm1z.jpg",
        title: "Tytuł",
        description: "Opis",
      },
      {
        url: "https://utfs.io/f/1e3a505d-f20e-4694-ab48-a18b8c834fba-4opm1z.jpg",
        title: "Tytuł",
        description: "Opis",
      },
      {
        url: "https://utfs.io/f/1e3a505d-f20e-4694-ab48-a18b8c834fba-4opm1z.jpg",
        title: "Tytuł",
        description: "Opis",
      },
      {
        url: "https://utfs.io/f/1e3a505d-f20e-4694-ab48-a18b8c834fba-4opm1z.jpg",
        title: "Tytuł",
        description: "Opis",
      },
    ],
  },
  {
    type: "Budynki",
    images: [
      {
        url: "https://utfs.io/f/8d7a8a53-bafd-4339-9f03-54a982816bd1-4154ax.jpg",
        title: "Tytuł",
        description: "Opis",
      },
      {
        url: "https://utfs.io/f/1672debd-f57c-42b9-982b-f8432c314ebd-41551m.jpg",
        title: "Tytuł",
        description: "Opis",
      },
      {
        url: "https://utfs.io/f/b3539e4d-f5e8-4148-b3da-bd713c00f4a2-4155sb.jpg",
        title: "Tytuł",
        description: "Opis",
      },
      {
        url: "https://utfs.io/f/b3539e4d-f5e8-4148-b3da-bd713c00f4a2-4155sb.jpg",
        title: "Tytuł",
        description: "Opis",
      },
      {
        url: "https://utfs.io/f/b3539e4d-f5e8-4148-b3da-bd713c00f4a2-4155sb.jpg",
        title: "Tytuł",
        description: "Opis",
      },
      {
        url: "https://utfs.io/f/b3539e4d-f5e8-4148-b3da-bd713c00f4a2-4155sb.jpg",
        title: "Tytuł",
        description: "Opis",
      },
    ],
  },
];

export const interiors = [];

export const testimonials = [
  {
    firstName: "Imie",
    secondName: "Nazwisko",
    job: "Firma",
    testimonial:
      "This product has been a game-changer for our business. The features are top-notch and the support team is incredibly responsive.",
  },
  {
    firstName: "Imie",
    secondName: "Nazwisko",
    job: "",
    testimonial:
      "I've tried many similar products, but this one stands out with its intuitive interface and powerful features. Highly recommended!",
  },
  {
    firstName: "Imie",
    secondName: "Nazwisko",
    job: "",
    testimonial:
      "This product has streamlined our workflow and helped us deliver projects more efficiently. I highly recommend it to any team.",
  },
];

export const footerLinks = [
  {
    href: "https://www.facebook.com/",
    name: "Facebook",
    icon: <FacebookIcon className="size-6" />,
  },
  {
    href: "https://x.com/home?lang=pl",
    name: "X",
    icon: <TwitterIcon className="size-6" />,
  },
  {
    href: "https://www.instagram.com/",
    name: "Instagram",
    icon: <InstagramIcon className="size-6" />,
  },
];
