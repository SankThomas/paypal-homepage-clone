import React, { useState } from "react";
import BuyOnline from "./BuyOnline";
import BuySellEBay from "./BuySellEBay";
import RequestPayments from "./RequestPayments";
import SendPayments from "./SendPayments";

const data = [
  {
    component: <BuyOnline />,
    button: "Buy Online",
  },
  {
    component: <SendPayments />,
    button: "Send Payments",
  },
  {
    component: <RequestPayments />,
    button: "Request Payments",
  },
  {
    component: <BuySellEBay />,
    button: "Buy and Sell on eBay",
  },
];

export default function Section2() {
  const [items] = useState(data);
  const [value, setValue] = useState(0);

  const { component } = items[value];

  return (
    <>
      <div className="max-w-6xl mx-auto pb-10 lg:pb-20">
        <h2 className="text-center mb-8 text-2xl font-light lg:text-5xl lg:mb-16 text-slate-700">
          Join the 192M active accounts worldwide who use PayPal to
        </h2>

        <ul className="flex flex-wrap items-center justify-center">
          {items.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => setValue(index)}
                className={`py-2 px-8 border-b-2 border-gray-400 hover:text-blue-400 transition-all duration-150 ${
                  index === value && "active"
                }`}
              >
                {item.button}
              </button>
            </li>
          ))}
        </ul>

        <div className="px-8">{component}</div>
      </div>
    </>
  );
}
