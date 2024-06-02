import styles from "../styles/hero.module.css";
import bg from "../assets/bg.png";
import { Button } from "./Button";
import { useTranslation } from "react-i18next";
import ImageSwapAnimation from "./ImageswapAnimation";
import { Link } from "react-router-dom";

const Hero = () => {
  const { t } = useTranslation();
  const shouldAnimate = window.innerWidth <= 768;

  return (
    <div className={styles.wrapper}>
      <img className={styles.bg} src={bg} alt="background" />
      <div className={styles.overlay}>
        <div className="flex   flex-col md:mt-[80px]  items-center md:items-start gap-6">
          <h1
            data-aos={shouldAnimate ? "fade-right" : ""}
            className="font-Mont text-start leading-none text-[#161e30] text-[clamp(45px,4.1vw,6rem)] font-semibold"
          >
            {t("home.hero.tagline1")}
            <div className="h-3"></div>
            <span className={styles.underline} >{t("home.hero.tagline2")}</span>
          </h1>
          <p
            data-aos={shouldAnimate ? "fade-left" : ""}
            className="text-slate-500 text-[20px] font-MontBook  text-center md:text-start font-setTimeout(() => {
                        
                    }, timeout);  max-w-md"
          >
            {t("home.hero.description")}
          </p>
          <div className="flex gap-5 ">
            <div data-aos={shouldAnimate ? "fade-right" : ""}>
              <Button className="text-white mr-4 font-Mont bg-blue-900  hover:text-yellow-400">
                {t("home.hero.btnViewMore")}
              </Button>
              <Link to="join-us" className="inline-flex text-nowrap items-center justify-center gap-2 px-4 py-2 rounded-lg text-white mr-4 font-Mont bg-blue-900  hover:text-yellow-400">
                {t("home.hero.btnManufacturer")}
              </Link>
            
            </div>
            <div data-aos={shouldAnimate ? "fade-left" : ""}>
              {/*<Link to="login">
                <Button className="text-white font-Mont bg-blue-800 hover:bg-blue-900 ">
                  {t("home.hero.btnLogin")}
                </Button>
                  </Link>*/}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:mt-[150px] gap-3 md:gap-[0]">
          <div className="flex gap-4 md:gap-6 items-end">   
            <ImageSwapAnimation/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
