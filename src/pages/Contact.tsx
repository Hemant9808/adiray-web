import React from 'react'


export default function Contact() {
  return (
    <div className="w-[100%] h-auto p-[75px] bg-gradient-to-br from-blue-100 to-amber-50 flex-col justify-center items-center gap-2.5 inline-flex mt-[100px]">
    <div className="justify-center items-center gap-[30px] flex md:flex-col flex-col lg:flex-row ">
        <div className="p-[30px] w-[500px] h-[800px] bg-red-500  rounded-3xl shadow " style={{maxWidth:"90%"}}></div>
        <div className="flex-col bg-blue-500  gap-[30px] inline-flex justify-center items-center">
            <div className="rounded-3xl shadow flex-col justify-center items-center gap-2.5 flex">
                <img className=" md:w-[100%] w-[80%]  h-[80%] rounded-3xl" src="https://via.placeholder.com/550x445" />
            </div>
            <div className=" md:w-[100%] w-[80%] h-[340px] px-10 pt-9 pb-[30px] bg-white rounded-3xl shadow justify-center items-center inline-flex">
                <div className="flex-col justify-center items-center w-[100%] gap-5 inline-flex">
                    <div className="h-[78px] px-6 py-5 bg-neutral-100 rounded-xl flex-col justify-start items-start gap-2.5 flex">
                        <div className="justify-start items-center gap-[23px] inline-flex">
                            <div className="w-8 h-8 relative"></div>
                            <div className="flex-col justify-start items-start inline-flex">
                                <div className="text-slate-700 text-lg font-bold font-['Mont']">Email</div>
                                <div className="w-[252px] text-slate-600 text-xs font-semibold font-['Mont']">contact@adirayglobal.com</div>
                            </div>
                        </div>
                    </div>
                    <div className="h-[78px] px-6 py-5 bg-neutral-100 rounded-xl flex-col justify-start items-start gap-2.5 flex">
                        <div className="justify-start items-center gap-[23px] inline-flex">
                            <div className="w-8 h-8 relative"></div>
                            <div className="flex-col justify-start items-start inline-flex">
                                <div className="text-slate-700 text-lg font-bold font-['Mont']">Phone</div>
                                <div className="w-[252px] text-slate-600 text-xs font-semibold font-['Mont']">9620199884 | 9525500039</div>
                            </div>
                        </div>
                    </div>
                    <div className="h-[78px] px-6 py-5 bg-neutral-100 rounded-xl flex-col justify-start items-start gap-2.5 flex">
                        <div className="w-[100%] justify-start items-center gap-[23px] inline-flex">
                            <div className="w-8 h-8 relative"></div>
                            <div className="flex-col justify-start items-start inline-flex">
                                <div className="text-slate-700 text-lg font-bold font-['Mont']">Address</div>
                                <div className="w-[100%] text-slate-600 text-xs font-semibold font-['Mont']">D 1807, Shriram Greenfield, Bommenahalli, Bangalore 560049</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
