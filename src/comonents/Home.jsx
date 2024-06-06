import { color, easeIn, motion } from "framer-motion";
import { easeInOut } from "framer-motion/dom";
import React from "react";
import Nav from "./Nav";

function Home() {
  return (
    <>
      <Nav />

      <div className="h-[105vh] w-full bg-[#151218] rounded-br-[10.8vh] ">
        <div className="text-white flex flex-col p-32 pt-[28vh]">
          <h1 className="text-[10vh] font-semibold tracking-tighter leading-[12vh]">
            Every order
          </h1>
          <h1 className="text-[10vh] font-semibold tracking-tighter ">
            fullfilled,{" "}
            <span className="ontime bg-clip-text text-transparent bg-gradient-to-r from-[salmon] to-[mediumpurple]">
              on time.
            </span>
          </h1>
          <p className="w-[54%] mt-8 text-[2.3vh] tracking-wider">
            Eliminate overstocking and under-stocking with Crest. Built by
            supply-chain experts, it brings the same technology used by large
            global brands to power fast-growing startups. In short, we make
            supply meet demand, and then help you grow both.
          </p>
        </div>

        <div className="buttomNarrow gap-3 ml-[18vh] -translate-y-20 flex">
          <div>
            <button className="bg-clip-text text-transparent bg-gradient-to-r from-[salmon] to-[mediumpurple] text-white px-6 tracking-wide  py-2   border-[#D17FAE] border-[.5vh] rounded-3xl  ">
              Get started with Crest
            </button>
          </div>
          <img className="mt-[2vh]"
            src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63d1777671aadb7b8492b5f9_hero-home-cta%20right%20to%20left.svg"
            alt=""
          />
        </div>

        <div className=" over"> 
        <img className=" h-[100%]  -translate-y-[100vh] translate-x-[172vh] absolute scale-[0.9] " src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d3e24ea3f00_homengg.svg" alt="" />

          <img className="-translate-y-[81vh] translate-x-[124.8vh] absolute scale-[0.9] " src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d648dea3f01_Hero%20Image.svg" alt="" />
        </div>
        
      </div>
      <div className="h-[16vh]  -rotate-[2.2deg] -translate-y-[5.6vh] bg-[#151218] rounded-br-[18vh] rounded-bl-[18vh]">

      </div>
      
    </>
  );
}

export default Home;
