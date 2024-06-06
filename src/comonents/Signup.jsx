import React from "react";

function Signup() {
  return (
    <div className="h-screen w-full bg-black flex justify-center items-center text-white rounded-t-[7vh] ">
      <div className="hlw flex flex-col items-center justify-center h-[70vh] w-[175vh] rounded-3xl bg-slate-700">
        <h1 className=" text-[6.4vh] font-semibold tracking-wider">
          You can grow faster than you think!
        </h1>
        <p className="mt-[8vh]">
          Plan with Crest to fulfil your demand today, and dreams tomorrow. We
          bring the methods and
        </p>
        <p>
          technologies of large global companies to help brands of all sizes
          scale
        </p>
        <div className="mt-[4vh]">
          <button className=" px-5 py-3 bg-black rounded-full text-white font-medium ">
            Get started with Crest
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
