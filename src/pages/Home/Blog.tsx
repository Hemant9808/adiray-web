
import React from 'react';
import blogpage from "../../assets/blogpage.png"
import styles from "../../styles/hero.module.css"
import blogbg from "../../assets/blogbg.jpg"


const inputClasses = "pl-10 pr-4 py-3 shadow-md text-md  rounded-lg";
const hrClasses = "flex-1 border-zinc-300";
``
const Blog = () => {
    return (
      <div className=' relative w-full flex  justify-center shadow-md '>
         <img className= 'absolute opacity-20 -z-1 object-cover w-full h-full -z-0'  src={blogbg} alt="background" />
        <div className=" p-8 px-[10vw] z-[5]   max-w-[1300px] flex flex-col justify-center mt-[17vh] ">
            <div className="mb-6 md:flex justify-between items-center">
                <h1 className="text-[clamp(35px,3.5vw,5rem)] font-bold">Latest  <span className='text-blue-900'>Updates</span></h1>
                <div className="flex items-center gap-2 mt-2">
                    <hr className={hrClasses} />
                    <div className="relative">
                        <input type="text" placeholder="Search..." className={inputClasses} />
                        <svg className="w-4 h-4 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="grid gap-6">
                {[1, 2, 3].map((item) => (
                    <div key={item} className="flex justify-center items-center gap-12 md:flex-row flex-col ">
                        <img src={blogpage} alt="Market Update" className="col-span-1 rounded-lg w-[300px] h-[200px] sm:w-[350px]" />
                        <div className="col-span-2  h-[25vh] flex flex-col items-start justify-start overflow-hidden">
                            <h2 className="text-[clamp(15px,2.5vw,1.7rem)] font-extrabold text-black ">Understanding Market Psychology: How Emotions Influence Trading Decisions</h2>
                            <p className="mt-2 text-zinc-400  font-semibold">Trading isn't just about charts, numbers, and economic indicators—it's also deeply influenced by human psychology. Emotions play a significant role in financial decisions.</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default Blog;
