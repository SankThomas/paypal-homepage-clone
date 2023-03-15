import React from "react";
import checkmark from "../../images/onlinepayments/Check_sign.png";

export default function Checkout() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-8 py-10 lg:py-20 overflow-auto md:overflow-hidden">
        <h2 className="text-center mb-10 text-3xl lg:text-5xl text-slate-800 font-light">
          PayPal Checkout
        </h2>

        <div className="grid grid-cols-2 w-screen md:w-auto">
          <article className="zebra">
            <ul className="text-slate-600 font-bold">
              <li className="p-2">PayPal, cards</li>
              <li className="p-2">Advanced technical skills required</li>
              <li className="p-2">Integration via shopping carts</li>
              <li className="p-2">Integration via shopping carts</li>
              <li className="p-2">Built-in fraud protection</li>
              <li className="p-2">Customizable checkout</li>
              <li className="p-2">Non-PayPal users can pay you?</li>
              <li className="p-2">Monthly fees</li>
              <li className="p-2"></li>
            </ul>
          </article>

          <article className="zebra text-center outline outline-offset-8 outline-1 outline-slate-400">
            <ul className="text-slate-600 font-bold">
              <li className="p-2">PayPal only</li>
              <li className="p-2">
                <img src={checkmark} alt="" className="block mx-auto" />
              </li>
              <li className="p-2">
                <img src={checkmark} alt="" className="block mx-auto" />
              </li>
              <li className="p-2">API</li>
              <li className="p-2">
                <img src={checkmark} alt="" className="block mx-auto" />
              </li>
              <li className="p-2">
                <img src={checkmark} alt="" className="block mx-auto" />
              </li>
              <li className="p-2"></li>
              <li className="p-2">No</li>
              <li className="p-2">
                <button className="text-blue-600 hover:underline font-bold">
                  Learn more
                </button>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </>
  );
}
