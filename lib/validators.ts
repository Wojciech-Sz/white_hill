import { z } from "zod";

export const contactFormSchema = z
  .object({
    firstName: z
      .string()
      .min(2, {
        message: "Imię musi mieć co najmniej 2 znaki.",
      })
      .max(50, {
        message: "Imię nie może przekraczać 50 znaków.",
      }),
    lastName: z
      .string()
      .min(2, {
        message: "Nazwisko musi mieć co najmniej 2 znaki.",
      })
      .max(50, {
        message: "Nazwisko nie może przekraczać 50 znaków.",
      }),
    phoneNumber: z.string().min(9, {
      message:
        "Numer telefonu musi mieć co najmniej 9 znaków.",
    }),
    subject: z
      .string()
      .min(2, {
        message: "Temat musi mieć co najmniej 2 znaki.",
      })
      .max(50, {
        message: "Temat nie może przekraczać 50 znaków.",
      }),
    email: z
      .string()
      .email({ message: "Niepoprawny adres E-mail" }),
    message: z
      .string()
      .min(2, {
        message: "Wiadomość musi mieć co najmniej 2 znaki.",
      })
      .max(500, {
        message:
          "wiadomość nie może przekraczać 500 znaków.",
      }),
    agree: z
      .boolean({ message: "isActive is required" })
      .refine((value) => value === true, {
        message:
          "Musisz wyrazić zgodę na przetwarzanie danych", // Wiadomość błędu
      }),
  })
  .required();

export const appointmentFormSchema = z
  .object({
    firstName: z
      .string()
      .min(2, {
        message: "Imię musi mieć co najmniej 2 znaki.",
      })
      .max(50, {
        message: "Imię nie może przekraczać 50 znaków.",
      }),
    lastName: z
      .string()
      .min(2, {
        message: "Nazwisko musi mieć co najmniej 2 znaki.",
      })
      .max(50, {
        message: "Nazwisko nie może przekraczać 50 znaków.",
      }),
    phoneNumber: z.string().min(9, {
      message:
        "Numer telefonu musi mieć co najmniej 9 znaków.",
    }),

    email: z
      .string()
      .email({ message: "Niepoprawny adres E-mail" }),
    subject: z.enum(["15 min", "1 h", "2 h"], {
      required_error: "Wybierz typ konsultacji",
    }),
    date: z.date(),
    agree: z.boolean().refine((value) => value === true, {
      message:
        "Musisz wyrazić zgodę na przetwarzanie danych", // Wiadomość błędu
    }),
    payment: z
      .boolean({ required_error: "Wybierz typ płatnosci" })
      .refine((value) => value === true, {
        message: "Musisz potwierdzić płatność", // Wiadomość błędu
      }),
  })
  .required();
