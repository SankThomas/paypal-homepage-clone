import React from "react";
import Hero from "./payonline/Hero";
import ImageGrids from "./payonline/ImageGrids";
import Section4 from "./payonline/Section4";
import Speed from "./payonline/Speed";
import SignUp from "./components/homepage/SignUp";

export default function PayOnline() {
  return (
    <>
      <Hero />
      <Speed />
      <ImageGrids />
      <Section4 />
      <SignUp />
    </>
  );
}
