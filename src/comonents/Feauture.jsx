import React from "react";

function Feauture() {
  return (
    <div className="h-full w-full mt-[5vh] ">
      <h1 className=" text-center text-[6vh] font-bold tracking-wide ">
        Things your spreadsheet wishes it could do
      </h1>
      <div className="1 overflow-hidden">
        <div className="pt-[16vh] w-[39%]  pl-[16vh]">
          <a href="">
            <h1 className=" text-[3.5vh] font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[salmon] to-[mediumpurple] ">
              Accurate Demand forecasting
            </h1>
            <p className="  mt-[2vh]">
              Dynamically predict future demand across all channels, with high
              accuracy and lowest granularity. Crest takes into account what
              traditional forecasts don't: trends, real-time market signals,
              promotional activities, and even logistics disruptions.{" "}
            </p>
            <div className="flex gap-2 mt-[2vh] hover:gap-4 transition-all ">
              <h1 className=" tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[salmon] to-[mediumpurple]">
                Learn More{" "}
              </h1>
              <img
                className=" h-[1.4vh] translate-y-2   "
                src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63ff3b3e4dc16be9322e8817_right%20arrow.svg"
                alt=""
              />
            </div>
          </a>
        </div>

        <div>
          <hr className=" w-[35%] mt-11 translate-x-[16vh]" />
          <h1 className=" mt-4 font-semibold text-[4vh] translate-x-[16vh]">
            HELIX: Workflow Automation
          </h1>
          <hr className=" w-[35%] mt-5 translate-x-[16vh]" />
          <h1 className=" mt-4 font-semibold text-[4vh] translate-x-[16vh]">
            Automated Purchase Planning
          </h1>
          <hr className=" w-[35%] mt-5 translate-x-[16vh]" />
          <h1 className=" mt-4 font-semibold text-[4vh] translate-x-[16vh]">
            Automated Distribution Planning
          </h1>
          <hr className=" w-[35%] mt-5 translate-x-[16vh]" />
          <h1 className=" mt-4 font-semibold text-[4vh] translate-x-[16vh]">
            Easy Integration
          </h1>
          <hr className=" w-[35%] mt-5 translate-x-[16vh]" />
          <h1 className=" mt-4 font-semibold text-[4vh] translate-x-[16vh]">
            Custom Dashboards
          </h1>
          <hr className=" w-[35%] mt-5 translate-x-[16vh]" />
          <h1 className=" mt-4 font-semibold text-[4vh] translate-x-[16vh]">
            HELIX: Workflow Automation
          </h1>
          <hr className=" w-[35%] mt-5 translate-x-[16vh]" />
        </div>
        <div className=" bg-gradient-to-br from-[#f38c80]  to-[#9578ce] absolute  h-[105vh] w-[110vh] rounded-3xl bg-slate-500 translate-x-[104vh] -translate-y-[105vh] ">
          <img
            className="img-2"
            src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f64bb2507621d0bf7da369_Demand%20forecasting-p-800.webp"
            alt=""
          />
        </div>
      </div>

      <div className="text-center">
        <button className=" px-4 py-2 mb-[15vh] tracking-tight font-medium border-[3px] mt-20 rounded-full border-[#D17FAE] bg-clip-text text-transparent bg-gradient-to-r from-[salmon] to-[mediumpurple] ">
          View all features
        </button>
      </div>
    </div>
  );
}

export default Feauture;
