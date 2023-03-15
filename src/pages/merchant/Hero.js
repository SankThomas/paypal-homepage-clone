import React from "react";

export default function Hero() {
  return (
    <>
      <section className="payonline-hero merchant-hero">
        <div className="max-w-6xl mx-auto overlay flex justify-center flex-col text-center lg:text-left px-8">
          <article className="max-w-xl">
            <h1 className="text-white text-4xl lg:text-5xl mb-8 font-light">
              PayPal, the smart choice for business.
            </h1>
            <p className="text-white mb-10 lg:text-lg">
              Whether you’re looking for a complete payments solution or want to
              add PayPal as an extra payment method to your existing website, we
              have a smart solution that’s right for your business.
            </p>
            <button className="btn-blue">Get Started</button>
            <p className="text-white mt-8">
              Contact us to discuss your business needs.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
