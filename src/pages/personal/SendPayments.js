import sendpayments1 from "../../images/personal/sendpayments_browser1.png";
import sendpayments2 from "../../images/personal/sendpayments_browser2.png";
import sendpayments3 from "../../images/personal/sendpayments_browser3.png";

export default function SendPayments() {
  return (
    <>
      <div className="flex flex-col flex-wrap gap-8 sm:grid sm:grid-cols-2 md:grid-cols-3 mt-10">
        <article>
          <img src={sendpayments1} alt="" className="mx-auto" />
          <p className="flex items-start mt-4">
            <span className="py-3 px-6 block mr-4 rounded-full border border-slate-500">
              1
            </span>
            Enter your seller email address.
          </p>
        </article>
        <article>
          <img src={sendpayments2} alt="" className="mx-auto" />
          <p className="flex items-start mt-4">
            <span className="py-3 px-6 block mr-4 rounded-full border border-slate-500">
              2
            </span>
            Enter an amount, select the currency, and send your payment more
            securely.
          </p>
        </article>
        <article>
          <img src={sendpayments3} alt="" className="mx-auto" />
          <p className="flex items-start mt-4">
            <span className="py-3 px-6 block mr-4 rounded-full border border-slate-500">
              3
            </span>
            We’ll notify the seller. They’ll just need to set up a PayPal
            account if they don’t have one.
          </p>
        </article>
      </div>

      <button className="border border-blue-600 text-base py-3 px-40 rounded-full font-bold text-blue-600 block mx-auto mt-10">
        Learn More
      </button>
    </>
  );
}
