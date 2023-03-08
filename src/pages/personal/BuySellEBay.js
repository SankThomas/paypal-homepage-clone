import buysell1 from "../../images/personal/buyandsellonebay_browser1.png";
import buysell2 from "../../images/personal/buyandsellonebay_browser2.png";
import buysell3 from "../../images/personal/buyandsellonebay_browser3.png";

export default function BuySellEBay() {
  return (
    <>
      <div className="flex flex-col flex-wrap gap-8 sm:grid sm:grid-cols-2 md:grid-cols-3 mt-10">
        <article>
          <img src={buysell1} alt="" className="mx-auto" />
          <p className="flex items-start mt-4">
            <span className="py-3 px-6 block mr-4 rounded-full border border-slate-500">
              1
            </span>
            Shop around the world, bid on an auction or Buy It Now.
          </p>
        </article>
        <article>
          <img src={buysell2} alt="" className="mx-auto" />
          <p className="flex items-start mt-4">
            <span className="py-3 px-6 block mr-4 rounded-full border border-slate-500">
              2
            </span>
            Pay with a card or PayPal balance.
          </p>
        </article>
        <article>
          <img src={buysell3} alt="" className="mx-auto" />
          <p className="flex items-start mt-4">
            <span className="py-3 px-6 block mr-4 rounded-full border border-slate-500">
              3
            </span>
            Go about your business. Your purchase is on its way.
          </p>
        </article>
      </div>

      <button className="border border-blue-600 text-base py-3 px-40 rounded-full font-bold text-blue-600 block mx-auto mt-10">
        Learn More
      </button>
    </>
  );
}
