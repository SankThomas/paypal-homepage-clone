import React from "react";
import website from "../../images/merchant/on_your_website.png";
import invoice from "../../images/merchant/invoicing.png";

export default function Section2() {
  return (
    <>
      <section className="px-8 py-10 lg:py-20 max-w-6xl mx-auto">
        <h2 className="text-4xl lg:text-5xl mb-10 lg:mb-20 text-slate-800 font-light text-center">
          Get paid however you do business.
        </h2>
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-2">
          <article>
            <img src={website} alt="" className="block mx-auto" />
            <h3 className="text-2xl text-slate-700 my-4 font-light">
              On your website
            </h3>
            <p className="mb-8">
              Accept PayPal and card payments on your website, from using
              checkout buttons to our fully customized online solutions.
            </p>
            <button className="text-blue-600 font-bold hover:underline">
              Get paid on your website
            </button>
          </article>

          <article>
            <img src={invoice} alt="" className="block mx-auto" />
            <h3 className="text-3xl text-slate-700 my-4 font-light">
              With online invoicing
            </h3>
            <p className="mb-8">
              Create and send customized invoices using our free templates.
              Customers can pay easily in just a few clicks.
            </p>
            <button className="text-blue-600 font-bold hover:underline">
              Get paid by invoice
            </button>
          </article>
        </div>
      </section>
    </>
  );
}
