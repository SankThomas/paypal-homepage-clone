import React from "react";

export default function HiddenCosts() {
  return (
    <>
      <section
        style={{
          backgroundColor: "#323332",
        }}
        className="py-20 text-center px-8"
      >
        <h2 className="text-center mb-6 text-2xl font-light lg:text-5xl text-white">
          No hidden costs, no surprises.
        </h2>
        <p className="text-white my-10 max-w-xl mx-auto">
          When you purchase with PayPal there are no hidden costs or processing
          fees, so you can enjoy your shopping. Currency conversion fees may
          apply.
        </p>
        <button className="font-bold text-white hover:underline">
          More about fees
        </button>
      </section>
    </>
  );
}
