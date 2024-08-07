import { formatDateTime } from "@/lib/utils";
import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

type Props = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  message?: string;
  date?: Date;
  email: string;
};

const EmailTemplate = ({
  firstName,
  lastName,
  phoneNumber,
  message,
  email,
  date,
}: Props) => {
  return (
    <Html>
      <Head />
      <Preview>Formularz kontaktowy.</Preview>
      <Body style={main}>
        <Container style={container}>
          <Text style={paragraph}>
            {firstName} {lastName} {phoneNumber} {email},
          </Text>
          {message && (
            <Text style={paragraph}>{message}</Text>
          )}
          {date && (
            <Text style={paragraph}>
              {formatDateTime(date).dateTime}
            </Text>
          )}
          <Hr style={hr} />
        </Container>
      </Body>
    </Html>
  );
};

export default EmailTemplate;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};
