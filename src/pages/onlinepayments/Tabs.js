import React, { useState } from "react";
import { payments } from "../../data/data";
import icon from "../../images/onlinepayments/Arrow_active.png";

export default function Tabs() {
  const [items] = useState(payments);
  const [value, setValue] = useState(0);

  const { image } = items[value];

  return (
    <>
      <section
        style={{
          backgroundColor: "#003087",
        }}
        className="py-10 lg:py-20"
      >
        <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
          <article>
            <h2 className="text-center lg:text-left mb-10 text-3xl lg:text-5xl text-white font-light">
              How it works
            </h2>

            <ul className="font-bold flex flex-col flex-wrap gap-4">
              {items.map((item, index) => (
                <li
                  key={index}
                  onClick={() => setValue(index)}
                  className={`${
                    index !== value && "text-slate-400"
                  } text-white cursor-pointer flex items-center gap-4`}
                >
                  <span className="py-2 px-4 rounded-full border border-white">
                    {index + 1}
                  </span>{" "}
                  {item.desc}{" "}
                  <span>
                    <img src={icon} alt="" />
                  </span>
                </li>
              ))}
            </ul>
          </article>

          <article>
            <img src={image} alt="" className="mx-auto block" />
          </article>
        </div>
      </section>
    </>
  );
}
