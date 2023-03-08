import React from "react";

export default function Section3() {
  return (
    <>
      <div className="radial-gradient py-10 lg:py-20 text-white">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-center mb-8 lg:mb-12 text-2xl font-light lg:text-5xl">
            Make your money go further with PayPal.
          </h2>
        </div>

        <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <article>
            <h3 className="text-xl mb-2">Safer and faster</h3>
            <p className="mb-8">
              Pay online with your PayPal password and skip entering your
              financial information. Plus, rest assured knowing Buyer Protection
              is available for your eligible purchases.
            </p>
            <button className="font-bold">More about security</button>
          </article>
          <article>
            <h3 className="text-xl mb-2">Across devices, worldwide</h3>
            <p className="mb-8">
              With just one account, you can shop at millions of merchants
              around the world, and send money to friends and family almost
              anywhere. Use any of your devices to manage your account on the go
              with the PayPal app.
            </p>
            <button className="font-bold">Get the mobile app</button>
          </article>
          <article>
            <h3 className="text-xl mb-2">Mostly free, always upfront</h3>
            <p className="mb-8">
              It’s free to open a PayPal account and buy something using PayPal
              unless it involves a currency conversion. There are no PayPal fees
              if you use your PayPal balance to send money in your own currency
              to friends and family. There may be fees for other transactions.
            </p>
            <button className="font-bold">More about fees</button>
          </article>
        </div>
      </div>
    </>
  );
}
