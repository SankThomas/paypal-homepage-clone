import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    isOpen && setIsOpen(false);
  };

  return (
    <>
      <header className="radial-gradient px-8 py-6 lg:py-10 flex gap-8 items-center justify-between">
        <div>
          <Link to="/">
            <img
              src="https://www.paypalobjects.com/webstatic/i/logo/rebrand/ppcom-white.svg"
              alt=""
              className="w-40"
            />
          </Link>
        </div>

        <nav
          className={`navbar ${isOpen && "open"} 
          lg:flex lg:justify-between lg:gap-8 lg:pt-32
          `}
        >
          <div className="mt-10 lg:mt-0">
            <p className="uppercase font-bold text-xl mb-4 lg:mb-0 title">
              Personal
            </p>

            <ul className="flex flex-col gap-3 links">
              <li>
                <Link
                  to="/personal"
                  onClick={handleLinkClick}
                  className="flex flex-col hover:underline"
                >
                  How PayPal Works{" "}
                  <span>What you can do with a personal account</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/pay-online"
                  onClick={handleLinkClick}
                  className="flex flex-col hover:underline"
                >
                  Pay Online <span>Online payments without borders</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/send-money-online"
                  onClick={handleLinkClick}
                  className="flex flex-col hover:underline"
                >
                  Send Payments <span>Send payments locally or abroad</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/requesting-payments"
                  onClick={handleLinkClick}
                  className="flex flex-col hover:underline"
                >
                  Get Paid <span>Request payments from almost anyone</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/mobile-apps"
                  onClick={handleLinkClick}
                  className="flex flex-col hover:underline"
                >
                  Get the PayPal app{" "}
                  <span>Manage your account on your mobile</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/shopping"
                  onClick={handleLinkClick}
                  className="flex flex-col hover:underline"
                >
                  Search for Deals <span>Pay with PayPal and save money</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-8 lg:mt-0">
            <p className="uppercase font-bold text-xl mb-4 lg:mb-0 title">
              Business
            </p>

            <ul className="flex flex-col gap-3 links">
              <li>
                <Link
                  to="/merchant"
                  onClick={handleLinkClick}
                  className="flex flex-col hover:underline"
                >
                  All Business Solutions
                  <span>See our range of products</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/accept-payments-online"
                  onClick={handleLinkClick}
                  className="flex flex-col hover:underline"
                >
                  Accept online payments <span>Get paid on your website</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/email-invoice"
                  onClick={handleLinkClick}
                  className="flex flex-col hover:underline"
                >
                  Send invoices <span>Create and email online invoices</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/freelancers"
                  onClick={handleLinkClick}
                  className="flex flex-col hover:underline"
                >
                  PayPal for freelancers{" "}
                  <span>Grow your freelance business</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-8 lg:mt-0">
            <Link
              to="/partners-and-developers"
              className="uppercase font-bold text-xl mb-4"
              onClick={handleLinkClick}
            >
              Partners and Developers
            </Link>
          </div>
        </nav>

        <div className="hidden lg:block">
          <ul className="flex items-center justify-center gap-2">
            <li>
              <Link
                to="login"
                className="border border-white text-white font-bold text-sm py-1 px-4 rounded-full hover:opacity-75"
              >
                Log In
              </Link>
            </li>
            <li>
              <Link
                to="sign-up"
                className="bg-white text-slate-800 font-bold text-sm py-1 px-4 rounded-full hover:opacity-75"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 uppercase text-sm text-white tracking-wide hover:opacity-75"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </header>
    </>
  );
}
