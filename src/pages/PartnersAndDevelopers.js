import React from "react";
import paypal from "../images/partners/paypal.jpg";

export default function PartnersAndDevelopers() {
  return (
    <>
      <section className="payonline-hero partners-hero">
        <div className="overlay flex items-center justify-center text-white px-8">
          <article className="text-center">
            <h1 className="text-4xl lg:text-5xl mb-4 font-light">
              All you need for an optimal integration.
            </h1>
            <p className="text-lg lg:text-xl">
              Whether you're a developer, partner or merchant - you've come to
              the right place.
            </p>
          </article>
        </div>
      </section>

      <div className="bg-slate-100 py-6 px-8">
        <ul className="flex items-end justify-end gap-6 max-w-6xl mx-auto">
          <li>
            <a href="#developers">Developers</a>
          </li>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#merchants">Merchants</a>
          </li>
        </ul>
      </div>
      <section id="developers" className="px-8 py-10 lg:py-20 text-center">
        <h2 className="text-slate-800 text-4xl lg:text-5xl mb-10 font-light">
          Explore our resources for developers.
        </h2>
        <p className="lg:text-lg">
          Whether it's SDKs or APIs you're looking for, we have developer
          resources for PayPal to help you get started.
        </p>

        <ul className="flex items-center justify-center gap-3 mt-8">
          <li>
            <img src={paypal} alt="" className="block mx-auto" />
          </li>
          <li>For online commerce integrations, check out PayPal Developer.</li>
        </ul>
      </section>

      <section
        style={{
          backgroundColor: "#013187",
        }}
        id="products"
        className="py-10 lg:py-20 px-8 text-white text-center"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl mb-10 font-light">
            Discover the advantages of partnership.
          </h2>
          <p className="lg:text-lg mb-6">
            Our Partner Program gives you access to expert advice, marketing
            exposure and resources to create innovative payment experiences for
            your customers.
          </p>
          <button className="font-bold hover:underline">
            See where the Partner Program is offered
          </button>
        </div>
      </section>

      <section id="merchants" className="py-10 lg:py-20 px-8 text-center mb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-slate-800 text-4xl lg:text-5xl mb-10 font-light">
            Find a partner to integrate PayPal on your website.
          </h2>
          <p className="lg:text-lg mb-6">
            Our partners provide a host of solutions which are simple to use,
            easy to manage and can be up and running quickly.
          </p>
          <button>
            Questions?{" "}
            <span className="font-bold hover:underline text-blue-600">
              Our sales and support experts are here to help
            </span>
          </button>
        </div>
      </section>
    </>
  );
}
