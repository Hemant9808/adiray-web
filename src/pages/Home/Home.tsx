import React from "react";
import Hero from "../../components/Hero";
import supplychain from "../../assets/supplychain crm.mp4";
import comp from "../../assets/comp.mp4";
import Blog from "../../components/Blog";
import Vision from "../../components/Vision";
import vision3 from "../../assets/vision3.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import fieo from "../../assets/fieo.png";
import msme from "../../assets/msme.png";
import { Link } from "react-router-dom";
import { useState,useRef,useEffect } from "react";
const Home = () => {
  const { t } = useTranslation();
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);
  const videoRefs = [useRef(), useRef(), useRef(), useRef()];

  useEffect(() => {
    videoRefs.forEach((videoRef) => {
      
    });
  }, []);


  return (
    <>
      <main className="pt-[10vh]  flex-auto gap-10 relative">
        <Hero />
        <section className="relative  h-auto max-h-[90vh] flex justify-center item-center object-fit overflow-hidden chatbot">
          <video
            className="h-90 -z-50 w-[100vw] h-[100%] object-cover "
            src={comp}
            autoPlay
            muted
            loop
          />
          <div className="absolute w-[100%] h-[100%] inset-0 flex justify-center items-center backdrop-blur-sm bg-[#7797bc69] -translate-y-full content">
            <h2 className="text-white text-[clamp(40px,3vw,4rem)] font-medium">
              Chatbot Video Section
            </h2>
          </div>
        </section>
        <section className="relative">
          <Vision></Vision>
        </section>

        <section className="relative sm:h-[80vh] h-[85vh] overflow-hidden object-cover">
          <video
            className=" -z-50 w-full object-cover aspect-video"
            src={supplychain}
            autoPlay
            muted
            loop
          />
          <div className="absolute w-full h-full inset-0 flex items-center justify-center backdrop-blur-md   bg-[#121e2c69]">
            <div className="flex flex-col justify-between gap-[4rem] max-w-screen-lg px-8">
              <div
                data-aos="fade-up"
                className="flex flex-col gap-2 items-center"
              >
                <h1 className="text-[clamp(40px,3vw,4rem)] font-bold text-white font-Mont">
                  {" "}
                  {t("home.aboutus.heading")}
                </h1>
                <p className="text-white text-[clamp(18px,1.2vw,2rem)] text-center font-MontBook">
                  {t("home.aboutus.description")}
                </p>
              </div>

              {/* Insert Logo Below */}
              <div className=" flex justify-center md:gap-8 gap-4">
                <Link to="https://fieo.org/?token=F6akj6K7Q4_2522922">
                  <div className="sm:w-[200px] w-[100px]">
                    <img className="sm:w-[200px] w-[100px] mt-7" src={fieo} alt="" />
                  </div>
                </Link>

                <img className="sm:w-[200px] w-[100px] " src={msme} alt="" />
                <img className="sm:w-[200px] w-[100px] " src={vision3} alt="" />
              </div>
              {/* End of Logo Insertion */}
            </div>
          </div>
        </section>

        <section className="relative">
          <Blog></Blog>
        </section>
      </main>
    </>
  );
};

export default Home;
