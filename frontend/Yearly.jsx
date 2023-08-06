import React from "react";

function Yearly() {
  return (
    <div className="flex flex-col bg-white items-center w-[70vw] p-12 gap-6 rounded-md">
      <div className="font-semibold text-xl my-3">
        Choose the right plan for you
      </div>
      <div className="w-full">
        <div className="flex justify-between items-center">
          <div className="flex bg-[#1F4D90] rounded-full gap-2 px-4 py-1 h-[5vh] items-center text-white text-xs pl-8">
            <a href="monthly">Monthly</a>
            <div className="bg-white px-2 py-2 rounded-full text-[#1F4D90] hover:cursor-pointer font-bold">
              <p>Yearly</p>
            </div>
          </div>
          <div className="flex justify-evenly w-[50%] text-center">
            <div className="bg-[#7994BD] py-10 px-4 text-white w-24 rounded-sm">
              <p>Mobile</p>
            </div>
            <div className="bg-[#1F4D90] py-10 px-4 text-white w-24 rounded-sm">
              <p>Basic</p>
            </div>
            <div className="bg-[#7994BD] py-10 px-4 text-white w-24 rounded-sm">
              <p>Standard</p>
            </div>
            <div className="bg-[#7994BD] py-10 px-4 text-white w-24 rounded-sm">
              <p>Premium</p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 my-6 text-sm">
          <div className="flex justify-between">
            <div>
              <p>Monthly price</p>
            </div>
            <div className="flex justify-evenly text-center w-[50%]">
              <p className="w-24">$1000</p>
              <p className="w-24 text-[#1F4D90] font-semibold">$2000</p>
              <p className="w-24">$5000</p>
              <p className="w-24">$7000</p>
            </div>
          </div>
          <div className="bg-gray-300 w-full h-[1px]" />
          <div className="flex justify-between">
            <div>
              <p>Video Quality</p>
            </div>
            <div className="flex justify-evenly text-center w-[50%]">
              <p className="w-24">Good</p>
              <p className="w-24 text-[#1F4D90] font-semibold">Good</p>
              <p className="w-24">Better</p>
              <p className="w-24">Best</p>
            </div>
          </div>
          <div className="bg-gray-300 w-full h-[1px]" />
          <div className="flex justify-between">
            <div>
              <p>Resolution</p>
            </div>
            <div className="flex justify-evenly text-center w-[50%]">
              <p className="w-24">480p</p>
              <p className="w-24 text-[#1F4D90] font-semibold">480p</p>
              <p className="w-24">1080p</p>
              <p className="w-24">4K + HDR</p>
            </div>
          </div>
          <div className="bg-gray-300 w-full h-[1px]" />
          <div className="flex justify-between">
            <div>
              <p>Devices</p>
            </div>
            <div className="flex justify-evenly text-center w-[50%] text-xs">
              <div className="w-24 flex flex-col gap-6">
                <p>Phone</p>
                <p>Tablet</p>
              </div>
              <div className="w-24 text-[#1F4D90] font-semibold  flex flex-col gap-6">
                <p>Phone</p>
                <p>Tablet</p>
                <p>Computer</p>
                <p>TV</p>
              </div>
              <div className="w-24 flex flex-col gap-6">
                <p>Phone</p>
                <p>Tablet</p>
                <p>Computer</p>
                <p>TV</p>
              </div>
              <div className="w-24 flex flex-col gap-6">
                <p>Phone</p>
                <p>Tablet</p>
                <p>Computer</p>
                <p>TV</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex gap-4 my-6 justify-center">
        <a href="payment" className="w-[40%] ">
          <button className="text-white bg-[#1F4D90] py-3 w-full">Next</button>
        </a>
      </div>
    </div>
  );
}

export default Yearly;
