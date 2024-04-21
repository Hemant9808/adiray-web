import styles from "../styles/footer.module.css"
import { Link } from "react-router-dom";
import silverlogo from "../assets/logo/silverlogo.png"
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook, BsTwitterX, BsYoutube, BsLinkedin } from "react-icons/bs";


const Footer = () => {
    return (
        <footer className={styles.wrapper} style={{ backgroundColor:"#0B1321",margin:"0"}}>
            <div className={styles.list}>
                <div className="flex flex-col gap-9 ">
                    <img className="w-[90px]  justify-center mt-[-30px]" style={{marginLeft:"-10px"}} src={silverlogo} alt="adiray" />
                
                    <div className="flex gap-5 items-center ">
                        <Link className=" " to={"https://www.linkedin.com/company/adiray-global"}>
                             <BsLinkedin className="w-7 h-7 text-white "/>
                        </Link>
                   
                        <Link to={"https://twitter.com/AdirayGlobal"}>
                            <BsTwitterX  className="w-7 h-7 text-white"/>
                        </Link>

                        <Link to={"https://www.facebook.com/share/xDBzdbxqt3TijffV/?mibextid=WC7FNe"}>
                            <BsFacebook className="w-8 h-8 text-white" />
                        </Link>

                        <Link to={"https://www.instagram.com/adirayglobal/"}>
                            <AiFillInstagram className="w-8 h-8 text-white" />
                        </Link>

                        <Link to={" https://www.youtube.com/@ADIRAYGLOBAL"}>
                            <BsYoutube className="w-8 h-8 text-white " />
                        </Link>

                    </div>
                </div>

                <ul className="md:ml-[50px] ">
                    <h2 className="text-lg font-semibold mb-2 text-white ">Quick Links</h2>
                   
                    <li >
                        <Link className="text-gray-300 hover:text-[#ffd700]" to="">
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link className="text-gray-300 hover:text-[#ffd700]" to="">
                            Contact us
                        </Link>
                    </li>
                    <li>
                        <Link className="text-gray-300 hover:text-[#ffd700]" to="">
                            terms & conditions
                        </Link>
                    </li>
                    <li>
                        <Link className="text-gray-300 hover:text-[#ffd700]" to="">
                            privacy and cookies
                        </Link>
                    </li>
                    <li>
                        <Link className="text-gray-300 hover:text-[#ffd700]"  to="">
                            licenses
                        </Link>
                    </li>
                   
                </ul>
                
                <ul>
                    <h2 className="text-lg text-white font-semibold mb-2">Contact</h2>
                    <Link className="text-wrap text-gray-300 hover:text-[#ffd700]" to="https://maps.app.goo.gl/SykjUggdHa4SkLYbA">
                        Address : D 1807, Shriram Greenfield, Bommenahalli, Bangalore. 560049
                    </Link>
                    <Link className="text-gray-300 hover:text-[#ffd700]"  to="mailto:admin@adirayglobal.com">
                        EmailId : admin@adirayglobal.com
                    </Link>
                    <Link className="text-gray-300 hover:text-[#ffd700]" to="tel:+919620199884">
                        Mobile : 9620199884
                    </Link>
                </ul>

            </div>
        </footer>
    )
}

export default Footer;