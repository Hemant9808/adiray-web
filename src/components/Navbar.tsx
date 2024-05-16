import { NavLink } from "react-router-dom"
import React from "react";
import Logo from "../assets/Logo.png"
import languageicon from "../assets/languageicon.png"
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import {motion, useScroll,useMotionValueEvent} from 'framer-motion'
import { FaCaretDown } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';
import AOS from "aos";
import "aos/dist/aos.css";

import i18n from "../config/i18n"

const Navbar = () => {
  const { t } = useTranslation();
       const changeLanguage = (lng:string)=>{
        console.log("lng",lng);
        i18n.changeLanguage(lng).then(() => console.log("Language changed to", lng));
  
       }
    

    React.useEffect(() => {
        AOS.init({
          duration: 800,
          easing: "ease-in-sine",
          delay: 100,
          offset: 100,
        });
        AOS.refresh();
      }, []);
      const shouldAnimate = window.innerWidth <= 768;
    const {scrollY} = useScroll();
  const [hidden,setHidden] = useState(false);
  

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
        if(latest > prev && latest > 150){
          setHidden(true);
        }
        else{
          setHidden(false);
        }
  })  

    const [open, setOpen] = useState(false);
    const [margin,setMargin]=useState("60%")
    var openNav =(open:boolean)=>{
        setOpen(!open);
        if(open){
            setMargin("60%");

        }
        else{
            setMargin("170%");
        }
    }
    
      

    return (
        <>
        <div className="z-50   w-[100vw] min-w-[350px] h-[120px]  bg-[#E8EDF3]  fixed flex items-center justify-center shadow-  ">
            <div data-aos={shouldAnimate ? 'fade-left' : ''}  className={`w-full h-[120px] md:h-[100px] flex items-center justify-${open ? 'start' : 'center'}`} >
               <img className="h-[100px] w-[140px] " src={Logo} alt="adiray"/>
          </div>
        </div>
        <motion.nav
        variants={{
            visible:{y:0 },
            hidden:{y:"-100%"},
            }
          }
          animate={hidden ? "hidden" : "visible"}
          transition={{ duration:0.35, ease :"easeInOut"}}
          
        
        className = { `z-50 fixed w-[100vw] h-[120px] font-MontBook   px-4 border-b-2 flex flex-col justify-center items-center  `}>
             <div className=" px-5 py-5 w-[90vw] md:w-[80%] sm:w-full  bg-white rounded-xl justify-between items-center ">
             <menu className="  hidden md:block items-center justify-between object-cover " style={{width:"100%"}} >
                   
               <ul className=" items-center w-full  " style={{display:"flex",  flexDirection:'row', justifyContent:"space-around"}}>
                    <li >
                        <NavLink className={({ isActive }) => isActive ? "text-black" : "text-slate-600"}  to="/"> <span className="hover:text-black">{t('navbar.Home')}</span></NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "text-black" : "text-slate-600"} to="chatbot"> <span className="hover:text-black">{t('navbar.AI Chatbot')}
</span></NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "text-black" : "text-slate-600"} to="enquiry"> <span className="hover:text-black">{t('navbar.Enquiry')}</span></NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ?"text-black" : "text-slate-600"} to="products"> <span className="hover:text-black">{t('navbar.Products')}</span></NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "text-black" : "text-slate-600"} to="contact"> <span className="hover:text-black">{t('navbar.Contact us')}</span></NavLink>
                    </li>

                    <li>
                        <NavLink className={({ isActive }) => isActive ? "text-black" : "text-slate-600"} to="blog"> <span className="hover:text-black">{t('navbar.Blog')}</span></NavLink>
                    </li>

                    <li className="relative cursor-pointer group">
                  <div
                    
                    className="flex items-center gap-[2px]  text-gray-500 dark:hover:text-gray-900 py-2"
                  >
                    <img className="w-10 bg-white" src={languageicon} />
                    
                    <span>
                     {/* <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    */}</span>
                  </div>

                  {/* Dropdown Links */}
                  <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md  p-2 dark:text-white ">
                    <ul className="space-y-2">
                      
                      
                        <li className="text-gray-500 hover:text-gray-500   duration-200 inline-block w-full p-2 hover:bg-pink-200 rounded-md font-semibold"
                       onClick={()=>changeLanguage('en')}
                       >
                          English
                            
                          
                        </li>
                        <li className="text-gray-500 hover:text-gray-500   duration-200 inline-block w-full p-2 hover:bg-pink-200 rounded-md "
                          onClick={()=>changeLanguage('he')}>
                     हिंदी
                            
                          
                        </li>
                     
                    
                    </ul>
                  </div>
                </li>

                    

                </ul>
               
                
            </menu>
            <button className=" md:hidden w-full flex justify-between items-center z-60  "    onClick={() => setOpen(!open)}>
            <div className="h-[0] flex items-center  "><img className="h-[70px] w-[100px]  " src={Logo} alt="adiray" />
         </div>
                    {open ? <AiOutlineClose className="relative z-70"  /> : <FiMenu style={{fontSize:"25px"}} />}
                </button>
            </div>

            {open  && (
                
                <ul data-aos="slide-left"
                 className={`p-6 md:hidden justify-end  flex-col gap-8 bg-[#E8EDF3] w-[50%] h-[800px]  rounded-md  transition-${margin} duration-300 ease-in-out `}  style={{marginTop:"380px",marginLeft:`${margin}`,transition: "margin 6s all ease"}}>
                    
                    <button className=" md:hidden flex items-center justify-end transition-margin duration-300 ease-in-out"   onClick={() => openNav(open)}>
                    {open ? <AiOutlineClose  style={{ fontSize: '30px', }}   /> : <FiMenu />}
                </button>
                <li >
                        <NavLink className={({ isActive }) => isActive ? "text-black" : "text-slate-600"}  to="/"  onClick={() => setOpen(!open)}> <span className="hover:text-black">Home</span></NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "text-black" : "text-slate-600"} to="chatbot"  onClick={() => setOpen(!open)}> <span className="hover:text-black">AI Chatbot</span></NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "text-black" : "text-slate-600"} to="enquiry"  onClick={() => setOpen(!open)}> <span className="hover:text-black">Enquiry</span></NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ?"text-black" : "text-slate-600"} to="products"  onClick={() => setOpen(!open)}> <span className="hover:text-black">Products</span></NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "text-black" : "text-slate-600"} to="contact"  onClick={() => setOpen(!open)}> <span className="hover:text-black">Contact us</span></NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "text-black" : "text-slate-600"} to="blog"  onClick={() => setOpen(!open)}> <span className="hover:text-black">Blog</span></NavLink>
                    </li>
                    <li className="relative cursor-pointer group">
                  <a
                    href="#"
                    className="flex items-center gap-[2px]  text-gray-500 dark:hover:text-gray-900 py-2"
                  >
                    {t('navbar.Language')}
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </a>

                  {/* Dropdown Links */}
                  <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-[#E8EDF3] shadow-md  p-2 dark:text-white ">
                    <ul className="space-y-2">
                      
                      
                        <li className="text-gray-500 hover:text-gray-500   duration-200 inline-block w-full p-2 hover:bg-pink-200 rounded-md font-semibold"
                       onClick={()=>changeLanguage('en')}
                       >
                          English
                            
                          
                        </li>
                        <li className="text-gray-500 hover:text-gray-500   duration-200 inline-block w-full p-2 hover:bg-pink-200 rounded-md "
                          onClick={()=>changeLanguage('he')}>
                      हिंदी
                            
                          
                        </li>
                     
                    
                    </ul>
                  </div>
                </li>
                </ul>
                
            )}
        </motion.nav>
        </>
    )
}

export default Navbar;