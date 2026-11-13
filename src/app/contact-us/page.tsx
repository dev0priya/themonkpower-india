import React from "react";
import type { Metadata } from "next";
import ContactUsClient from "./ContactUsClient";

export const metadata: Metadata = {
  title: "Contact Us | Head Office, Factory Works & Commercial Desk",
  description:
    "Get in touch with The Monk Power India. Contact our sales and engineering team for UPVC pipes, suction hoses, electrical conduits, and dealer inquiries.",
};

export default function ContactUsPage() {
  return <ContactUsClient />;
}
