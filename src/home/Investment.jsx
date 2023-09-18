import React from "react";
import NavBarAuth from "../auth/NavBarAuth";
import { Link } from "react-router-dom";
import BottomNav from "../auth/BottomNav";

function Investment() {
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
          className="p-10 text-black uppercase duration-300
            max-[600px]:p-1 
            "
        >
          About US
        </Link>
        <Link 
        to={"/plans"}
        className="p-10 text-black uppercase duration-300   max-[600px]:p-1">
          INVESTMENT PLANS
        </Link>

        <Link className="p-10 text-black uppercase duration-300   max-[600px]:p-1">
          rate US
        </Link>
        <Link
        to={"/support"}
        className="p-10 text-black uppercase duration-300   max-[600px]:p-1">
          support
        </Link>
        <Link className="p-10 text-black uppercase duration-300   max-[600px]:p-1">
          faq
        </Link>
      </div>

      {/* ///////////// */}
      <div className=" flex-1 flex  mt-36  px-20
 
      max-[600px]:px-0
      ">
        <div className="p-8 ">
          <div className="border-b border-white p-5">
            <p className="text-2xl font-bold">INVESTMENT PLANS</p>
          </div>

          <div className="text-left max-[600px]:text-center mt-8 mb-8">
            <p>
             <span className="text-transparent max-[600px]:hidden">----</span> The Whale Hub DZ Company offers investors a profitable
              partnership. Partners of our program receive a stable income. Each
              will be rewarded for their contribution to the development of the
              company and know-how technology of Japan.
            </p>
          </div>
          <div className="text-left max-[600px]:text-center">
            <p>
            <span className="text-transparent max-[600px]:hidden">----</span>
            The investment portfolio in our company means investing into one of the four proposed plans.


            </p>
          </div>



          {/* tables  */}


          <div className="max-[600px]:overflow-x-scroll mt-10
          w-full
          max-[600px]:w-64
          ">
          <ul className={`flex 
          min-[601px]:justify-center           min-[601px]:items-center
          `}>
                <li className="border mr-2 bg-blue-500 text-white ">
                  <div className="text-xs border-b p-4
                  max-[600px]:text-xs
                  "> BEGINNER PLAN</div>
                  <div
                    className="flex justify-center flex-col p-4 bg-white text-blue-900 font-bold
                  text-opacity-100 mx-1
                  " 
                  >
                    <span className="text-2xl     max-[600px]:text-xs">
                      40<span className="text-xl font-bold  max-[600px]:text-xs ">%</span> - 60
                      <span className="text-xl font-bold  max-[600px]:text-xs ">%</span>
                    </span>
                    <div className="flex justify-between p-4   text-base max-[600px]:text-xs">
                      <span className="mr-4 max-[600px]:mr-0">Company</span>
                      <span>Investor</span>
                    </div>
                  </div>

                  <div className="flex justify-between text-xl p-4  px-12 border-b 
                 
                  ">
                    <span>50$</span>-<span>999$</span>
                  </div>
                  <div className="font-bold p-4">DURATION : 7 DAYS</div>
                </li>




                <li className="border mr-2 bg-blue-500 text-white">
                  <div className="text-xs border-b p-4
                  max-[600px]:text-xs
                  ">TRAINEES PLAN</div>
                  <div
                    className="flex justify-center flex-col p-4 bg-white text-blue-900 font-bold
                  text-opacity-100 mx-1
                  " 
                  >
                    <span className="text-2xl     max-[600px]:text-xs">
                      30<span className="text-xl font-bold  max-[600px]:text-xs  ">%</span> - 70
                      <span className="text-xl font-bold  max-[600px]:text-xs  ">%</span>
                    </span>
                    <div className="flex justify-between p-4   text-base max-[600px]:text-xs">
                      <span>Company</span>
                      <span>Investor</span>
                    </div>
                  </div>

                  <div className="flex justify-between text-xl p-4  px-12 border-b 
                 
                  ">
                    <span>100$</span> - <span>4999$</span>
                  </div>
                  <div className="font-bold p-4">DURATION : 7 DAYS</div>
                </li>


              
                <li className="border mr-2 bg-blue-500 text-white">
                  <div className="text-xs border-b p-4
                  max-[600px]:text-xs
                  ">WORKER PLAN</div>
                  <div
                    className="flex justify-center flex-col p-4 bg-white text-blue-900 font-bold
                  text-opacity-100 mx-1
                  " 
                  >
                    <span className="text-2xl     max-[600px]:text-xs">
                      20<span className="text-xl font-bold  max-[600px]:text-xs  ">%</span> - 80
                      <span className="text-xl font-bold  max-[600px]:text-xs  ">%</span>
                    </span>
                    <div className="flex justify-between p-4   text-base max-[600px]:text-xs">
                      <span>Company</span>
                      <span>Investor</span>
                    </div>
                  </div>

                  <div className="flex justify-between text-xl p-4  px-12 border-b 
                 
                  ">
                    <span>5000$</span> - <span>49999$</span>
                  </div>
                  <div className="font-bold p-4">DURATION : 7 DAYS</div>
                </li>

           


                <li className="border mr-2 bg-blue-500 text-white">
                  <div className="text-xs border-b p-4
                  max-[600px]:text-xs
                  ">                    PROFESSIONALS PLAN</div>
                  <div
                    className="flex justify-center flex-col p-4 bg-white text-blue-900 font-bold
                  text-opacity-100 mx-1
                  " 
                  >
                    <span className="text-2xl     max-[600px]:text-xs">
                      10<span className="text-xl font-bold  max-[600px]:text-xs ">%</span> - 90
                      <span className="text-xl font-bold  max-[600px]:text-xs ">%</span>
                    </span>
                    <div className="flex justify-between p-4   text-base max-[600px]:text-xs">
                      <span>Company</span>
                      <span>Investor</span>
                    </div>
                  </div>

                  <div className="flex justify-between text-xl p-4  px-12 border-b 
                 
                  ">
                     over Then 50000$
                  </div>
                  <div className="font-bold p-4 ">DURATION : 7 DAYS</div>
                </li>


          
              </ul>
          </div>
{/* ////////////////////////// */}


          <div className="text-left max-[600px]:text-center mt-8 mb-8">
            <p>
             <span className="text-transparent max-[600px]:hidden">----</span> You can use the proposed plan "Beginner", where the investor will receive the stated interest dividends every week, with the possibility of withdrawal of the contribution of the body at any time, on the expiration of 7 days.


            </p>
          </div>
          <div className="text-left max-[600px]:text-center">
            <p>
            <span className="text-transparent max-[600px]:hidden">----</span>
            Also, if you want to get more profit from investing in our company, you should pay attention to the plans "trainees" and "worker" and "professionals", according to which the investor will receive 2 times more amount contributed at the end of the declared period of the deposit.


            </p>
          </div>

          <div className="text-left max-[600px]:text-center mt-8 mb-8">
            <p>
            <span className="text-transparent max-[600px]:hidden">----</span>
            The Whale Hub DZ company provides an affiliate program to attract new investors. You get 8% of deposits your invited partners,.


            </p>
          </div>
          <div className="text-left max-[600px]:text-center mt-8 mb-8">
            <p>
            <span className="text-transparent max-[600px]:hidden">----</span>
            For ease of use all the necessary payment systems are connected to our service.


            </p>
          </div>
{/* The dzforextrading company provides an affiliate program to attract new investors. You get 8% of deposits your invited partners,.
For ease of use all the necessary payment systems are connected to our service.
 */}

          {/* ///////////////////// */}

        </div>
   
      </div>

      <BottomNav />



    </div>
  );
}

export default Investment;
