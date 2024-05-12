import styles from "../styles/hero.module.css"
import bg from "../assets/bg.png";
import toolbox from "../assets/toolbox.png"
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const { t } = useTranslation();
    const shouldAnimate = window.innerWidth <= 768;
    const imageShoudAnimate =window.innerWidth >= 850;
    return (
        <div className={styles.wrapper}>
            <img className={styles.bg} src={bg} alt="background" />
            <div className={styles.overlay}>
                <div className="flex   flex-col  items-center md:items-start gap-6">
                    <h1 data-aos={shouldAnimate ? 'fade-right' : ''} className="font-Mont text-start leading-none text-[#161e30] text-[clamp(45px,4.1vw,6rem)]   font-semibold">
                   {t('home.hero.tagline1')}<br /> <span className={styles.underline}>{t('home.hero.tagline2')}</span>
                    </h1>
                    <p data-aos={shouldAnimate ? 'fade-left' : ''} className="text-slate-500 text-[20px] font-MontBook  text-center md:text-start font-setTimeout(() => {
                        
                    }, timeout);  max-w-md">
                       {t('home.hero.description')} 
                    </p>
                    <div className="flex gap-5">
                    <div data-aos={shouldAnimate ? 'fade-right' : ''}>
                    <Button  className="text-white font-Mont bg-blue-800 hover:bg-blue-900">{t('home.hero.btnViewMore')}</Button>
                </div>
                <div data-aos={shouldAnimate ? 'fade-left' : ''}>
                    <Link to="login">
                    <Button  className="text-white font-Mont bg-blue-800 hover:bg-blue-900 ">{t('home.hero.btnLogin')}</Button>
                    </Link>
                </div>

                </div>
                </div>

                <div className="flex flex-col gap-4 md:h-75vh">
                    <div className="flex gap-4 items-end ">
                        <Link  data-aos={imageShoudAnimate ? 'fade-up' : ''}  to={""}>
                            <img className="w-[252.13px] h-[195.28px]  md:w-[250px] md:h-[210px]  left-[172.20px] top-[218.42px]" src={toolbox} />
                        </Link>

                        <Link  data-aos={imageShoudAnimate ? 'fade-right' : ''}  to={""}>
                            <img className="w-[142.38px] h-[142.05px]  md:w-[160px] md:h-[160px]  left-[38.35px] top-[218.42px] " src={toolbox} />
                        </Link>
                    </div>

                    <div className="flex gap-4 ml-[5vw]">
                        <Link  data-aos={imageShoudAnimate ? 'fade-down' : ''} to={""}>
                            <img className="w-[142.24px] h-[142.24px] md:w-[160px] md:h-[160px]  left-[267.57px] top-[61.71px]" src={toolbox} />
                        </Link>

                        <Link  data-aos={imageShoudAnimate ? 'fade-right' : ''} to={""}>
                            <img className="w-[252.10px] h-[193.95px] md:w-[250px] md:h-[210px] left-0 top-[10px]" src={toolbox} />
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;