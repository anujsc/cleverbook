import React from "react";

function Keys() {
    const data=[
        {
            imgage:"https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f63ee54595853ca5e31682_what%20to%20orderr%20(1).svg",
            heading:"What to order",
            para:"Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle."
        },
        {
            imgage:"https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0d2fab2e360025df922a_when%20to%20orderr.svg",
            heading:"When to order",
            para:"Have up-to-date inventory, storage, sales velocity, and demand. Get timely order suggestions so you're never left guessing."
        },
        {
            imgage:"https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0cc629ab7f2d8cb0a8bd_how%20much%20to%20stock.svg",
            heading:"How much to stock",
            para:"Get inventory requirements for every node, for every SKU. So you avoid out-of-stock situations, even during demand spikes."
        },
        {
            imgage:"https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0c2c27cde81ffea6515b_where%20to%20placee.svg",
            heading:"Where to place",
            para:"Our tool suggests how to move stock within your supply chain. So you'll always have products available across cities."
        }

    ]
  return (
    <div className=" h-[80vh] w-full ">
      <div>
        <h1 className="text-[6.8vh] mt-[12vh] text-center font-bold tracking-tight">
          Four key questions answered by Crest
        </h1>
      </div>

      <div className="flex justify-center">
      {data.map((item, index) => (
          <div className=" mt-[9vh]">
          <div className="cards h-[42vh] w-[40vh] rounded-3xl m-6 bg-[#F1E9FC]">
            <img
              className="h-[9vh] translate-x-[4.3vh] translate-y-[3vh]"
              src={item.imgage}
              alt=""
            />
            <div className=" flex flex-col pl-[3.5vh] pt-[5vh]">
              <h1 className=" text-[4vh] font-semibold tracking-tight">
                {item.heading}
              </h1>
              <p className="pt-[1.2vh] ">
                {item.para}
              </p>
            </div>
          </div>
        </div>
        ))}
      </div>

      
    </div>
  );
}

export default Keys;
