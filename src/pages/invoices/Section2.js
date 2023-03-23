import React from "react";
import device from "../../images/invoices/device.png";
import logo from "../../images/invoices/logo.png";

export default function Section2() {
  return (
    <>
      <section className="max-w-6xl mx-auto pb-10 lg:pb-20 px-8">
        <div className="-mt-20 lg:-mt-40">
          <img
            src={device}
            alt="Accept local and international payments"
            className="lg:w-2/3 lg:block lg:mx-auto"
          />
        </div>

        <div className="my-10 lg:my-20 max-w-4xl mx-auto">
          <h2 className="text-slate-800 text-3xl lg:text-4xl mb-6 font-light text-center">
            Accept local and international payments.
          </h2>
          <p className="mb-10 text-center max-w-2xl mx-auto lg:text-lg">
            PayPal is accepted in over 200 countries and markets and our invoice
            templates are available in over 15 languages, giving you the choice
            to sell almost anywhere.
          </p>
          <img src={logo} alt="" />
        </div>

        <div>
          <h2 className="text-slate-800 text-3xl lg:text-4xl mb-6 font-light text-center">
            Four reasons to invoice with PayPal.
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <article>
              <h3 className="text-slate-800 mb-4 text-lg">
                Choice of payment method
              </h3>
              <p>
                Let your customers pay you via PayPal or cards. The payments get
                into your PayPal account within minutes. No integration
                required, you don’t even need a website.
              </p>
            </article>

            <article>
              <h3 className="text-slate-800 mb-4 text-lg">
                Straightforward, protected transactions
              </h3>
              <p>
                The PayPal checkout button is embedded into all your email
                invoices. Your customers can pay you in a couple of clicks,
                whether or not they have a PayPal account.
              </p>
            </article>

            <article>
              <h3 className="text-slate-800 mb-4 text-lg">
                Free invoice templates
              </h3>
              <p>
                Choose one of our professional, pre-defined templates, add your
                logo and tailor the invoice layout to suit your business. Send
                unlimited invoices, with up to 5 attachments.
              </p>
            </article>

            <article>
              <h3 className="text-slate-800 mb-4 text-lg">
                Easy tracking and management
              </h3>
              <p>
                Manage all your payments and funds from one PayPal business
                account. Keep track of your invoice history and other PayPal
                transactions. View any unpaid invoices and send out reminders.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
