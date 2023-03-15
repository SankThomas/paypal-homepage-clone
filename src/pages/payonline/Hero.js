import React from "react";
import phone from "../../images/payonline/buy_onwebsites_hero_fg_1x.png";

export default function Hero() {
  return (
    <>
      <section className="payonline-hero">
        <div className="relative overlay max-w-6xl mx-auto flex items-center justify-center gap-16 px-8 text-center lg:text-left">
          <article className="flex-1">
            <h1 className="text-slate-800 text-4xl mb-4 lg:text-5xl font-light">
              Checkout in a few clicks.
            </h1>
            <p className="lg:text-lg text-slate-700 font-bold mb-8">
              Check out simply and more securely at thousands of online stores
              with just an email address and password. You don't need to type in
              your card details every time you pay.
            </p>

            <button className="btn-blue">Sign Up and Start Shopping</button>

            <button className="hover:underline text-blue-600 font-bold mt-10">
              Shop online with PayPal
            </button>
          </article>

          <article className="hidden lg:block flex-1">
            <img src={phone} alt="" className="absolute bottom-0" />
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
            <span className="border py-3 px-5 rounded-full">1</span> Shop around
            the world from your computer or mobile.
          </li>
          <li className="flex items-center gap-2">
            <span className="border py-3 px-5 rounded-full">2</span> Skip
            through checkout with a simple login.
          </li>
          <li className="flex items-center gap-2">
            <span className="border py-3 px-5 rounded-full">3</span> Jump for
            joy when your order is complete.
          </li>
        </ul>
      </div>
    </>
  );
}
