import { color, easeIn, motion } from "framer-motion";
import { easeInOut } from "framer-motion/dom";
import React from 'react'


function Nav() {
  return (

   <div className="">
    
   <div className="h-[11vh] w-full flex justify-around pt-6 absolute   ">
    <div className=" ">
      <img
        className="h-8 w-full  "
        src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63d8262cbfe9e806aca29403_Crest%20white%20font%20small.png"
        alt=""
      />
    </div>

    <div>
      <div className=" flex gap-7 text-white font-['Sans serif'] tracking-tighter ">
        {[
          "Products",
          "Pricing",
          "Industry",
          "Customer Stories",
          "About",
          "Blog",
        ].map((item, index) => (
          <a className={"font-normal text-[2.3vh]  "} href="">
            {item}
          </a>
        ))}
      </div>
    </div>

    <div className="text-white -translate-y-2  ">
      <div className="flex gap-9">
        <motion.button
          whileHover={{ color: "white", transition: ( 0.95, 0.05, 0.795, 0.035 ) }}
          className="text-[#D17FAE] "
        >
          Login
        </motion.button>
        <button className=" bg-gradient-to-r from-[salmon] to-[mediumpurple] hover:from-[mediumpurple] hover:to-[salmon] hover:text-black rounded-3xl px-[3vh] py-[1.5vh]">
          Talk to Us
        </button>
      </div>
    </div>
  </div>
   </div>


    
  )
}

export default Nav