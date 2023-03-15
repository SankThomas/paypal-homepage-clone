import React from "react";
import mobileApps from "../images/mobileapps/mobileapps.png";

export default function MobileApps() {
  return (
    <>
      <section className="mobile-apps mb-40">
        <div className="max-w-6xl mx-auto grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center py-10 lg:pb-0 px-8 text-center lg:text-left">
          <article className="text-white">
            <h1 className="text-4xl lg:text-5xl mb-4 font-light">
              Tap into your money.
            </h1>
            <p>
              Send payments to almost anywhere in the world in seconds. Manage
              the ways you send and spend at a glance. It’s all here.
            </p>
          </article>

          <article>
            <img src={mobileApps} alt="" className="block mx-auto lg:-mb-40" />
          </article>
        </div>
      </section>
    </>
  );
}
