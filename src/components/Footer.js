import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="max-w-6xl mx-auto px-8">
        <ul className="text-slate-700 font-bold flex flex-col items-center justify-start gap-4 md:flex-row">
          <li>Help and Contact</li>
          <li>Fees</li>
          <li>Security</li>
          <li>Features</li>
          <li>Shop</li>
          <li>Feedback</li>
        </ul>

        <br />
        <hr />
        <br />

        <div className="md:flex md:items-center md:justify-between">
          <ul className="text-slate-700 flex flex-col items-center justify-start gap-4 md:flex-row">
            <li>About</li>
            <li>Newsroom</li>
            <li>Jobs</li>
            <li>Developers</li>
            <li>Partners</li>
          </ul>

          <br />

          <ul className="text-slate-700 flex flex-col items-center justify-start gap-4 md:flex-row">
            <li>&copy; 1999 - 2023</li>
            <li>Accessibility</li>
            <li>Privacy</li>
            <li>Legal</li>
          </ul>
        </div>

        <p className="text-slate-600 text-sm my-6">
          PayPal Pte. Ltd. (“3PL”) has applied for a license under the Singapore
          Payment Services Act (“PS Act”) with the Monetary Authority of
          Singapore. During this statutory transitional period, 3PL is operating
          under an exemption from holding a license and is allowed to continue
          to provide specific payment services.
        </p>
      </footer>
    </>
  );
}
