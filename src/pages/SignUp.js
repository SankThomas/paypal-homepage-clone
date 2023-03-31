import { Link } from "react-router-dom";
import socials from "../images/signup/socials.jpg";

export default function SignUp() {
  return (
    <>
      <section className="py-10 lg:py-20 px-8 max-w-6xl mx-auto lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
        <article className="hidden lg:block border-r border-slate-400 pr-8">
          <img src={socials} alt="" />
          <h1 className="text-4xl lg:text-5xl mt-8 font-light text-slate-800">
            See for yourself why millions of people love PayPal.
          </h1>
        </article>

        <article>
          <h2 className="text-xl pb-4 border-b border-slate-600 text-slate-700 lg:hidden">
            See for yourself why millions of people love PayPal.
          </h2>

          <h2 className="text-xl pb-4 mt-4 text-slate-700">
            Sign up for PayPal, it's free.
          </h2>

          <h4 className="text-slate-800 mb-4 font-bold">
            Choose from 2 types of accounts:
          </h4>
          <ul className="flex flex-col gap-8">
            <li>
              <Link
                to="/personal-account"
                className="flex flex-col gap-2 font-bold text-slate-700 text-xl hover:text-blue-600 transition-all duration-150"
              >
                Personal Account
                <span className="text-base">
                  Shop in your country and around the world from your computer
                  or on your mobile - all without sharing your financial info
                  with the sellers.
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/business-account"
                className="flex flex-col gap-2 font-bold text-slate-700 text-xl hover:text-blue-600 transition-all duration-150"
              >
                Business Account
                <span className="text-base">
                  Accept payments and send invoices to your customers. It’s
                  easier and more secure to sell to anyone, anywhere, and any
                  time.
                </span>
              </Link>
            </li>
          </ul>
        </article>
      </section>
    </>
  );
}
