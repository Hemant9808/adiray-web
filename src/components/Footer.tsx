import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { useTranslation } from 'react-i18next';
import silverlogo from "../assets/footer_logo.png";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook, BsTwitterX, BsYoutube, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer
      className="flex flex-col bg-[#0B1321]  justify-center "
    >
      <div className="flex pl-12 pb-8 sm:pl-0 justify-around items-start flex-col sm:flex-row gap-9 sm:gap-0 bg-[#0B1321] sm:pb-8 pt-8">
      <div className="">
          <img
            className="w-[90px]"
            src={silverlogo}
            alt="adiray"
          />
        </div>


        <ul className="flex flex-col ">
          <h2 className="text-md font-semibold font-Mont text-white ">
            {t('footer.quicklinks')}
          </h2>
          <li>
            <Link className="text-gray-300 hover:text-[#ffd700] text-[14px]" to="">
              {t('footer.Terms & Conditions')}
            </Link>
          </li>
          <li>
            <Link className="text-gray-300 hover:text-[#ffd700] text-[14px]" to="">
              {t('footer.Privacy and Cookies')}
            </Link>
          </li>
          <li>
            <Link className="text-gray-300 hover:text-[#ffd700] text-[14px]" to="">
              {t('footer.Licenses')}
            </Link>
          </li>
        </ul>

        <ul>
          <h2 className="text-md text-white font-semibold mb-2 font-Mont"> {t('footer.Contact')}</h2>
          {/*<Link className="text-wrap text-gray-300 hover:text-[#ffd700]" to="https://maps.app.goo.gl/SykjUggdHa4SkLYbA">
                        Address : D 1807, Shriram Greenfield, Bommenahalli, Bangalore. 560049
                    </Link>
                  <Link className="text-gray-300 hover:text-[#ffd700]"  to="mailto:admin@adirayglobal.com">
                        Email Id : admin@adirayglobal.com
                    </Link>
                    <Link className="text-gray-300 hover:text-[#ffd700]" to="tel:+919620199884">
                        Mobile : 9620199884
                     </Link>*/}
          <div className="flex gap-6">
            {" "}
            <Link to={"tel:9620199884"}>
              <FiPhone color="white" size={23} />
            </Link>{" "}
            <Link to={"mailto:contact@adirayglobal.com"}>
              <FaEnvelope color="white" size={23} />
            </Link>{" "}
          </div>
        </ul>
        <ul className="flex flex-col  ">
          <h2 className="text-md font-semibold mb-2 font-Mont text-white ">
          {t('footer.Social')}
          </h2>
          <div className="flex gap-6 ">

            <Link
              className=" "
              to={"https://www.linkedin.com/company/adiray-global"}
            >
              <BsLinkedin className="w-5 h-5 text-white " />
            </Link>

            <Link to={"https://twitter.com/AdirayGlobal"}>
              <BsTwitterX className="w-5 h-5 text-white" />
            </Link>

            
            </div>
              <div className="flex gap-5 mt-4">
              <Link
              to={
                "https://www.facebook.com/share/xDBzdbxqt3TijffV/?mibextid=WC7FNe"
              }
            >
              <BsFacebook className="w-5 h-5 text-white" />
            </Link>
              <Link to={"https://www.instagram.com/adirayglobal/"}>
              <AiFillInstagram className="w-5 h-5 text-white" />
            </Link>

            <Link to={" https://www.youtube.com/@ADIRAYGLOBAL"}>
              <BsYoutube className="w-5 h-5 text-white " />
            </Link>
              </div>
            
         
        </ul>
      </div>
       
        <div className="flex  justify-center items-center text-center p-4 text-gray-500 ">
        ©2024 adirayglobal.com{' '}
        
        {t('footer.All rights reserved')}
      </div>
     
    </footer>
  );
};

export default Footer;
