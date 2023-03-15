import React from "react";
import laptop from "../../images/merchant/laptop_ie_lux.png";

export default function Section4() {
  return (
    <>
      <section className="py-10 lg:py-32 px-8">
        <h2 className="text-4xl lg:text-5xl text-center font-light mb-10 text-slate-700">
          Get started with PayPal.
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
          <article>
            <img src={laptop} alt="" className="block mx-auto" />
          </article>

          <article>
            <ul className="flex flex-col gap-8">
              <li className="flex items-center gap-3">
                <span className="py-3 px-5 border border-slate-700 rounded-full">
                  1
                </span>
                Set up a business account.
              </li>
              <li className="flex items-center gap-3">
                <span className="py-3 px-5 border border-slate-700 rounded-full">
                  2
                </span>
                Choose the features you want to start with. You can go back,
                change or add to them later.
              </li>
              <li className="flex items-center gap-3">
                <span className="py-3 px-5 border border-slate-700 rounded-full">
                  3
                </span>
                Integrate PayPal via a partner, a developer or by yourself.
              </li>
            </ul>
          </article>
        </div>
      </section>
    </>
  );
}
