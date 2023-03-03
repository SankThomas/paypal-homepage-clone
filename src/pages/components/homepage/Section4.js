import React, { useState } from "react";
import buyers1 from "../../../images/homepage/buyonline_browser1.png";
import buyers2 from "../../../images/homepage/buyonline_browser2.png";
import buyers3 from "../../../images/homepage/buyonline_browser3.png";
import sellers1 from "../../../images/homepage/For_Sellers_1.png";
import sellers2 from "../../../images/homepage/For_Sellers_2.png";
import sellers3 from "../../../images/homepage/For_Sellers_3.png";

export default function Section4() {
  const [value, setValue] = useState(true);

  return (
    <>
      <div className="max-w-6xl mx-auto px-8 py-10 lg:py-20">
        <h2 className="text-center mb-8 text-2xl font-light lg:text-5xl lg:mb-16 text-slate-700">
          PayPal connects buyers and sellers.
        </h2>

        <ul className="flex items-center justify-center">
          <li>
            <button
              onClick={() => setValue(true)}
              className={`py-2 px-8 hover:text-blue-400 transition-all duration-150 ${
                value && "text-blue-600 font-bold border-b-2 border-blue-600"
              }`}
            >
              For buyers
            </button>
          </li>
          <li>
            <button
              onClick={() => setValue(false)}
              className={`py-2 px-8 hover:text-blue-400 transition-all duration-150 ${
                !value && "text-blue-600 font-bold border-b-2 border-blue-600"
              }`}
            >
              For sellers
            </button>
          </li>
        </ul>

        {value && <Buyers />}

        {!value && <Sellers />}
      </div>
    </>
  );
}

function Buyers() {
  return (
    <>
      <div className="flex flex-col flex-wrap gap-8 sm:grid sm:grid-cols-2 md:grid-cols-3 mt-10">
        <article>
          <img src={buyers1} alt="" className="mx-auto" />
          <p className="flex items-start mt-4">
            <span className="py-3 px-6 block mr-4 rounded-full border border-slate-500">
              1
            </span>
            Sign up with just an email address and password.
          </p>
        </article>
        <article>
          <img src={buyers2} alt="" className="mx-auto" />
          <p className="flex items-start mt-4">
            <span className="py-3 px-6 block mr-4 rounded-full border border-slate-500">
              2
            </span>
            Securely add your cards.
          </p>
        </article>
        <article>
          <img src={buyers3} alt="" className="mx-auto" />
          <p className="flex items-start mt-4">
            <span className="py-3 px-6 block mr-4 rounded-full border border-slate-500">
              3
            </span>
            Use the PayPal button to check out with just an email address and
            password.
          </p>
        </article>
      </div>

      <button className="border border-blue-600 text-base py-3 px-40 rounded-full font-bold text-blue-600 block mx-auto mt-10">
        Learn More
      </button>
    </>
  );
}

function Sellers() {
  return (
    <>
      <div className="flex flex-col flex-wrap gap-8 sm:grid sm:grid-cols-2 md:grid-cols-3 mt-10">
        <article>
          <img src={sellers1} alt="" className="mx-auto" />
          <p className="flex items-start mt-4">
            <span className="py-3 px-6 block mr-4 rounded-full border border-slate-500">
              1
            </span>
            Set up a business account.
          </p>
        </article>
        <article>
          <img src={sellers2} alt="" className="mx-auto" />
          <p className="flex items-start mt-4">
            <span className="py-3 px-6 block mr-4 rounded-full border border-slate-500">
              2
            </span>
            Choose the features you want to start with. You can go back, change
            or add to them later.
          </p>
        </article>
        <article>
          <img src={sellers3} alt="" className="mx-auto" />
          <p className="flex items-start mt-4">
            <span className="py-3 px-6 block mr-4 rounded-full border border-slate-500">
              3
            </span>
            Integrate PayPal via a partner, a developer or by yourself.
          </p>
        </article>
      </div>

      <button className="border border-blue-600 text-base py-3 px-40 rounded-full font-bold text-blue-600 block mx-auto mt-10">
        Learn More
      </button>
    </>
  );
}
