import React from "react";
import BottomNav from "../auth/BottomNav";
import { Link } from "react-router-dom";
import NavBarAuth from "../auth/NavBarAuth";

function FAQ() {
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
            <p className="text-2xl font-bold uppercase">FAQ</p>
          </div>

          <div className="text-left max-[600px]:text-center mt-8">
            <h3 className="text-blue-600 font-bold">What is Whale Hub DZ?</h3>
            <div className="pl-8 mt-4 max-[600px]:pl-0 ">
              <p>
                Whale Hub DZ is an investment company officially registered on
                the Tokyo Stock Exchange. The priority direction of
                Whale Hub DZ is the investment in securities of small
                enterprises in Japan. Due to high rates of mobility and
                performance of small firms, as well as the competitive advantage
                of manufactured products in the Asian and global markets,
                shareholders in the short period of time have the opportunity to
                get a stable high profit.
              </p>
            </div>
          </div>

          <div className="text-left max-[600px]:text-center mt-8">
            <h3 className="text-blue-600 font-bold">
              How can I become a member of the investment company
              Whale Hub DZ?
            </h3>
            <div className="pl-8 mt-4 max-[600px]:pl-0 ">
              <p>
                To become a member of the company Whale Hub DZ, you need to go
                through a simple registration procedure on the website. After
                that, in your account you will have access to all functions of
                the participants. Now you can create a deposit on any of the
                four presented plans, each of which has its advantages.
              </p>
            </div>
          </div>

          <div className="text-left max-[600px]:text-center mt-8">
            <h3 className="text-blue-600 font-bold">
              Are there any age restrictions for participants?
            </h3>
            <div className="pl-8 mt-4 max-[600px]:pl-0 ">
              <p>
                Yes, project participants may be only adult persons aged 18 and
                older.
              </p>
            </div>
          </div>

          <div className="text-left max-[600px]:text-center mt-8">
            <h3 className="text-blue-600 font-bold">
              Is it possible, in consequence, change entered information during
              the registration?
            </h3>
            <div className="pl-8 mt-4 max-[600px]:pl-0 ">
              <p>
                Be careful when filling out the registration form, check before
                confirming the entered information. Some data for security
                purposes can not be changed. In an emergency situation, please
                contact support via the feedback form on the "Contact Us" form
                or online consultant.
              </p>
            </div>
          </div>

          <div className="text-left max-[600px]:text-center mt-8">
            <h3 className="text-blue-600 font-bold">
              Can I register more than one account?
            </h3>
            <div className="pl-8 mt-4 max-[600px]:pl-0 ">
              <p>
                You can create multiple accounts, but they should not overlap
                with each other the referral links. In case of such violations
                all the accounts of the user will be blocked.
              </p>
            </div>
          </div>

          <div className="text-left max-[600px]:text-center mt-8">
            <h3 className="text-blue-600 font-bold">
              What should I do if I forgot my password?
            </h3>
            <div className="pl-8 mt-4 max-[600px]:pl-0 ">
              <p>
                To recover your password, use the option "Recover Password" or
                contact technical support via the feedback form on the "Contact
                Us" form or on-line consultant.{" "}
              </p>
            </div>
          </div>

          <div className="text-left max-[600px]:text-center mt-8">
            <h3 className="text-blue-600 font-bold">
              What payment systems are available on the site?
            </h3>
            <div className="pl-8 mt-4 max-[600px]:pl-0 ">
              <p>
                At the moment, investments are available through payment systems
                such as Perfect Money, Payeer, Bitcoin. If you do not have an
                electronic account, you can access it for free, by following the
                links: perfectmoney.is, blockchain.info, payeer.com.
              </p>{" "}
            </div>
          </div>

          <div className="text-left max-[600px]:text-center mt-8">
            <h3 className="text-blue-600 font-bold">
              What is the minimum amount for deposit and withdrawal?
            </h3>
            <div className="pl-8 mt-4 max-[600px]:pl-0 ">
              <p>
                For the first plan, the minimum amount of investment is $10 for
                Perfect Money, Payeer ? Bitcoin. Bitcoin is fixed at $250 for 1
                BTC (When investing in Bitcoin, in the amount enter equivalent
                in USD). Due to the fact that the project offers a choice of
                four investment plans, the minimum amount in other investment
                plans differ in a big way. A complete answer to this question
                can be found on the page "Investment plans". The minimum amount
                for the creation of request for withdrawal is absent ( for
                Bitcoin the minimum withdrawal amount is 0.001 BTC ).
              </p>{" "}
            </div>
          </div>

          <div className="text-left max-[600px]:text-center mt-8">
            <h3 className="text-blue-600 font-bold">
              When will I receive my first earnings?
            </h3>
            <div className="pl-8 mt-4 max-[600px]:pl-0 ">
              <p>
                All depends on the investment plan. On the first two plans
                "Accumulative" and "Accumulative+" you can receive income in 24
                hours. On the third plan you will get your first profit on the
                ninth day, and the twice amount of the deposit on the 17th day.
                The fourth plan involves doubling the contribution within 14
                calendar days. All the details and description of plans can be
                found on the page "Investment plans".
              </p>{" "}
            </div>
          </div>

          <div className="text-left max-[600px]:text-center mt-8">
            <h3 className="text-blue-600 font-bold">
              Can I create multiple deposits?
            </h3>
            <div className="pl-8 mt-4 max-[600px]:pl-0 ">
              <p>
                Yes, you can create an unlimited number of deposits on any of
                the plans presented. Every deposit is formed by a separate
                contribution. For convenience of the diversification of
                contributions you can make deposits on various investment plans.
              </p>{" "}
            </div>
          </div>

          <div className="text-left max-[600px]:text-center mt-8">
            <h3 className="text-blue-600 font-bold">
              I have made a withdrawal request, when will it be done?
            </h3>
            <div className="pl-8 mt-4 max-[600px]:pl-0 ">
              <p>
                All requests for withdrawal of funds to personal accounts of
                participants processed and confirmed within minutes. In
                emergencies there may be delays of up to 24 hours. These delays
                may be associated with the work of payment systems, work which
                we can not influence.{" "}
              </p>{" "}
            </div>
          </div>

          <div className="text-left max-[600px]:text-center mt-8">
            <h3 className="text-blue-600 font-bold">
              Are there any hidden commissions for payments or withdrawal?
            </h3>
            <div className="pl-8 mt-4 max-[600px]:pl-0 ">
              <p>
                Enter removal or other operations with deposits and bonuses are
                no commissions. We are not responsible for fees payment systems
                through which you make contributions. As a rule, the amount they
                are regulated and described on the website of each of the
                submitted payment systems.
              </p>{" "}
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}

export default FAQ;
