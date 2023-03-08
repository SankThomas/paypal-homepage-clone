import React from "react";

export default function Hero() {
  return (
    <>
      <section className="personal-showcase">
        <div className="overlay text-center px-8">
          <h1 className="text-white text-4xl mb-8 lg:text-5xl 2xl:text-6xl max-w-3xl mx-auto font-light">
            Shop worldwide. Your email address and password is all you need.
          </h1>
          <button className="btn-blue">Sign Up and Get Started</button>
        </div>
      </section>

      <div className="max-w-6xl mx-auto py-10 lg:py-20">
        <h2 className="text-center mb-8 text-2xl font-light lg:text-5xl lg:mb-16 text-slate-700">
          With PayPal you can shop, send and manage your funds with just one
          account.
        </h2>
      </div>
    </>
  );
}
