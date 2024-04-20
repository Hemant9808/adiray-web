import styles from "../styles/footer.module.css"
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png"
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook, BsTwitterX, BsYoutube, BsLinkedin } from "react-icons/bs";


const Footer = () => {
    return (
        <footer className={styles.wrapper}>
            <div className={styles.list}>
                <div className="flex flex-col gap-3 ">
                    <img className="w-[150px] h-[100px]  justify-center " src={Logo} alt="adiray" />
                    <p className="text-[#9A9A9A]">
                        Address any issue effortlessly with a simple
                        question. Problem-solving simplified
                    </p>
                    <div className="flex gap-5 items-center ">
                        <Link to={"https://www.linkedin.com/company/adiray-global"}>
                            <BsLinkedin />
                        </Link>
                   
                        <Link to={"https://twitter.com/AdirayGlobal"}>
                            <BsTwitterX />
                        </Link>

                        <Link to={"https://www.facebook.com/share/xDBzdbxqt3TijffV/?mibextid=WC7FNe"}>
                            <BsFacebook />
                        </Link>

                        <Link to={"https://www.instagram.com/adirayglobal/"}>
                            <AiFillInstagram />
                        </Link>

                        <Link to={" https://www.youtube.com/@ADIRAYGLOBAL"}>
                            <BsYoutube />
                        </Link>

                    </div>
                </div>

                <ul className="md:ml-[50px] ">
                    <h2 className="text-lg font-semibold mb-2 ">Quick Links</h2>
                    <li>
                        <Link to="">
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            Contact us
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            terms & conditions
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            privacy and cookies
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            licenses
                        </Link>
                    </li>
                </ul>

                <ul>
                    <h2 className="text-lg font-semibold mb-2">Contact</h2>
                    <Link className="text-wrap" to="https://maps.app.goo.gl/SykjUggdHa4SkLYbA">
                        Address : D 1807, Shriram Greenfield, Bommenahalli, Bangalore. 560049
                    </Link>
                    <Link to="mailto:admin@adirayglobal.com">
                        EmailId : admin@adirayglobal.com
                    </Link>
                    <Link to="tel:+919620199884">
                        Mobile : 9620199884
                    </Link>
                </ul>

            </div>
        </footer>
    )
}

export default Footer;