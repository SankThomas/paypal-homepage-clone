import React from "react";
import SignUp from "../components/homepage/SignUp";

export default function Section6() {
  return (
    <>
      <section className="payonline-hero merchant-hero-two">
        <div className="max-w-6xl mx-auto overlay flex justify-center flex-col text-center lg:text-left px-8">
          <article className="max-w-xl">
            <h2 className="text-white text-4xl lg:text-5xl mb-8 font-light">
              Working as a freelancer?
            </h2>
            <p className="text-white mb-4 lg:text-lg">
              Enjoy more freedom while getting paid on time.
            </p>
            <ul className="list-disc text-white pl-5 mb-8">
              <li>More secure way to get paid</li>
              <li>An easier and faster way to receive payments</li>
            </ul>
            <button className="font-bold text-white hover:underline">
              Learn more
            </button>
          </article>
        </div>
      </section>

      <SignUp />
    </>
  );
}
