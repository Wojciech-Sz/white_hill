"use client";

import { Textarea } from "../ui/textarea";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formSchema } from "@/lib/validators";
import { Button } from "@/components/ui/button";
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
import { Checkbox } from "../ui/checkbox";
import { useToast } from "../ui/use-toast";

import { CalendarIcon } from "lucide-react";
import DatePicker, {
  registerLocale,
  setDefaultLocale,
} from "react-datepicker";
import { pl } from "date-fns/locale"; // Polish locale

registerLocale("pl", pl);
setDefaultLocale("pl");

const ContactForm = () => {
  const minDate = new Date();

  minDate.setDate(minDate.getDate() + 2);
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

    form.reset();
    toast({
      title: "Wiadomość została wysłana pomyślnie!",
    });
  };

  return (
    <div className="max-w-md">
      <Form {...form}>
        <form
          className="flex flex-col gap-3"
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
                    className="text-base"
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
                    className="text-base"
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
                    className="text-base"
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
                    className="text-base"
                    placeholder="E-mail"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Data */}
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <DatePicker
                      locale={"pl"}
                      className="w-full bg-background cursor-pointer"
                      selected={field.value}
                      onChange={(date: Date | null) =>
                        field.onChange(date)
                      }
                      showTimeSelect
                      minDate={minDate}
                      dateFormat="dd/MM/yyy HH:mm"
                      minTime={
                        new Date("2024-07-14T08:00:00")
                      }
                      timeIntervals={15}
                      maxTime={
                        new Date("2024-07-14T16:00:00")
                      }
                      wrapperClassName="datePicker"
                    />
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* Temat */}
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="text-base"
                    placeholder="Temat"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Wiadomość */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    className="text-base"
                    placeholder="Treść wiadomości"
                    {...field}
                  />
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
              <FormItem className="flex flex-col items-start h-auto rounded-md border bg-background p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormDescription className="text-base">
                    Wyrażam zgodę na przetwarzanie moich
                    danych osobowych. Administratorem danych
                    jest. Dane zostaną wykorzystane w celu
                    odpowiedzi na zadane pytanie.
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
            className="w-full text-xl font-semibold"
          >
            {form.formState.isSubmitting
              ? "Wysyłanie..."
              : "Wyslij"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
