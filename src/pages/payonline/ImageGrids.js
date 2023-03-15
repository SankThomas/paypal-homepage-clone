import React from "react";
import phonevisa from "../../images/payonline/buy_onwebsites_n2_1x.jpg";
import phonebuyers from "../../images/payonline/buy_onwebsites_n3_lvc_1x.jpg";

export default function ImageGrids() {
  return (
    <>
      <section className="imagegrid-hero">
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

      <section className="grid grid-cols-1 gap-8 py-10 lg:py-20 px-8 text-center lg:text-left lg:grid-cols-2 lg:items-center max-w-6xl mx-auto">
        <article>
          <h3 className="mb-6 text-2xl lg:text-4xl font-light text-slate-700">
            Ways to Pay.
          </h3>
          <p>
            Add a card to your PayPal account, and simply login with your email
            address and password whenever you're buying something online.
          </p>
        </article>

        <article>
          <img src={phonevisa} alt="" className="block mx-auto" />
        </article>
      </section>

      <section
        style={{
          backgroundColor: "#003186",
        }}
        className="py-20 px-8"
      >
        <h2 className="max-w-5xl mx-auto text-2xl lg:text-5xl font-light text-white">
          "I'm not worried about my payment security anymore, even when I shop
          abroad or on websites I don’t know."
        </h2>
      </section>

      <section className="grid grid-cols-1 gap-8 py-10 lg:py-20 px-8 text-center lg:text-left lg:grid-cols-2 lg:items-center max-w-6xl mx-auto">
        <article>
          <img src={phonebuyers} alt="" className="block mx-auto" />
        </article>

        <article>
          <h3 className="mb-6 text-2xl lg:text-4xl font-light text-slate-700">
            Buyers never beware.
          </h3>
          <p>
            Shop with peace of mind, your eligible purchase is protected by us.
            If it doesn’t show up, or shows up different than described, we’ll
            help sort things out with the seller. Conditions apply.
          </p>
          <button className="hover:underline text-blue-600 font-bold mt-4">
            More about PayPal Buyer Protection
          </button>
        </article>
      </section>

      <section className="imagegrid-hero imagegrid-hero-two">
        <div className="overlay flex items-center justify-start max-w-6xl mx-auto px-8 text-center lg:text-left">
          <article>
            <h3 className="mb-6 text-2xl lg:text-4xl font-light text-white">
              Hold all the cards.
            </h3>
            <p className="lg:w-1/2 text-white">
              When you use your cards to shop with PayPal they work just the
              same, but you don't have to enter the details every time. Just add
              a card to your account and pay faster and more securely from your
              computer or mobile.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
