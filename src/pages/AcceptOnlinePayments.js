import React from "react";
import Checkout from "./onlinepayments/Checkout";
import CTA from "./onlinepayments/CTA";
import Hero from "./onlinepayments/Hero";
import Section3 from "./onlinepayments/Section3";
import Section5 from "./onlinepayments/Section5";
import Tabs from "./onlinepayments/Tabs";

export default function AcceptOnlinePayments() {
  return (
    <>
      <Hero />
      <Checkout />
      <Section3 />
      <Tabs />
      <Section5 />
      <CTA />
    </>
  );
}
