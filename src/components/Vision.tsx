import React from "react";
import group from "../assets/Group.png"

export default function Vision() {
  return (
    <div>
      <section className=" flex w-full h-auto md:h-auto    justify-center items-center bg-white py-20 px-5  ">
        <div className="flex flex-wrap  h-auto  gap-20  md:gap-0 lg:gap-20 justify-center ">


          <div data-aos="fade-right"
           className="w-[600px] md:h-[80vh] h-auto rounded-[14px] gap-8 flex-col justify-center items-start inline-flex "
           style={{ maxWidth: "85vw" }}>
              <div className = "text-4xl"><span className="text-gray-900 font-bold ">Bharat</span><span className="text-black font-bold "> - </span><span className="text-blue-900  font-bold ">Local to Global</span></div>
               <div className="text-[18px] "><p>At Adiray Global, we believe every domestic manufacturer deserves a shot at the international stage. 
Our mission is simple: </p></div>
            <div className = "  text-[18px] flex gap-7 "><img className="w-[32px] h-[28px] rounded-md " src={group} alt="" /><p>Empower you to trade your high-quality goods across borders.</p></div>
            <div className = "text-[18px] flex gap-7 "><img className="w-[40px] h-[28px] rounded-md " src={group} alt="" /><p>We handle the complexities of the export process, connecting you with global markets so you can focus on what you do best – crafting exceptional products.</p></div>
           
              <div className=" p-3  w-full text-[18px] font-semibold shadow-md rounded-md "><h3 className="bg-[#c6d0de] p-3 rounded-md ">With Adiray as your bridge, "Local to Global" becomes your reality.</h3></div>
          </div>
          
           <div className="w-[2px] h-[67vh] hidden lg:block   mt-12  bg-[#6e8199]" ></div>
          <div data-aos="fade-left"
           className="w-[600px] md:h-[80vh]    h-auto pt-4  rounded-[14px] gap-7 flex-col justify-center items-start inline-flex "
           style={{ maxWidth: "85vw" }}>
              <div className="text-4xl"><span className="text-gray-900 font-bold ">A World of </span><span className="text-black font-bold "> - </span><span className="text-blue-900  font-bold ">Trust & Opportunity</span></div>

              
            <div className="text-[18px] flex gap-7 "><img className="w-[40px] h-[28px] rounded-md " src={group} alt="" /><p>We envision a future where domestic manufacturers confidently expand their reach and tap into global opportunities. To achieve this, Adiray Global is building a groundbreaking platform fueled by cutting-edge technologies like blockchain and AI.</p></div>
            <div className="text-[18px] flex gap-7 "><img className="w-[40px] h-[28px] rounded-md " src={group} alt="" /><p>In collaboration with leading trading companies worldwide, this platform will bring unparalleled transparency and trust to the entire process – from demand and supply to secure payments.</p></div>
           
              <div className=" p-3   w-full text-[18px] mb-2 font-semibold shadow-md rounded-md "><h3 className="bg-[#c6d0de] p-3 rounded-md ">Adiray Global: empowering your export journey, one trusted connection at a time.</h3></div>
          </div>
          
          
          
        </div>
      </section>
    </div>
  );
}
