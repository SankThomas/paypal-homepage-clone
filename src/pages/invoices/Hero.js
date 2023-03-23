import React from "react";

export default function Hero() {
  return (
    <>
      <section className="radial-gradient">
        <div className="py-20 lg:py-52 px-8 max-w-3xl mx-auto text-center text-white">
          <h1 className="font-bold text-4xl lg:text-5xl 2xl:text-6xl mb-6">
            Get paid the easy way with email invoicing.
          </h1>
          <p className="lg:text-lg mb-4">
            Create and send professional email invoices using our free,
            customizable templates.
          </p>
          <ul>
            <li className="mb-4">
              <button className="py-2 px-6 rounded-full border border-white font-bold">
                Sign Up Now
              </button>
            </li>
            <li>
              <button className="py-2 px-6 rounded-full font-bold hover:underline">
                Contact us
              </button>
            </li>
          </ul>
        </div>
      </section>

      <div
        style={{
          backgroundColor: "#EE4A33",
        }}
        className="h-4"
      ></div>
    </>
  );
}
