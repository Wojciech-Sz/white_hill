"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formSchema } from "@/lib/validators";

import "react-datepicker/dist/react-datepicker.css";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { CalendarIcon } from "lucide-react";
import DatePicker, {
  registerLocale,
  setDefaultLocale,
} from "react-datepicker";
import { pl } from "date-fns/locale"; // Polish locale
import { useToast } from "@/components/ui/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

registerLocale("pl", pl);
setDefaultLocale("pl");

const Appointment = () => {
  const minDate = new Date();

  minDate.setDate(minDate.getDate() + 2);
  minDate.setHours(9);
  minDate.setMinutes(0);
  const initialValues = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    subject: "",
    message: "",
    agree: false,
    date: minDate,
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { ...initialValues },
  });
  const { toast } = useToast();

  const onSubmit = async (
    values: z.infer<typeof formSchema>
  ) => {
    const response = await fetch("/api/send", {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const data = await response.json();
    console.log("fetch response:", data);
    const message = data.error
      ? {
          title: "Wiadomość nie została wysłana",
          variant: "destructive" as "destructive",
        }
      : {
          title: "Wiadomość została wysłana",
          variant: "default" as "default",
        };

    form.reset();
    toast({
      ...message,
    });
  };

  return (
    <section
      style={{
        backgroundImage:
          "url(https://utfs.io/f/e9343b39-5585-4828-a56e-c5b26f5fbc83-oe69nl.jpg)",
      }}
      className="background-img wrapper absolute inset-0 overflow-y-auto"
    >
      <div className="grid w-full grid-cols-[1fr_auto] gap-5">
        <div className="grid w-full grid-cols-3 gap-1">
          <div className="h-40 w-full bg-white  hover:shadow-md hover:shadow-gray-800"></div>
          <div className="h-40 w-full bg-white"></div>
          <div className="h-40 w-full bg-white"></div>
        </div>
        <div className="max-w-md bg-background p-5">
          <Form {...form}>
            <form
              className="flex flex-col gap-3 font-montserrat"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              {/* Imię */}
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="border-primary text-base"
                        placeholder="Imię"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Nazwisko */}
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="border-primary text-base"
                        placeholder="Nazwisko"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Telefon */}
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="tel"
                        className="border-primary text-base"
                        placeholder="Numer telefonu"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="email"
                        className=" text-base"
                        placeholder="E-mail"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Data i godzina */}
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <div className="relative z-[1] text-muted-foreground">
                        <DatePicker
                          locale={"pl"}
                          className="input w-full cursor-pointer"
                          selected={field.value}
                          onChange={(date: Date | null) =>
                            field.onChange(date)
                          }
                          timeCaption="Godzina"
                          showTimeSelect
                          minDate={minDate}
                          dateFormat="dd/MM/yyy HH:mm"
                          minTime={
                            new Date("2024-07-14T09:00:00")
                          }
                          timeIntervals={15}
                          maxTime={
                            new Date("2024-07-14T17:00:00")
                          }
                          wrapperClassName="datePicker"
                        />
                        <CalendarIcon className="absolute right-4 top-3 z-[-1] size-4 " />
                      </div>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Agree */}
              <FormField
                control={form.control}
                name="agree"
                render={({ field }) => (
                  <FormItem className="flex h-auto flex-col items-start border-2 border-input  bg-background p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        aria-label="Zgoda na przetwarzanie danych osobowych"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormDescription className="text-base">
                        Wyrażam zgodę na przetwarzanie moich
                        danych osobowych. Administratorem
                        danych jest. Dane zostaną
                        wykorzystane w celu odpowiedzi na
                        zadane pytanie.
                      </FormDescription>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                size="lg"
                disabled={form.formState.isSubmitting}
                className="btn-contact"
              >
                {form.formState.isSubmitting
                  ? "Wysyłanie..."
                  : "Wyślij"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
