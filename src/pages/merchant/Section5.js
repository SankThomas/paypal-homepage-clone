import React from "react";

export default function Section5() {
  return (
    <>
      <section
        style={{ backgroundColor: "#323332" }}
        className="py-10 lg:py-20 px-8"
      >
        <article className="max-w-xl mx-auto text-center">
          <h2 className="text-white text-4xl lg:text-5xl mb-10 font-light">
            Sell without boundaries.
          </h2>
          <p className="mb-8 text-white">
            Open your business to millions of PayPal active shoppers around the
            world. We're available in more than 200 countries and markets around
            the world, accepting 25 currencies. Currency conversion fees may
            apply.
          </p>
          <button className="font-bold text-white hover:underline">
            See all fees
          </button>
        </article>
      </section>
    </>
  );
}
