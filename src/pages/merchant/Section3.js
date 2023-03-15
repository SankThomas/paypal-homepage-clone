import React from "react";

export default function Section3() {
  return (
    <>
      <section
        style={{
          backgroundColor: "#003186",
        }}
        className="py-10 lg:py-20 text-white text-center"
      >
        <h2 className="text-4xl mb-10 font-light lg:text-5xl">
          Better for you and your customers
        </h2>
        <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <article>
            <h3 className="font-light text-3xl mb-4">Customer Support.</h3>
            <p>
              We’re here to help you and your customers with anything, from
              setting up your business account to Seller Protection and queries
              with transactions.
            </p>
          </article>

          <article>
            <h3 className="font-light text-3xl mb-4">
              Quicker and simpler access to funds.
            </h3>
            <p>
              Payments you receive go to your PayPal Balance in moments, and you
              can withdraw funds to your bank account.
            </p>
          </article>

          <article>
            <h3 className="font-light text-3xl mb-4">Sell internationally.</h3>
            <p>
              Accept payments from customers in more than 200 countries and
              markets without the hassle of accepting foreign cards.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
