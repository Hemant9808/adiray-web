import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import blogpage from "../../assets/blogpage.png"
export default function Blog() {
  return (
    <div className="h-[100vh] w-full relative top-[20vh] mb-5" >
      <div className="flex justify-center items-center px-5 "><span className="text-gray-900 text-5xl font-extrabold ">Latest </span><span className="text-blue-900 text-5xl font-extrabold ml-3">Updates</span><span className="text-gray-900 text-5xl font-extrabold "> </span></div>
      <section className=" flex justify-center items-center py-20 px-5 ">
        <div className="flex flex-wrap gap-8 justify-center">
          <div className="w-[390px] h-[390px] rounded-md shadow border border-gray-900 flex-col justify-center items-center inline-flex">
            <div className=" bg-sky-950 bg-opacity-0 rounded-md z-1"><img className="z-1 w-[390px] h-[390px]" src={blogpage} alt="" /></div>
            <div className="absolute w-[390px] mt-[240px] mr-1  z-3 text-wrap object-cover self-stretch h-[150px] z-3 p-8 bg-white bg-opacity-75 rounded-md shadow-inner flex-col justify-center items-start gap-1.5 flex">
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
          <div className="w-[390px] h-[390px] rounded-md shadow border border-gray-900 flex-col justify-center items-center inline-flex">
            <div className=" bg-sky-950 bg-opacity-0 rounded-md z-1"><img className="z-1 w-[390px] h-[390px]" src={blogpage} alt="" /></div>
            <div className="absolute w-[390px] mt-[240px] mr-1  z-3 text-wrap object-cover self-stretch h-[150px] z-3 p-8 bg-white bg-opacity-75 rounded-md shadow-inner flex-col justify-center items-start gap-1.5 flex">
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
          <div className="w-[390px] h-[390px] rounded-md shadow border border-gray-900 flex-col justify-center items-center inline-flex">
            <div className=" bg-sky-950 bg-opacity-0 rounded-md z-1"><img className="z-1 w-[390px] h-[390px]" src={blogpage} alt="" /></div>
            <div className="absolute w-[390px] mt-[240px] mr-1  z-3 text-wrap object-cover self-stretch h-[150px] z-3 p-8 bg-white bg-opacity-75 rounded-md shadow-inner flex-col justify-center items-start gap-1.5 flex">
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
