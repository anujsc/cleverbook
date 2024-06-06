import React from "react";

function Samosa() {
  return (
    <div className="h-screen w-full flex ">
      <div className="pl-[16vh] pt-[11vh]">
        <h1 className=" text-[2.7vh] tracking-tighter w-[51%]">
          D2C brands face issues with supply chain management and high growth
          startups are not equipped to run their demand forecast manually. Crest
          automates all the workflows and helps brands predict high demand
          periods and be ready to cater to customer demands. It has a direct
          impact on the revenue readiness of a company and that's the value we
          see Crest unlocking for many companies in the future. Rahul and team
          have built a robust product with years of their experience distilled
          into the workflows.
        </h1>
        <div className="w-[60%] flex justify-between">
          <div className=" flex gap-5 mt-[8vh]">
            <img
              className=" h-[9vh] rounded-full"
              src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/651c00235cd9c2cd10fb1976_Samosa%20Party%20Client%20Image.webp"
              alt=""
            />
            <div className=" mt-1">
              <h1 className=" font-semibold text-[3vh] tracking-tight">
                Diksha Pande
              </h1>
              <h2>Co-founder, Samosa Party</h2>
            </div>
          </div>

          <div>
            <img
              className="h-[11vh] translate-y-[6.3vh] -translate-x-[8vh]"
              src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63a48634ed59555eb9125770_samosa.svg"
              alt=""
            />
          </div>
        </div>

        <div className=" flex gap-5 mt-[4.8vh]">
          <a href="">
            <img
              className=" rotate-180"
              src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5122ea3ebb_slider-arrow.svg"
              alt=""
            />
          </a>
          <a href="">
            <img
              src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5122ea3ebb_slider-arrow.svg"
              alt=""
            />
          </a>
        </div>

        <div className="flex gap-[5.8vh] mt-[12vh]">
            <div className=" h-[18vh] w-[33vh] rounded-3xl bg-[#F1E9FC]">
                <h1 className=" pt-3 bg-clip-text text-transparent bg-gradient-to-r from-[salmon] to-[mediumpurple] text-[5.5vh] font-semibold text-center">upto 95%</h1>
                <p className=" text-[2.3vh] tracking-wide text-center  leading-[3vh]">Demand Fulfilment</p>
            </div>
            <div className=" h-[18vh] w-[33vh] rounded-3xl bg-[#F1E9FC]">
                <h1 className=" pt-3 bg-clip-text text-transparent bg-gradient-to-r from-[salmon] to-[mediumpurple] text-[5.5vh] font-semibold text-center">3%</h1>
                <p className=" text-[2.3vh] tracking-wide text-center  leading-[3vh]">Daily Stock-out</p>
            </div>
            <div className=" h-[18vh] w-[33vh] rounded-3xl bg-[#F1E9FC]">
                <h1 className=" pt-8 bg-clip-text text-transparent bg-gradient-to-r from-[salmon] to-[mediumpurple] text-[3vh] font-semibold text-center">Read More</h1>
                
            </div>
        </div>
      </div>
      <div className=" h-[84vh] w-[59vh]  border border-10px bg-[#D17FAE] absolute translate-x-[135vh] translate-y-[7vh] ">
        <img className="img-1 " src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/664ddc11c29c3652662f0739_samosa%20party%20image.webp" alt="" />
      </div>
    </div>
  );
}

export default Samosa;


