import React from "react";
import SignUp from "./components/homepage/SignUp";
import Hero from "./personal/Hero";
import Section2 from "./personal/Section2";
import Section3 from "./personal/Section3";

export default function Personal() {
  return (
    <>
      <Hero />
      <Section2 />
      <Section3 />
      <SignUp />
    </>
  );
}
