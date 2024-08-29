import React from "react";
import Hero from "../../components/Hero";
import supplychain from "../../new_assets/supplychain crm.mp4";
import chat from "../../new_assets/chat.mp4";
import Blog from "../../components/Blog";
import Vision from "../../components/Vision";
import vision3 from "../../new_assets/vision3.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import fieo from "../../new_assets/fieo.webp";
import msme from "../../new_assets/msme.webp";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import AdirayPortfolio from "../../new_assets/AdirayPortfolio.pdf";
import AdirayPortfoliohindi from "../../new_assets/AdirayPortfoliohindi.pdf";
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
  const [hindiPdf, setHindiPdf] = useState(false);
  useEffect(() => {
    if (t("home.aboutus.heading") == "हमारे बारे में") {
      setHindiPdf(true);
    } else {
      setHindiPdf(false);
    }
  }, [t("home.aboutus.heading")]);

  return (
    <>
      <main className="pt-[10vh]  flex-auto gap-10 relative">
        <Hero />
        <section className="relative  flex justify-center items-center overflow-hidden ">
          <div className="relative w-full h-full flex justify-center items-center">
            <div className="w-full relative" style={{ paddingTop: "50.10%" }}>
              <video
                className="absolute top-0 left-0 w-full h-full object-contain"
                src={chat}
                autoPlay
                muted
                playsInline
                loop
                webkit-playsInline="true"
              />
            </div>
          </div>
        </section>

        <section className="relative">
          <Vision></Vision>
        </section>
        {/* About Section */}
        <section className="relative h-[100vh] sm:h-[200vh] md:h-[100vh] overflow-hidden object-cover">
          <video
            className=" z-50 md:h-auto h-[100%] object-cover aspect-video"
            src={supplychain}
            autoPlay
            muted
            playsInline
            loop
            webkit-playsInline="true"
          />
          <div className="absolute w-full h-full inset-0 flex items-center justify-center backdrop-blur-md   bg-[#121e2c69]">
            <div className="flex flex-col justify-between gap-[1.5rem] max-w-screen-lg px-8">
              <div className="flex flex-col gap-2 items-center">
                <h1 className="text-[clamp(40px,3vw,4rem)] font-bold text-white font-Mont">
                  {" "}
                  {t("home.aboutus.heading")}
                </h1>
                <p className="text-white text-[clamp(18px,1.2vw,2rem)] text-center font-MontBook">
                  {t("home.aboutus.description")}
                </p>
                {/*download button*/}
                <div className="mt-3 w-full flex justify-center">
                  {hindiPdf ? (
                    <button className="bg-white w-[15%] text-md h-10 rounded-lg">
                      <a
                        className="text-md"
                        href={AdirayPortfoliohindi}
                        download="Adiray Portfolio"
                        aria-label="Download Adiray Portfolio"
                      >
                        Read more
                      </a>
                    </button>
                  ) : (
                    <button className="bg-white w-[200px] text-md h-10 rounded-lg">
                      <a
                        className="text-md"
                        href={AdirayPortfolio}
                        download="Adiray Portfolio"
                        aria-label="Download Adiray Portfolio"
                      >
                        Read more
                      </a>
                    </button>
                  )}
                </div>
              </div>

              {/* Insert Logo Below */}
              <div className=" flex justify-center items-center   md:gap-8 gap-4">
                <Link to="https://fieo.org/?token=F6akj6K7Q4_2522922">
                  <img
                    className="sm:w-[200px] w-[100px]"
                    src={fieo}
                    alt="Fieo"
                  />
                </Link>

                <img
                  className="sm:w-[200px] w-[100px] "
                  src={msme}
                  alt="MSME logo"
                />
                <img
                  className="sm:w-[200px] w-[100px] "
                  src={vision3}
                  alt="Vision Logo"
                />
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
