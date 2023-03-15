import React from "react";

export default function Section3() {
  return (
    <>
      <section
        style={{
          backgroundColor: "#333232",
        }}
        className="py-10 lg:py-20"
      >
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="text-center mb-10 text-3xl lg:text-5xl text-white font-light">
            Sell without boundaries
          </h2>
          <p className="text-white mb-10">
            Open your business to millions of PayPal active shoppers around the
            world. We're available in more than 200 countries and markets around
            the world, accepting 25 currencies. Currency conversion fees may
            apply.
          </p>
          <button className="text-white font-bold hover:underline">
            More about fees
          </button>
        </div>
      </section>
    </>
  );
}
