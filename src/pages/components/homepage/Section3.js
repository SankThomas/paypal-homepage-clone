import React from "react";

export default function Section3() {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <article
          style={{
            backgroundColor: "#FD9502",
          }}
          className="text-white py-10 px-8 flex-1"
        >
          <div className="md:max-w-xl ml-auto">
            <h3 className="text-2xl lg:text-4xl mb-2">
              Withdraw money directly to Equity Bank Account
            </h3>
            <p className="mb-8">
              You can now withdraw your PayPal balance to your Equity Bank
              account seamlessly by accessing Equity Online and Equity Mobile
              App. What's more, this option is exclusive to Equity Bank
              customers and funds will be withdrawn within 24 hours.
            </p>
            <button>Learn more here</button>
          </div>
        </article>

        <article
          style={{
            backgroundColor: "#DD0060",
          }}
          className="text-white py-10 px-8 flex-1"
        >
          <div className="md:max-w-xl mr-auto">
            <h3 className="text-2xl lg:text-4xl mb-2">
              Withdraw money from PayPal to M-PESA
            </h3>
            <p className="mb-8">
              You can easily withdraw your money to your M-PESA account, and use
              it whenever, wherever you like.
            </p>
            <button>Link your PayPal and M-PESA Accounts</button>
          </div>
        </article>
      </div>
    </>
  );
}
