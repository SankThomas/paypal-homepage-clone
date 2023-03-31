import React from "react";
import logo from "../../images/login/logo.png";

export default function BusinessAccount() {
  return (
    <>
      <div className="px-8 py-10 lg:my-20 max-w-lg mx-auto">
        <article>
          <img src={logo} alt="" className="block mx-auto w-20" />
        </article>

        <h2 className="text-3xl lg:text-4xl my-8 text-slate-700 font-light">
          Sign up for a Business account
        </h2>

        <article className="mt-10">
          <form>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email or mobile number"
              required
              className="border-2 border-slate-300 py-4 px-2 placeholder-slate-600 text-slate-800 focus:border-blue-600 focus:ring-8 focus:ring-blue-200 w-full rounded outline-none text-lg"
            />

            <button type="submit" className="btn-blue sm:w-full mt-8">
              Continue
            </button>
          </form>
        </article>
      </div>
    </>
  );
}
