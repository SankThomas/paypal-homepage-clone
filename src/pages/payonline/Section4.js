import React from "react";
import HiddenCosts from "./HiddenCosts";

export default function Section4() {
  return (
    <>
      <section className="py-20 flex flex-col items-center justify-center text-center px-8">
        <p className="inline-block py-10 px-6 border border-blue-600 mb-8 rounded-full text-5xl text-blue-600 font-light">
          72{" "}
          <span className="text-4xl">
            <sup>%</sup>
          </span>
        </p>
        <h2 className="text-center mb-6 text-2xl font-light lg:text-5xl text-blue-600">
          72% of US online shoppers have a PayPal account.
        </h2>
      </section>
      <HiddenCosts />
    </>
  );
}
