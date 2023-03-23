import React from "react";

export default function GetStarted() {
  return (
    <>
      <section
        style={{
          backgroundColor: "#00CF92",
        }}
        className="py-10 lg:py-20 px-8 text-center mb-20"
      >
        <h2 className="text-white font-light mb-8 text-4xl lg:text-5xl">
          Ready to get started?
        </h2>
        <button className="border-2 border-white rounded-full py-2 px-16 text-white text-lg lg:text-xl">
          Sign Up Now
        </button>
      </section>
    </>
  );
}
