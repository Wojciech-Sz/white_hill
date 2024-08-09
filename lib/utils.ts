import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDateTime = (dateString: Date) => {
  const dateTimeOptions: Intl.DateTimeFormatOptions = {
    weekday: "long", // abbreviated weekday name (e.g., 'Mon')
    month: "long", // abbreviated month name (e.g., 'Oct')
    day: "numeric", // numeric day of the month (e.g., '25')
    hour: "numeric", // numeric hour (e.g., '8')
    minute: "numeric", // numeric minute (e.g., '30')
    hour12: false, // use 12-hour clock (true) or 24-hour clock (false)
  };

  const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: "long", // abbreviated weekday name (e.g., 'Mon')
    month: "long", // abbreviated month name (e.g., 'Oct')
    year: "numeric", // numeric year (e.g., '2023')
    day: "numeric", // numeric day of the month (e.g., '25')
  };

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "numeric", // numeric hour (e.g., '8')
    minute: "numeric", // numeric minute (e.g., '30')
    hour12: false, // use 12-hour clock (true) or 24-hour clock (false)
  };

  const formattedDateTime: string = new Date(
    dateString
  ).toLocaleString("pl-PL", dateTimeOptions);

  const formattedDate: string = new Date(
    dateString
  ).toLocaleString("pl-PL", dateOptions);

  const formattedTime: string = new Date(
    dateString
  ).toLocaleString("pl-PL", timeOptions);

  return {
    dateTime: formattedDateTime,
    dateOnly: formattedDate,
    timeOnly: formattedTime,
  };
};
