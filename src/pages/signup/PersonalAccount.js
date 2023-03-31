import React from "react";
import logo from "../../images/login/logo.png";

export default function PersonalAccount() {
  return (
    <>
      <div className="px-8 py-10 lg:my-20 max-w-lg mx-auto">
        <article>
          <img src={logo} alt="" className="block mx-auto w-20" />
        </article>

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
            <p className="text-sm text-slate-700 my-8">
              By continuing, you confirm that you’re the owner or primary user
              of this mobile phone number. You agree to receive automated texts
              to confirm your phone number. Message and data rates may apply.
            </p>
            <button type="submit" className="btn-blue sm:w-full">
              Next
            </button>
          </form>
        </article>
      </div>
    </>
  );
}
