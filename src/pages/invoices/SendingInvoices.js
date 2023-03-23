import React from "react";
import icon1 from "../../images/invoices/icon1.png";
import icon2 from "../../images/invoices/icon2.png";
import icon3 from "../../images/invoices/icon3.png";

export default function SendingInvoices() {
  return (
    <>
      <section className="py-10 lg:py-20 max-w-6xl mx-auto px-8">
        <h2 className="text-4xl lg:text-5xl mb-10 lg:mb-16 text-center text-slate-800 font-light">
          How to start sending invoices with PayPal.
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <article>
            <img src={icon1} alt="" className="block mx-auto" />
            <ul className="mt-6">
              <li className="flex items-start gap-3">
                <span className="py-2 px-4 rounded-full border border-slate-600">
                  1
                </span>{" "}
                Sign up for a PayPal business account.
              </li>
            </ul>
          </article>

          <article>
            <img src={icon2} alt="" className="block mx-auto" />
            <ul className="mt-6">
              <li className="flex items-start gap-3">
                <span className="py-2 px-4 rounded-full border border-slate-600">
                  2
                </span>{" "}
                Select and customize an invoice template via your PayPal
                account.
              </li>
            </ul>
          </article>

          <article>
            <img src={icon3} alt="" className="block mx-auto" />
            <ul className="mt-6">
              <li className="flex items-start gap-3">
                <span className="py-2 px-4 rounded-full border border-slate-600">
                  3
                </span>{" "}
                Email the invoice to your customers.
              </li>
            </ul>
          </article>
        </div>
      </section>
    </>
  );
}
