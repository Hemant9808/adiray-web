import styles from "../styles/hero.module.css"
import bg from "../assets/bg.png";
import toolbox from "../assets/toolbox.png"
import { Link } from "react-router-dom";
import { Button } from "./Button";


const Hero = () => {
    const shouldAnimate = window.innerWidth <= 768;
    return (
        <div className={styles.wrapper}>
            <img className={styles.bg} src={bg} alt="background" />
            <div className={styles.overlay}>
                <div className="flex flex-col items-center lg:items-start gap-6">
                    <h1 data-aos={shouldAnimate ? 'fade-right' : ''} className="text-start leading-none text-[clamp(40px,3.5vw,6rem)] font-bold">
                        Local To <br /> <span className={styles.underline}>Global</span>
                    </h1>
                    <p data-aos={shouldAnimate ? 'fade-left' : ''} className="text-slate-500 text-base font-semibold text-center lg:text-start max-w-md">
                        Transform your business with our high-quality raw materials, tailored to your unique needs.
                    </p>
                    <div className="flex gap-5">
                    <div data-aos={shouldAnimate ? 'fade-right' : ''}>
                    <Button  className="text-white bg-blue-800 hover:bg-blue-900">View More</Button>
                </div>
                <div data-aos={shouldAnimate ? 'fade-left' : ''}>
                    <Link to="login">
                    <Button  className="text-white bg-blue-800 hover:bg-blue-900">Login</Button>
                    </Link>
                </div>

                </div>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="flex gap-4 items-end ">
                        <Link data-aos="slide-up" to={""}>
                            <img className="w-[252.13px] h-[195.28px] left-[172.20px] top-[218.42px]" src={toolbox} />
                        </Link>

                        <Link data-aos="slide-right" to={""}>
                            <img className="w-[142.38px] h-[142.05px] left-[38.35px] top-[218.42px] " src={toolbox} />
                        </Link>
                    </div>

                    <div className="flex gap-4 ml-[5vw]">
                        <Link data-aos="slide-down" to={""}>
                            <img className="w-[142.24px] h-[142.24px] left-[267.57px] top-[61.71px]" src={toolbox} />
                        </Link>

                        <Link data-aos="slide-right" to={""}>
                            <img className="w-[252.10px] h-[193.95px] left-0 top-[10px]" src={toolbox} />
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;