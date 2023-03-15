import React from "react";
import Hero from "./sendpayments/Hero";
import ImageGrids from "./sendpayments/ImageGrids";
import WaysToPay from "./sendpayments/WaysToPay";

export default function SendPayments() {
  return (
    <>
      <Hero />
      <WaysToPay />
      <ImageGrids />
    </>
  );
}
