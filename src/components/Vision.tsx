import React from "react";
import styles from "../styles/hero.module.css"
import group from "../assets/Group.png"
import bg from "../assets/bg.png";
import { useTranslation } from 'react-i18next';
export default function Vision() {
  const { t } = useTranslation();
  return (
    <div className="h-auto">
      <img className="absolute w-[100%] h-auto  bg-gradient-to-br from-yellow-100 to-blue-200 backdrop-blur-md   bg-white sm:opacity-15 opacity-10 md:h-full md:mt-8 md:pl-0 md:pr-0" src={bg} alt="background" />
      <section className=" flex w-full h-auto md:h-auto    justify-center items-center bg-white py-20 px-5  ">
        
        <div className="flex flex-wrap  h-auto  gap-20  md:gap-0 lg:gap-20 justify-center ">

        
          <div data-aos="fade-right"
           className="w-[600px] md:h-[80vh] h-auto rounded-[14px] gap-8 flex-col justify-center items-start inline-flex "
           style={{ maxWidth: "85vw" }}>
              <div className = "text-4xl"><span className="text-gray-900 font-bold font-Mont ">Bharat</span><span className="text-black font-bold "> - </span><span className="text-blue-900  font-bold font-Mont">Local to Global</span></div>
               <div className="text-[18px] font-MontBook font-extrabold "><p>{t('home.vision.left.initialDescription')} 
 </p></div>
            <div className = "  text-[18px] flex gap-7 font-MontBook "><img className="w-[32px] h-[28px] rounded-md " src={group} alt="" /><p> {t('home.vision.left.bulletpoints.point1')}</p></div>
            <div className = "text-[18px] flex gap-7 font-MontBook "><img className="w-[40px] h-[28px] rounded-md " src={group} alt="" /><p>{t('home.vision.left.bulletpoints.point2')}</p></div>
           
              <div className=" p-3  w-full font-Mont text-[18px] font-semibold shadow-md rounded-md "><h3 className="bg-[#c6d0de] p-3 rounded-md ">{t('home.vision.left.endStatements')} </h3></div>
          </div>
          
           <div className="w-[2px] h-[67vh] hidden lg:block   mt-12  bg-[#6e8199]" ></div>
          <div data-aos="fade-left"
           className="w-[600px] md:h-[80vh]    h-auto pt-4  rounded-[14px] gap-7 flex-col justify-center items-start inline-flex "
           style={{ maxWidth: "85vw" }}>
              <div className = "text-4xl"><span className="text-gray-900 font-bold font-Mont ">A World of</span><span className="text-black font-bold "> - </span><span className="text-blue-900  font-bold font-Mont">Trust & Opportunity</span></div>
               <div className="text-[18px] font-MontBook font-extrabold "><p>
 </p></div>
            <div className = "  text-[18px] flex gap-7 font-MontBook "><img className="w-[32px] h-[28px] rounded-md " src={group} alt="" /><p> {t('home.vision.right.bulletpoints.point1')}</p></div>
            <div className = "text-[18px] flex gap-7 font-MontBook "><img className="w-[40px] h-[28px] rounded-md " src={group} alt="" /><p>{t('home.vision.right.bulletpoints.point2')}</p></div>
           
              <div className=" p-3  w-full font-Mont text-[18px] font-semibold shadow-md rounded-md "><h3 className="bg-[#c6d0de] p-3 rounded-md ">{t('home.vision.right.endStatements')} </h3></div>
           </div>
          
          
          
        </div>
      </section>
    </div>
  );
}
