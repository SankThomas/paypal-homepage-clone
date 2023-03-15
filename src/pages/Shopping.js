import React from "react";
import shield from "../images/shopping/pp-blue-icon.png";
import credit from "../images/shopping/credit-blue-icon.png";
import facebook from "../images/shopping/facebook.png";
import twitter from "../images/shopping/twitter_2.png";
import youtube from "../images/shopping/You_tube_3.png";
import instagram from "../images/shopping/instagram_5.png";

export default function Shopping() {
  return (
    <>
      <section className="px-8 py-10 lg:py-20 max-w-6xl mx-auto">
        <h2 className="text-4xl lg:text-5xl mb-10 lg:mb-20 text-slate-800 font-light text-center">
          PayPal is a better way to pay
        </h2>
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-2">
          <article>
            <img src={shield} alt="" className="block mx-auto" />
            <h3 className="text-2xl text-slate-700 mb-4 font-light">
              Buyer Protection
            </h3>
            <p className="mb-8">
              Shop confidently - if an eligible item you've bought doesn’t match
              the seller description, we can reimburse you.
            </p>
            <button className="text-blue-600 font-bold hover:underline">
              Learn more
            </button>
          </article>

          <article>
            <img src={credit} alt="" className="block mx-auto" />
            <h3 className="text-3xl text-slate-700 mb-4 font-light">
              Spread the cost
            </h3>
            <p className="mb-8">
              With PayPal Credit you can buy the things you want now and get
              more time to pay.**
            </p>
            <button className="text-blue-600 font-bold hover:underline">
              Learn more
            </button>
            <small className="block mt-4">
              ** Subject to status. See terms for more details.
            </small>
          </article>
        </div>
      </section>

      <section className="radial-gradient px-8 py-10 lg:py-20">
        <h2 className="text-4xl lg:text-5xl mb-10 text-white font-light text-center">
          Not a PayPal member yet?
        </h2>
        <p className="text-white lg:text-xl text-center">
          PayPal is a more secure, simple way to shop – and it’s free to sign
          up.
        </p>
        <button className="block mx-auto mt-10 bg-white text-slate-800 font-bold hover:animate-pulse py-3 px-32 rounded-full">
          Sign Up
        </button>
      </section>

      <section className="px-8 py-10 lg:py-20 bg-slate-100 mb-20">
        <h2 className="text-4xl lg:text-5xl mb-10 lg:mb-20 text-slate-800 font-light text-center">
          Stay up to date
        </h2>

        <ul className="flex items-center justify-center flex-wrap gap-16">
          <li>
            <img src={facebook} alt="" />
          </li>
          <li>
            <img src={twitter} alt="" />
          </li>
          <li>
            <img src={youtube} alt="" />
          </li>
          <li>
            <img src={instagram} alt="" />
          </li>
        </ul>
      </section>
    </>
  );
}
