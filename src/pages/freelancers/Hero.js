import React from "react";

export default function Hero() {
  return (
    <>
      <section className="payonline-hero freelancers-hero">
        <div className="overlay flex items-center justify-center max-w-6xl mx-auto px-8">
          <article>
            <h1 className="mb-8 text-white text-4xl lg:text-5xl italic font-bold">
              FREELANCE WITHOUT BOUNDARIES
            </h1>
            <p className="text-white mb-8 lg:text-lg lg:w-1/2">
              Make it simple for clients from all over the world to pay you for
              your freelance work. Get paid quickly and withdraw money from
              PayPal to your M-PESA account.
            </p>
            <button className="btn-blue">Sign Up Now</button>
          </article>
        </div>
      </section>
    </>
  );
}
