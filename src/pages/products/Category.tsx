import React, { useState } from "react";
import productmain from "../../assets/productmain.png"

export default function Category() {
  const inputClasses = "pl-10 pr-4 w-[100%] py-3 shadow-md text-md  rounded-lg";
  const categories1 = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
    { id: 4, name: "Product 4" },
    { id: 5, name: "Product 5" },
    { id: 6, name: "Product 6" },
    { id: 7, name: "Product 7" },
    { id: 8, name: "Product 8" },
    { id: 9, name: "Product 9" },
    { id: 10, name: "Product 10" },
  ];
  const categories2 = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
    { id: 4, name: "Product 4" },
    { id: 5, name: "Product 5" },
    { id: 6, name: "Product 6" },
    { id: 7, name: "Product 7" },
    { id: 8, name: "Product 8" },
    { id: 9, name: "Product 9" },
    { id: 10, name: "Product 10" },
  ];
  const categories3 = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
    { id: 4, name: "Product 4" },
    { id: 5, name: "Product 5" },
    { id: 6, name: "Product 6" },
    { id: 7, name: "Product 7" },
    { id: 8, name: "Product 8" },
    { id: 9, name: "Product 9" },
    { id: 10, name: "Product 10" },
  ];
  const categories4 = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
    { id: 4, name: "Product 4" },
    { id: 5, name: "Product 5" },
    { id: 6, name: "Product 6" },
    { id: 7, name: "Product 7" },
    { id: 8, name: "Product 8" },
    { id: 9, name: "Product 9" },
    { id: 10, name: "Product 10" },
  ];
  const [category,setCategory] = useState(categories1);
  
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center mb-4 ">
        <div className="relative h-64 w-full overflow-hidden group mb-20 mt-[100px]">
                <img className="object-cover h-full w-full group-hover:scale-150 ease-in-out duration-1000" src={productmain} alt="clothes" />
                <div className="absolute inset-0 overflow-hidden bg-transparent  z-10  flex items-center justify-center">
                    <h1 className="text-[clamp(30px,2.5vw,4rem)] text-white font-Mont font-semibold">
                        Our <span className="text-[#FFC900]">Products</span>
                    </h1>
                </div>
            </div>

      <div className="w-[80vw] h-auto   flex mb-20">
        <div className="w-[30%] min-w-[200px] h-auto bg-gray-100  mr-4 hidden md:block p-4 rounded-lg ">

        <div className="relative w-[90%] flex items-center ">
                        <input type="text" placeholder="Search..." className={inputClasses} />
                        <svg className="w-4 h-4 absolute left-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>


          
          <button className="w-full text-[14px]  flex mb-3 text-red-400 mt-9 mb-8" 
>
            All Categories
          </button>
          <button className="w-full text-[19px] font-semibold flex mb-2" >
      
            CATAGORIES
          </button>
           <div className="p-3">
          <button className="w-full text-slate-500 border-none rounded-md  text-[17px] mb-3 flex" onClick={() => setCategory(categories1)}>
            {" "}
            Category 1
          </button>
          <button className="w-full text-slate-500 border-none rounded-md  text-[17px] mb-3 flex" onClick={() => setCategory(categories2)}>
            {" "}
            Category 2
          </button>
          <button className="w-full text-slate-500 border-none rounded-md  text-[17px] mb-3 flex" onClick={() => setCategory(categories3)}>
            {" "}
            Category 3
          </button>
          <button className="w-full text-slate-500 border-none rounded-md  text-[17px] mb-3 flex " onClick={() => setCategory(categories4)}>
            {" "}
            Category 4
          </button>
          <button className="w-full text-slate-500 border-none rounded-md  text-[17px] mb-3 flex">
            {" "}
            Category 5
          </button>
          </div>
        </div>
        <div className="w-full  rounded-md border border-solid md:ml-8">
          <div className="h-[70px] bg-slate-300 rounded-md flex items-center justify-between md:p-6 p-3">
            <div className=" flex  gap-6">
          
              <h4 className="font-bold text-sm ">Sl No.</h4>
              <div className=" font-bold text-sm">Product Name</div>
            </div>
            <div className=" w-[70px] md:mr-0 mr-4   rounded-md font-bold text-sm ">
              Enquiry
            </div>
          </div>

          {category.map((categories) => (
            <div
              className={`w-full h-[55px] ${
                categories.id % 2 === 0 ? "bg-gray-100" : "bg-white"
              } flex items-center justify-between  p-7`}
              key={categories.id}
            >
              <div className=" flex md:gap-14 gap-10">
               
                <h4>{categories.id}</h4>
                <div className="">{categories.name}</div>
              </div>
              <button className="bg-blue-800 w-[70px]  text-white rounded-md text-[14px] p-1">
                Enquiry
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
