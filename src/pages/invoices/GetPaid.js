import React from "react";

export default function GetPaid() {
  return (
    <>
      <section className="radial-gradient py-10 lg:py-20 px-8">
        <article className="text-center">
          <h2 className="text-white font-light text-4xl lg:text-5xl mb-10">
            Get paid by invoice today.
          </h2>

          <ul>
            <li className="mb-4">
              <button className="py-2 px-6 rounded-full border border-white font-bold text-white">
                Sign Up Now
              </button>
            </li>
            <li>
              <button className="py-2 px-6 rounded-full font-bold hover:underline text-white">
                Contact us
              </button>
            </li>
          </ul>
        </article>
      </section>

      <section className="bg-slate-100 mb-20 py-10 lg:py-20 px-8 text-center">
        <article className="max-w-6xl mx-auto">
          <h2 className="text-slate-800 font-light text-4xl lg:text-5xl mb-10">
            Looking for another solution?
          </h2>
          <p className="mb-4 lg:text-lg">
            Want to accept payments on your website?
          </p>
          <button className="text-blue-600 hover:underline font-bold lg:text-lg">
            Explore online solutions
          </button>
        </article>
      </section>
    </>
  );
}
