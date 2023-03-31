import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/login/logo.png";

export default function Login() {
  return (
    <>
      <div className="px-8 py-10 lg:my-20 max-w-lg mx-auto lg:border lg:rounded-lg">
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
            <p className="text-blue-600 font-bold hover:underline my-8 text-lg">
              Forgot email?
            </p>
            <button type="submit" className="btn-blue sm:w-full">
              Next
            </button>
          </form>

          <p className="my-8 text-center text-slate-600">or</p>

          <Link
            to="/sign-up"
            className="border border-blue-600 py-3 px-6 block w-full text-center text-blue-600 font-bold hover:opacity-75 transition-all duration-150 rounded-full"
          >
            Sign Up
          </Link>
        </article>
      </div>
    </>
  );
}
