import React from "react";
import Convert from "./invoices/Convert";
import GetPaid from "./invoices/GetPaid";
import Hero from "./invoices/Hero";
import HowItWorks from "./invoices/HowItWorks";
import Section2 from "./invoices/Section2";
import SendingInvoices from "./invoices/SendingInvoices";

export default function SendInvoice() {
  return (
    <>
      <Hero />
      <Section2 />
      <HowItWorks />
      <SendingInvoices />
      <Convert />
      <GetPaid />
    </>
  );
}
