import React from "react";
import { Link } from "react-router-dom";

import blogpage from "../assets/blogpage.png"
export default function Blog() {
  return (
    <div className=" h-auto relative  bottom-[-10s0px]   flex flex-col items-center  " >
      <div className=" relative w-90vw max-w-[] flex `  justify-center   items-center pt-10 pl-[0vw]"><span className="text-gray-900 text-5xl font-bold ">Latest </span><span className="text-blue-900 text-5xl font-bold ml-3">Updates</span><span className="text-gray-900 text-5xl font-extrabold "> </span></div>
      <section className=" flex justify-center items-center py-10 px-5  ">
        <div className="flex flex-wrap gap-8 justify-center">
          <div className="w-[420px] h-[320px] rounded-md shadow border border-gray-900 flex-col justify-center items-center inline-flex ">
            <div className=" bg-sky-950 bg-opacity-0 rounded-md z-1"><img className="z-1 w-[420px] h-[320px]" src={blogpage} alt="" /></div>
            <div className="absolute  w-[420px] mt-[170px] mr-1  z-3 text-wrap object-cover self-stretch h-[150px] z-3 p-8 bg-white bg-opacity-75 rounded-md shadow-inner flex-col justify-center items-start gap-1.5 flex">
              <div className="self-stretch text-gray-900 text-2xl font-bold ">
                Unlocking New Markets
              </div>
              <div className="z-3 relative self-stretch text-slate-600 text-xs font-semibold ">
                Discover innovative strategies for exporting unique goods
                globally. From market research to branding, unlock success in
                non-traditional commodity trade.
              </div>
            </div>
          </div>
          <div className="w-[420px] h-[320px] rounded-md shadow border border-gray-900 flex-col justify-center items-center inline-flex ">
            <div className=" bg-sky-950 bg-opacity-0 rounded-md z-1"><img className="z-1 w-[420px] h-[320px]" src={blogpage} alt="" /></div>
            <div className="absolute  w-[420px] mt-[170px] mr-1  z-3 text-wrap object-cover self-stretch h-[150px] z-3 p-8 bg-white bg-opacity-75 rounded-md shadow-inner flex-col justify-center items-start gap-1.5 flex">
              <div className="self-stretch text-gray-900 text-2xl font-bold ">
                Unlocking New Markets
              </div>
              <div className="z-3 relative self-stretch text-slate-600 text-xs font-semibold ">
                Discover innovative strategies for exporting unique goods
                globally. From market research to branding, unlock success in
                non-traditional commodity trade.
              </div>
            </div>
          </div>
          <div className="w-[420px] h-[320px] rounded-md shadow border border-gray-900 flex-col justify-center items-center inline-flex ">
            <div className=" bg-sky-950 bg-opacity-0 rounded-md z-1"><img className="z-1 w-[420px] h-[320px]" src={blogpage} alt="" /></div>
            <div className="absolute  w-[420px] mt-[170px] mr-1  z-3 text-wrap object-cover self-stretch h-[150px] z-3 p-8 bg-white bg-opacity-75 rounded-md shadow-inner flex-col justify-center items-start gap-1.5 flex">
              <div className="self-stretch text-gray-900 text-2xl font-bold ">
                Unlocking New Markets
              </div>
              <div className="z-3 relative self-stretch text-slate-600 text-xs font-semibold ">
                Discover innovative strategies for exporting unique goods
                globally. From market research to branding, unlock success in
                non-traditional commodity trade.
              </div>
            </div>
          </div>
          
          
        </div>
      </section>
    </div>
  );
}
