import React from "react";

export default function Hero() {
  return (
    <>
      <section className="payonline-hero sendpayments-hero">
        <div className="overlay text-center px-8 lg:text-left max-w-6xl mx-auto flex items-center">
          <article>
            <h1 className="font-light text-slate-800 text-3xl lg:text-4xl mb-4 2xl:text-5xl">
              Make a Payment in a few seconds.
            </h1>
            <p className="lg:w-1/2 lg:text-lg mb-8">
              You can send payments to almost anyone in exchange for goods and
              services, without sharing your financial information with the
              sellers. Use their email address and they'll get the payment in a
              simple, faster and more secure way.
            </p>
            <button className="btn-blue">Make a Payment</button>
          </article>
        </div>
      </section>

      <div
        style={{
          backgroundColor: "#323332",
        }}
        className="text-white py-10"
      >
        <ul className="max-w-6xl mx-auto px-8 flex lg:items-center lg:justify-center gap-4 flex-wrap lg:flex-nowrap">
          <li className="flex items-center gap-2">
            <span className="border py-3 px-5 rounded-full">1</span> Enter the
            seller’s email address.
          </li>
          <li className="flex items-center gap-2">
            <span className="border py-3 px-5 rounded-full">2</span> Enter an
            amount and make your payment more securely.
          </li>
          <li className="flex items-center gap-2">
            <span className="border py-3 px-5 rounded-full">3</span> Track your
            transactions in your account activity.
          </li>
        </ul>
      </div>
    </>
  );
}
