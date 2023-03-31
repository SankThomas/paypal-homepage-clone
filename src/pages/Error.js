import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <>
      <section>
        <article
          style={{
            backgroundColor: "#333333",
          }}
          className="text-white text-center py-20 px-8"
        >
          <h1 className="text-4xl lg:text-7xl font-light mb-2">
            Something's not right.
          </h1>
          <p>That page doesn't exist.</p>
        </article>

        <article className="py-20 text-center px-8">
          <p className="mb-8">We can’t find a page with the url you entered.</p>
          <Link to="/" className="text-blue-600 font-bold hover:underline">
            Back to Civilization
          </Link>
        </article>
      </section>
    </>
  );
}
