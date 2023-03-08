import buyers1 from "../../images/personal/buyonline_browser1.png";
import buyers2 from "../../images/personal/buyonline_browser2.png";
import buyers3 from "../../images/personal/buyonline_browser3.png";

export default function BuyOnline() {
  return (
    <>
      <div className="flex flex-col flex-wrap gap-8 sm:grid sm:grid-cols-2 md:grid-cols-3 mt-10">
        <article>
          <img src={buyers1} alt="" className="mx-auto" />
          <p className="flex items-start mt-4">
            <span className="py-3 px-6 block mr-4 rounded-full border border-slate-500">
              1
            </span>
            Sign up quickly with just a few details.
          </p>
        </article>
        <article>
          <img src={buyers2} alt="" className="mx-auto" />
          <p className="flex items-start mt-4">
            <span className="py-3 px-6 block mr-4 rounded-full border border-slate-500">
              2
            </span>
            Add your card.
          </p>
        </article>
        <article>
          <img src={buyers3} alt="" className="mx-auto" />
          <p className="flex items-start mt-4">
            <span className="py-3 px-6 block mr-4 rounded-full border border-slate-500">
              3
            </span>
            Just use your PayPal login and skip entering your financial
            information every time.
          </p>
        </article>
      </div>

      <button className="border border-blue-600 text-base py-3 px-40 rounded-full font-bold text-blue-600 block mx-auto mt-10">
        Learn More
      </button>
    </>
  );
}
