import React from "react";
import { Link } from "react-router-dom";
import blogbg from "../assets/blogbg.jpg"
import blogpage from "../assets/blogpage.png"
export default function Blog() {
  return (
    <div className=" h-auto relative overflow-hidden     flex flex-col items-center  " >
      <img className= 'absolute opacity-20 -z-1 object-cover w-full h-full -z-0'  src={blogbg} alt="background" />
       
      <div className=" relative w-90vw max-w-[] font-Mont flex text-[clamp(35px,3.5vw,5rem)]  justify-center   items-center pt-10 pl-[0vw]"><span className="text-gray-900  font-bold ">Latest </span><span className="text-blue-900  font-bold ml-3">Updates</span><span className="text-gray-900 text-5xl font-extrabold "> </span></div>
      <section className="  flex justify-center items-center py-10 px-5  ">
        <div className="flex flex-wrap gap-8 justify-center">
          <div data-aos="fade-up" data-aos-delay="0"
           className="md:w-[420px]  w-[320px] md:h-[320px] h-[250px] bg-red-500 rounded-[14px]  shadow border  flex-col justify-center items-center inline-flex ">
            <div className=" bg-sky-950 bg-opacity-0 rounded-lg z-1"><img className="z-1 md:w-[420px] md:h-[320px] w-[320px] h-[250px]  " src={blogpage} alt="" /></div>
            <div className="absolute md:w-[420px]  w-[320px] h-[150px] md:h-[150px] mt-[120px] md:mt-[170px] mr-1  z-3 text-wrap object-cover self-stretch  z-3 p-8 bg-white bg-opacity-75 rounded-md shadow-inner flex-col justify-center items-start gap-1.5 flex">
              <div className="self-stretch text-gray-900 text-xl md:text-2xl font-bold font-Mont">
                Unlocking New Markets
              </div>
              <div className="z-3  relative self-stretch text-slate-600 text-[10px] md:text-xs  font-semibold ">
                Discover innovative strategies for exporting unique goods
                globally. From market research to branding, unlock success in
                non-traditional commodity trade.
              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="150"
          className="md:w-[420px]  w-[320px] md:h-[320px] h-[250px] bg-red-500 rounded-[14px]  shadow border  flex-col justify-center items-center inline-flex ">
            <div className=" bg-sky-950 bg-opacity-0 rounded-lg z-1"><img className="z-1 md:w-[420px] md:h-[320px] w-[320px] h-[250px]  " src={blogpage} alt="" /></div>
            <div className="absolute md:w-[420px]  w-[320px] h-[150px] md:h-[150px] mt-[120px] md:mt-[170px] mr-1  z-3 text-wrap object-cover self-stretch  z-3 p-8 bg-white bg-opacity-75 rounded-md shadow-inner flex-col justify-center items-start gap-1.5 flex">
              <div className="font-Mont self-stretch text-gray-900 text-xl md:text-2xl font-bold ">
                Unlocking New Markets
              </div>
              <div className="z-3 relative self-stretch text-slate-600 text-[10px] md:text-xs  font-semibold ">
                Discover innovative strategies for exporting unique goods
                globally. From market research to branding, unlock success in
                non-traditional commodity trade.
              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="300"
           className="md:w-[420px]  w-[320px] md:h-[320px] h-[250px] bg-red-500 rounded-[14px]  shadow border  flex-col justify-center items-center inline-flex ">
            <div className=" bg-sky-950 bg-opacity-0 rounded-lg z-1"><img className="z-1 md:w-[420px] md:h-[320px] w-[320px] h-[250px]  " src={blogpage} alt="" /></div>
            <div className="absolute md:w-[420px]  w-[320px] h-[150px] md:h-[150px] mt-[120px] md:mt-[170px] mr-1  z-3 text-wrap object-cover self-stretch  z-3 p-8 bg-white bg-opacity-75 rounded-md shadow-inner flex-col justify-center items-start gap-1.5 flex">
              <div className="font-Mont self-stretch text-gray-900 text-xl md:text-2xl font-bold ">
                Unlocking New Markets
              </div>
              <div className="z-3 relative self-stretch text-slate-600 text-[10px] md:text-xs  font-semibold ">
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
