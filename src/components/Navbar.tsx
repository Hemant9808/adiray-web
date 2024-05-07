import { NavLink } from "react-router-dom"
import React from "react";
import Logo from "../assets/Logo.png"
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import {motion, useScroll,useMotionValueEvent} from 'framer-motion'
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
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
    var openNav =(open)=>{
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
                        <NavLink className={({ isActive }) => isActive ? "text-black" : "text-slate-600"}  to="/"> <span className="hover:text-black">Home</span></NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "text-black" : "text-slate-600"} to="chatbot"> <span className="hover:text-black">AI Chatbot</span></NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "text-black" : "text-slate-600"} to="enquiry"> <span className="hover:text-black">Enquiry</span></NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ?"text-black" : "text-slate-600"} to="products"> <span className="hover:text-black">Products</span></NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "text-black" : "text-slate-600"} to="contact"> <span className="hover:text-black">Contact us</span></NavLink>
                    </li>

                    <li>
                        <NavLink className={({ isActive }) => isActive ? "text-black" : "text-slate-600"} to="blog"> <span className="hover:text-black">Blog</span></NavLink>
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
                 className={`p-6 md:hidden justify-end  flex-col gap-8 bg-[#E8EDF3] w-[50%] h-[800px]  rounded-md  transition-${margin} duration-300 ease-in-out `}  style={{marginTop:"320px",marginLeft:`${margin}`,transition: "margin 6s all ease"}}>
                    
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
                </ul>
                
            )}
        </motion.nav>
        </>
    )
}

export default Navbar;