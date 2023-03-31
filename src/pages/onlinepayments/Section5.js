import React from "react";
import icon1 from "../../images/onlinepayments/Icon1.png";
import icon2 from "../../images/onlinepayments/Icon2.png";
import icon3 from "../../images/onlinepayments/Icon3.png";

export default function Section5() {
  return (
    <>
      <section className="px-8 py-10 lg:py-20 max-w-6xl mx-auto">
        <h2 className="text-center mb-10 lg:mb-16 text-3xl lg:text-5xl text-slate-800 font-light">
          Offer your customers an experience they love.
        </h2>

        <div className="text-center grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <article>
            <img src={icon1} alt="" className="block mx-auto mb-4" />
            <h3 className="text-slate-700 text-2xl lg:text-3xl mb-6 font-light">
              Quicker checkout
            </h3>
            <p className="text-slate-600">
              They don't need to retype their credit card details every time
              they shop.
            </p>
          </article>
          <article>
            <img src={icon2} alt="" className="block mx-auto mb-4" />
            <h3 className="text-slate-700 text-2xl lg:text-3xl mb-6 font-light">
              Accept International Payments
            </h3>
            <p className="text-slate-600">
              They can choose to pay in any of the 25 currencies accepted.
            </p>
          </article>
          <article>
            <img src={icon3} alt="" className="block mx-auto mb-4" />
            <h3 className="text-slate-700 text-2xl lg:text-3xl mb-6 font-light">
              Increase Conversion Rates
            </h3>
            <p className="text-slate-600">
              They see the PayPal logo as a sign of trust. 34% of online buyers
              wouldn't buy on a website if PayPal wasn’t there.*
            </p>
          </article>
        </div>

        <p className="text-center text-sm mt-8 text-slate-600">
          * Research conducted by NorthStar in Q4 2013. Based on a sample of 6
          large online retailers selected for inclusion and representing 2,802
          recent buyers. Sample is not necessarily representative of the large
          online retailer marketplace as a whole
        </p>
      </section>
    </>
  );
}
