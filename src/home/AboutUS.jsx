import React from "react";
import BottomNav from "../auth/BottomNav";
import { Link } from "react-router-dom";
import NavBarAuth from "../auth/NavBarAuth";
import logo from "./img/0_1_1694457176539.png";

function AboutUS() {
  return (
    <div className="bg-gray-100 flex-1 rounded-2xl">
      <NavBarAuth />

      <div
        className="absolute top-24 left-32 
      max-[600px]:left-0 
      max-[600px]:hidden
      "
      >
        <Link
          to={"/aboutus"}
          className="p-10 text-black uppercase duration-300
          max-[600px]:p-1 
          "
        >
          About US
        </Link>
        <Link
          to={"/plans"}
          className="p-10 text-black uppercase duration-300   max-[600px]:p-1"
        >
          INVESTMENT PLANS
        </Link>

        <Link className="p-10 text-black uppercase duration-300   max-[600px]:p-1">
          rate US
        </Link>
        <Link
          to={"/support"}
          className="p-10 text-black uppercase duration-300   max-[600px]:p-1"
        >
          support
        </Link>
        <Link className="p-10 text-black uppercase duration-300   max-[600px]:p-1">
          faq
        </Link>
      </div>

      {/* ///////////// */}
      <div
        className=" flex-1 flex  mt-36  px-20

    max-[600px]:px-0
    "
      >
        <div className="p-8 ">
          <div className="border-b border-white p-5">
            <p className="text-2xl font-bold uppercase">about us</p>
          </div>

          <div
            className=" 
            flex flex-col justify-start items-start text-left
          "
          >
            <p className="m-5">WHALE HUB DZ investment project.</p>
            <p className="m-5">
              How does the WHALE HUB DZ project work? It involves forex trading
              in foreign currencies, central currencies like the Euro and the
              Dollar, as well as cryptocurrencies.
            </p>
            <p className="m-2 mx-5">
              Is it legitimate to work in this field? It is a form of currency
              trade and exchange, similar to any exchange between currencies but
              in an electronic format that has evolved over time.
            </p>
            <p className="m-2 mx-5 text-xl font-bold">
              Subscription Rules for this Project
            </p>
            <p className="m-2 mx-5">
              Firstly, you must have the ability, knowledge, and willingness to
              profit and accept losses, as any business involves both profit and
              loss. We do not provide any guarantees regarding capital because
              we are exposed to a maximum 25% loss, and if we incur losses, we
              have a loss fund ✓.
            </p>
            <p className="m-2 mx-5">
              An amount of $5,000 or more requires a notarized acknowledgment of
              debt.
            </p>
            <p className="m-2 mx-5">
              Face-to-face transactions are available in Algiers and Bouira for
              amounts exceeding $1,000.
            </p>
            <p className="m-2 mx-5">
              An office for the company will be available soon.
            </p>
            <p className="m-2 mx-5">
              Secondly, you must have an electronic wallet or a mobile postal
              account to deposit and receive your profits directly into your
              wallet on a weekly basis. You will receive it only from the
              project manager, and we will facilitate payment in Algerian Dinars
              every 15 days for some investors .
            </p>
            <p className="m-2 mx-5">
              The minimum subscription amount in the WHALE HUB DZ project is
              $50.
            </p>
            <p className="m-2 mx-5"> Trading days are 5 days a week, 7/5.</p>
            <p className="m-2 mx-5">
              Profit distribution will take place on Saturdays only in USDT
              (Tether) and in Algerian Dinars through the Algerian Post CCP.
            </p>
            <p className="m-2 mx-5">
              Thursday, Friday, and Saturday are designated for deposits.
            </p>

            <p className="m-2 mx-5">
              Weekly profit percentages range from 5% to 30%.
            </p>

            <p className="m-2 mx-5">
              Weekly profits are divided as follows according to the packages:
            </p>
            <div className="flex flex-col">
              <p className="m-2 mx-10">
                {" "}
                - $100 to $999: Investor 65%, Company 35%
              </p>
              <p className="m-2 mx-10">
                {" "}
                - $1,000 to $4,999: Investor 70%, Company 30%
              </p>
              <p className="m-2 mx-10">
                {" "}
                - $5,000 to $49,999: Investor 75%, Company 25%
              </p>
              <p className="m-2 mx-10">
                - $50,000 and above: Investor 80%, Company 20%
              </p>
            </div>

            <p className="m-2  text-xl max-[600px]:text-lg font-bold">
              {" "}
              - Contract duration options:
            </p>
            <div className="flex flex-col ">
              <p className="m-2 mx-10">- 1 month</p>
              <p className="m-2 mx-10">- 6 months</p>
              <p className="m-2 mx-10">- 12 months</p>
            </div>
            <p className="m-2 mx-5">
               Profit percentages are announced on Friday evening and are
              disclosed to all project investors in the public group.
            </p>
            <p className="m-2 mx-5">
               Referrals are available only for your direct members through
              the platform.
            </p>
            <p className="m-2 mx-5">
               The platform is reliable and has a good security system that is
              not easily breached. It is the third Algerian investment platform
              for forex and cryptocurrency trading.
            </p>
            <p className="m-2 mx-5">
               Anyone wishing to participate in the project should contact the
              project manager to avoid cases of fraud and deception. All
              deposits are made through the platform, and those who do not know
              how to proceed should contact the group administrator.
            </p>
            <p className="m-2 mx-5">
               How to deposit and subscribe to the project through the
              platform and complete the procedures with the project manager and
              fill out the form.
            </p>
            <p className="m-2 mx-5">
               When can an investor withdraw from the project? Every investor
              has the right to withdraw after one month from the date of their
              subscription.
            </p>
            <p className="m-2 mx-5">
              The project is supervised by the best Algerian forex and crypto
              traders.
            </p>
            <p className="m-2 mx-5">
               The project duration, dear brothers and sisters, is long-term.
            </p>
            <p className="m-2 mx-5">With all respect and appreciation to everyone...</p>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}

export default AboutUS;
