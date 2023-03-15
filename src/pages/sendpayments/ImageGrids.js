import React from "react";
import keepingsafe from "../../images/sendpayments/send_n3_lvc_1x.jpg";
import SignUp from "../components/homepage/SignUp";
import HiddenCosts from "../payonline/HiddenCosts";

export default function ImageGrids() {
  return (
    <>
      <section className="imagegrid-hero sendgrid-hero">
        <div className="overlay flex items-center justify-end max-w-3xl ml-auto px-8 text-center lg:text-left">
          <article>
            <h3 className="mb-6 text-2xl lg:text-4xl font-light text-slate-700">
              You've got the whole world in your hands.
            </h3>
            <p className="lg:w-2/3">
              Buy from thousands of merchants around the world. We accept 25
              currencies from 202 countries and markets. Currency conversion
              fees may apply.
            </p>
            <button className="hover:underline text-blue-600 font-bold mt-4">
              Read more about currency conversion
            </button>
          </article>
        </div>
      </section>

      <section
        style={{
          backgroundColor: "#003186",
        }}
        className="py-20 px-8 text-center"
      >
        <h2 className="max-w-3xl mx-auto text-2xl lg:text-5xl font-light text-white">
          “With PayPal, payments are sent in a few moments. It's nice to pay
          this way.”
        </h2>
      </section>

      <section className="grid grid-cols-1 gap-8 py-10 lg:py-20 px-8 text-center lg:text-left lg:grid-cols-2 lg:items-center max-w-6xl mx-auto">
        <article>
          <img src={keepingsafe} alt="" className="block mx-auto" />
        </article>

        <article>
          <h3 className="mb-6 text-2xl lg:text-4xl font-light text-slate-700">
            Keeping you safer.
          </h3>
          <p>
            Sending payments with PayPal is safer than carrying cash or sharing
            your financial information with the seller. Every eligible
            transaction is protected by advanced encryption and 24/7 fraud
            monitoring.
          </p>
          <button className="hover:underline text-blue-600 font-bold mt-4">
            More about security
          </button>
        </article>
      </section>

      <HiddenCosts />
      <SignUp />
    </>
  );
}
