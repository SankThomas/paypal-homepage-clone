import React from "react";

export default function Hero() {
  return (
    <>
      <section className="payonline-hero onlinepayments-hero">
        <div className="overlay text-center px-8 lg:text-left max-w-6xl mx-auto flex items-center">
          <article>
            <h1 className="font-light text-white text-3xl lg:text-4xl mb-4 2xl:text-5xl lg:max-w-lg">
              Start accepting online payments.
            </h1>
            <p className="lg:max-w-lg lg:text-lg mb-8 text-white font-bold">
              Whether you're looking for a payment gateway or want to add PayPal
              as an additional payment method, we can help you.
            </p>
            <button className="btn-blue">Get Started</button>
          </article>
        </div>
      </section>
    </>
  );
}
