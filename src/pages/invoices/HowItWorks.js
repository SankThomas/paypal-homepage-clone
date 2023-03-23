import React, { useState } from "react";
import { howItWorks } from "../../data/data";

export default function HowItWorks() {
  const [cards] = useState(howItWorks);
  const [value, setValue] = useState(0);

  const { image } = cards[value];

  return (
    <>
      <section className="radial-gradient py-10 lg:py-20 px-8">
        <h2 className="max-w-6xl mx-auto text-white text-4xl lg:text-5xl mb-8 lg:mb-16 font-light">
          How it works for your customers.
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-2">
          <ul className="flex flex-col items-start gap-6 text-white">
            {cards.map((card, index) => (
              <li
                key={index}
                onClick={() => setValue(index)}
                className={`flex items-start gap-3 lg:text-lg cursor-pointer ${
                  value === index && "font-bold"
                }`}
              >
                <span className="py-2 lg:py-3 px-4 lg:px-6 rounded-full border border-white">
                  {index + 1}
                </span>{" "}
                {card.desc}
              </li>
            ))}
          </ul>

          <article>
            <img src={image} alt="" className="block mx-auto lg:w-9/12" />
          </article>
        </div>
      </section>
    </>
  );
}
