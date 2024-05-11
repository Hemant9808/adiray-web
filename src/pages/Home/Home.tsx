import React from "react";
import Hero from "../../components/Hero";
import supplychain from "../../assets/supplychain crm.mp4"
import comp from "../../assets/Comp.mp4";
import Blog from "../../components/Blog";
import Vision from "../../components/Vision";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from 'react-i18next';
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

    return (
        <>
            <main className="pt-[10vh]  flex-auto gap-10 relative">
            <Hero />
                <section className="relative  h-auto max-h-[90vh] flex justify-center item-center  overflow-hidden chatbot">
                    <video className="h-90 -z-50 w-[100vw] h-[100%] object-cover " src={comp} autoPlay muted loop />
                    <div className="absolute w-[100%] h-[100%] inset-0 flex justify-center items-center backdrop-blur-sm bg-[#7797bc69] -translate-y-full content">
                        <h2 className="text-white text-[clamp(40px,3vw,4rem)] font-medium">Chatbot Video Section</h2>
                    </div>
                </section>
                <section className="relative">
                   <Vision></Vision>
                </section>

                <section className="relative h-[80vh] overflow-hidden object-cover">
                    <video className=" -z-50 w-full object-cover aspect-video" src={supplychain} autoPlay muted loop />
                    <div className="absolute w-full h-full inset-0 flex items-center justify-center backdrop-blur-md   bg-[#121e2c69]">
                        <div className="flex flex-col justify-between gap-[3rem] max-w-screen-lg px-8">
                            <div data-aos="fade-up" className="flex flex-col gap-2 items-center">
                                <h1 className="text-[clamp(40px,3vw,4rem)] font-bold text-white font-Mont"> {t('home.aboutus.heading')}</h1>
                                <p className="text-white text-[clamp(18px,1.2vw,2rem)] text-center font-MontBook">
                                {t('home.aboutus.description')} 
                                </p>
                                {/* Insert Logo Below */}
                                <div className="h-[200px] w-[200px]">
                                    <script type="text/javascript">
                                       var memberfieo2009token='F6akj6K7Q4_2522922',fieo2009img='horz';
                                    </script>
                                    <script src="https://fieo.org/fieome2009mberlogo.js"></script>
                                </div>
                                {/* End of Logo Insertion */}
                            </div>

                            
                        </div>
                    </div>
                </section>

                <section className="relative">
                   <Blog></Blog>
                </section>
               


            </main >
        </>
    )
}

export default Home;