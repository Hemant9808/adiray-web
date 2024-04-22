import React from 'react'

export default function Chatbot() {
  return (
    <div className="w-full h-full relative bg-white">
    <div className="w-[240px] h-[840px] hidden md:block left-0 top-[1px] relative bg-gradient-to-br from-blue-200 to-orange-100">
        <div className="w-[0px] h-[5px] left-[43px] top-[93px] absolute">
        </div>
        <div className="w-7 h-7 left-[22px] top-[718px] absolute">
        </div>
        <div className="left-[26px] top-[93px] absolute flex-col justify-center items-start gap-6 inline-flex">
            <div className="pl-5 pr-[79px] py-2.5 bg-white rounded-xl justify-start items-center gap-2.5 inline-flex">
                <button className="text-blue-950 text-base font-semibold ">New Chat</button>
            </div>
            <div className="px-[21px] flex-col justify-start items-start gap-[30px] flex">
                <button className="text-slate-500 text-base font-semibold ">News</button>
                <button className="text-slate-500 text-base font-semibold ">Parameter 1</button>
                <button className="text-slate-500 text-base font-semibold ">Parameter 2</button>
            </div>
        </div>
        <button className="left-[61px] top-[720px] absolute text-blue-950 text-lg font-semibold ">User Name</button>
        <button className="left-[46px] top-[43px] absolute text-blue-950 text-base font-extrabold ">Home</button>
    </div>
    <div className=" bg-red-500 mr-[90px] flex justify-center items-center w-full h-full">
    <div className="left-[602px] top-[210px] absolute  text-slate-600 text-3xl font-medium flex justify-center items-center ">Welcome to ITrade</div>
    <div className="left-[445px] top-[244px] absolute"><span className="text-gray-900 text-5xl font-bold ">Start Your </span><span className="text-blue-900 text-5xl font-bold ">Trade Journey</span></div>
    <div className="p-5  left-[359px] top-[344px] absolute rounded-xl border border-gray-400 flex-col justify-start items-start gap-[50px] inline-flex">
        <div className="text-slate-500 text-base font-semibold ">Ask anything...</div>
        <div className="justify-center items-center gap-[503px] inline-flex">
            <div className="justify-center items-center gap-[7px] flex">
                <div className="p-1 bg-slate-200 rounded-md justify-start items-start gap-2.5 flex">
                    <div className="w-4 h-4 relative"></div>
                </div>
                <div className="text-slate-500 text-base font-semibold ">Attach files</div>
            </div>
            <div className="px-3 py-2 bg-blue-900 rounded-xl justify-start items-center flex">
                <div className="px-1.5 justify-start items-start gap-2.5 flex">
                    <div className="text-slate-200 text-xs font-extrabold ">Start Chat</div>
                </div>
                <div className="w-3 h-3 relative"></div>
            </div>
        </div>
    </div>
    <div className="w-[592px] h-[70px] left-[413px] top-[499px] absolute">
        <div className="left-[32px] top-[9px] absolute text-slate-500 text-xs font-semibold ">Try Searching</div>
        <div className="w-[451px] h-8 left-[141px] top-0 absolute justify-start items-start gap-2 inline-flex">
            <div className="px-5 py-2 bg-white rounded-[41px] border border-gray-400 justify-center items-center gap-[373px] flex">
                <div className="text-slate-500 text-xs font-semibold ">Who has won the Oscars ever?</div>
            </div>
            <div className="px-5 py-2 bg-white rounded-[41px] border border-gray-400 justify-center items-center gap-[373px] flex">
                <div className="text-slate-500 text-xs font-semibold ">Rule of thirds in photography</div>
            </div>
        </div>
        <div className="w-[433px] h-8 left-[114px] top-[38px] absolute justify-start items-start gap-2 inline-flex">
            <div className="px-5 py-2 bg-white rounded-[41px] border border-gray-400 justify-center items-center gap-[373px] flex">
                <div className="text-slate-500 text-xs font-semibold ">Benefits of cold showers</div>
            </div>
            <div className="px-5 py-2 bg-white rounded-[41px] border border-gray-400 justify-center items-center gap-[373px] flex">
                <div className="text-slate-500 text-xs font-semibold ">How much does a cloud weight?</div>
            </div>
        </div>
        <div className="w-6 h-6 left-0 top-[29px] absolute origin-top-left -rotate-90"></div>
    </div>
    </div>
</div>
  )
}
