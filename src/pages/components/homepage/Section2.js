import React, { useState } from "react";
import { section2 } from "../../../data/data";

export default function Section2() {
  const [cards] = useState(section2);

  return (
    <>
      <div className="text-center px-8 py-6 bg-slate-100 text-lg lg:text-xl text-slate-700 flex flex-col md:flex-row items-center gap-4 justify-center">
        Looking for PayPal for your business or freelance needs?{" "}
        <button className="border-2 border-blue-600 text-base px-3 py-1 rounded-full">
          Explore Business Solutions
        </button>
      </div>

      <section className="px-8 py-10 lg:py-20">
        <h2 className="text-center mb-8 text-2xl font-light lg:text-5xl lg:mb-16 text-slate-700">
          PayPal is for everyone who pays or gets paid.
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 max-w-6xl mx-auto text-center">
          {cards.map((card, index) => (
            <article key={index}>
              <img src={card.image} alt="" className="mx-auto" />
              <h4 className="text-lg my-6 text-slate-700">{card.title}</h4>
              <p className="mb-6">{card.desc}</p>
              <button className="border border-blue-600 text-base p-3 rounded-full w-full font-bold text-blue-600">
                {card.button}
              </button>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
