import { NavLink } from "react-router-dom"
import Logo from "../assets/Logo.png"
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import {motion, useScroll,useMotionValueEvent} from 'framer-motion'

const Navbar = () => {
 
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

    const [open, setOpen] = useState(false)

    return (
        <>
        <div className="z-50  w-full h-[120px]  bg-[#E8EDF3]  fixed flex items-center justify-center shadow-  ">
            <div className="w-full h-[120px] md:h-[100px] flex items-center justify-center " >
                {!open && ( <img className="h-[100px] w-[140px] " src={Logo} alt="adiray" />
          ) } </div>
        </div>
        <motion.nav
        variants={{
            visible:{y:0 },
            hidden:{y:"-100%"},
            }
          }
          animate={hidden ? "hidden" : "visible"}
          transition={{ duration:0.35, ease :"easeInOut"}}
        
        className = { `z-50 fixed w-full h-[120px]    px-4 border-b-2 flex flex-col justify-center items-center  `}>
             <div className=" px-5 py-5 w-[100%] md:w-[80%] sm:w-full  bg-white rounded-xl justify-between items-center "  >
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
                        <NavLink className={({ isActive }) => isActive ? "text-black" : "text-slate-600"} to="blogs"> <span className="hover:text-black">Blog</span></NavLink>
                    </li>
                </ul>
               
                
            </menu>
            <button className=" md:hidden flex items-center justify-center"   onClick={() => setOpen(!open)}>
                    {open ? <AiOutlineClose  /> : <FiMenu style={{fontSize:"25px"}} />}
                </button>
            </div>

            {open && (
                <ul className="p-6 md:hidden  flex-col gap-8 bg-[#dae8ea] w-[50%] h-[800px]  rounded-md " style={{marginTop:"475px", marginLeft:"60%"}}>
                    <button className=" md:hidden flex items-center justify-end "   onClick={() => setOpen(!open)}>
                    {open ? <AiOutlineClose  style={{ fontSize: '30px', }}   /> : <FiMenu />}
                </button>
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
                        <NavLink className={({ isActive }) => isActive ? "text-black" : "text-slate-600"} to="blogs"> <span className="hover:text-black">Blog</span></NavLink>
                    </li>
                </ul>
            )}
        </motion.nav>
        </>
    )
}

export default Navbar;