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
        <div className="z-50  w-full h-[120px] bg-white  fixed flex items-center justify-center shadow-2xl">
            <div className="w-full h-[120px] flex items-center justify-center " >
                 <img className="h-[100px] w-[200px] " src={Logo} alt="adiray" />
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
        
        className = { `  z-50 fixed w-full h-[153px] bg-[#dae8ea] px-4 border-b-2 flex flex-col justify-center items-center shadow-2xl `}>
             <div className=" px-5 py-2 w-[80%]  bg-white rounded-xl justify-between items-center "  >
             <menu className=" flex items-center justify-between object-cover " style={{width:"100%"}} >
                   
                <ul className=" hidden items-center w-full md:flex " style={{paddingTop:"30px",paddingBottom:"30px", display:"flex",  flexDirection:'row', justifyContent:"space-around"}}>
                    <li >
                        <NavLink className={({ isActive }) => isActive ? "text-blue-800" : "text-black"} to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "text-blue-800" : "text-black"} to="chatbot">AI Chatbot</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "text-blue-800" : "text-black"} to="enquiry">Enquiry</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "text-blue-800" : "text-black"} to="products">Products</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "text-blue-800" : "text-black"} to="contact">Contact us</NavLink>
                    </li>

                    <li>
                        <NavLink className={({ isActive }) => isActive ? "text-blue-800" : "text-black"} to="blogs">Blogs</NavLink>
                    </li>
                </ul>
               
                <button className="inline-flex md:hidden" onClick={() => setOpen(!open)}>
                    {open ? <AiOutlineClose /> : <FiMenu />}
                </button>
            </menu>
            </div>

            {open && (
                <ul className="p-6 flex flex-col gap-4">
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "text-blue-800" : "text-black"} to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "text-blue-800" : "text-black"} to="chatbot">AI Chatbot</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "text-blue-800" : "text-black"} to="Enquiry">Enquiry</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "text-blue-800" : "text-black"} to="contact">Contact us</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "text-blue-800" : "text-black"} to="services">Services</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "text-blue-800" : "text-black"} to="blogs">Blogs</NavLink>
                    </li>
                </ul>
            )}
        </motion.nav>
        </>
    )
}

export default Navbar;