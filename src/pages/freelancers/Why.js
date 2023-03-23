import React from "react";
import icon1 from "../../images/freelancers/icon1.png";
import icon2 from "../../images/freelancers/icon2.png";
import icon3 from "../../images/freelancers/icon3.png";
import icon4 from "../../images/freelancers/icon4.png";

export default function Why() {
  return (
    <>
      <section className="py-10 lg:py-20 px-8 bg-slate-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-slate-800 text-4xl lg:text-5xl font-light mb-10 lg:mb-16 text-center">
            Why freelancers use PayPal
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mb-10">
            <article>
              <img src={icon1} alt="" className="block mx-auto mb-6" />
              <h3 className="text-xl mb-4 text-slate-800">
                Get paid by international customers
              </h3>
              <p>
                Over 300 million people around the world use PayPal. Accept
                payments from them in up to 25 currencies.
              </p>
            </article>

            <article>
              <img src={icon2} alt="" className="block mx-auto mb-6" />
              <h3 className="text-xl mb-4 text-slate-800">
                Receive money simply and more securely
              </h3>
              <p>
                You can create a PayPal account in a few minutes and start
                receiving money straightaway. You don’t even need a bank
                account.
              </p>
            </article>

            <article>
              <img src={icon3} alt="" className="block mx-auto mb-6" />
              <h3 className="text-xl mb-4 text-slate-800">
                Access your funds faster
              </h3>
              <p>
                Payments reach your PayPal account in seconds, and you can
                withdraw them to your M-PESA account.
              </p>
            </article>

            <article>
              <img src={icon4} alt="" className="block mx-auto mb-6" />
              <h3 className="text-xl mb-4 text-slate-800">
                Accept payments with peace of mind
              </h3>
              <p>
                With our Seller Protection, you can be protected against
                unauthorized transactions, including intangible items, such as
                services.
              </p>
            </article>
          </div>

          <div className="text-center">
            <button className="btn-blue">Sign Up Now</button>
          </div>
        </div>
      </section>
    </>
  );
}
