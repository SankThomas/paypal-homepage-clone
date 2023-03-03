import React from "react";

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div
          className="flex flex-col items-center justify-center text-center px-8 sm:max-w-4xl sm:mx-auto"
          style={{
            height: "500px",
          }}
        >
          <h1 className="heading">
            MOVE YOUR MONEY AROUND THE WORLD WITH M-PESA AND PAYPAL
          </h1>
          <p className="my-6 text-white text-lg">
            Just link your M-PESA and PayPal accounts and enjoy a world of
            possibilities.
          </p>
          <button className="btn-blue">Link Accounts</button>
        </div>
      </section>
    </>
  );
}
