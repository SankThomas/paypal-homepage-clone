import requestMoney1 from "../../images/personal/requestmoney_browser1.png";
import requestMoney2 from "../../images/personal/requestmoney_browser2.png";
import requestMoney3 from "../../images/personal/requestmoney_browser3.png";

export default function RequestPayments() {
  return (
    <>
      <div className="flex flex-col flex-wrap gap-8 sm:grid sm:grid-cols-2 md:grid-cols-3 mt-10">
        <article>
          <img src={requestMoney1} alt="" className="mx-auto" />
          <p className="flex items-start mt-4">
            <span className="py-3 px-6 block mr-4 rounded-full border border-slate-500">
              1
            </span>
            Enter an email address, specify an amount, and select a currency.
          </p>
        </article>
        <article>
          <img src={requestMoney2} alt="" className="mx-auto" />
          <p className="flex items-start mt-4">
            <span className="py-3 px-6 block mr-4 rounded-full border border-slate-500">
              2
            </span>
            Add a note to personalize the request.
          </p>
        </article>
        <article>
          <img src={requestMoney3} alt="" className="mx-auto" />
          <p className="flex items-start mt-4">
            <span className="py-3 px-6 block mr-4 rounded-full border border-slate-500">
              3
            </span>
            See the payment within moments in your account when it’s paid. You
            can use it to shop online or withdraw it to your bank account.
          </p>
        </article>
      </div>

      <button className="border border-blue-600 text-base py-3 px-40 rounded-full font-bold text-blue-600 block mx-auto mt-10">
        Learn More
      </button>
    </>
  );
}
