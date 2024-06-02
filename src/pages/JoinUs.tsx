import React, { useState } from "react";
import contact from "../assets/contact.png";
import mail from "../assets/logo/mail.svg";
import phone from "../assets/logo/phone.svg";
import gps from "../assets/logo/gps.svg";
import { useTranslation } from 'react-i18next';

export default function JoinUs() {
  const { t } = useTranslation();
  const [sentMsg, setSentMsg] = useState(false);
  const [name, setName] = useState("");
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  async function handleFormSubmit() {
    setSentMsg(true);
    const response = await fetch('http://localhost:8080/api/send-mail/join-us', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        productName: productName,
        productCategory: productCategory,
        productQuantity: productQuantity,
        contact: contact,
        message: message
      })
    });
    const data = await response.json();
    if (data.success) {
      setSentMsg(true);
    } else {
      setSentMsg(false);
      console.error(data.message);
    }
  }

  return (
    <div className="w-[100%] h-auto p-[75px] bg-gradient-to-br from-blue-100 to-amber-50 flex-col justify-center items-center gap-2.5 inline-flex mt-[100px]">
      <div className="justify-center items-center gap-[30px] flex md:flex-col flex-col lg:flex-row ">
        <div
          className="p-[10px] w-[500px] bg-white  rounded-3xl shadow flex flex-col justify-center items-center "
          style={{ maxWidth: "90vw" }}
        >
          {!sentMsg && (
            <form onSubmit={handleFormSubmit}>
              <div className="w-[100%] h-[100%] pt-4   rounded-3xl shadow justify-start items-start inline-flex">
                <div className="p-5 justify-center items-center gap-2.5 flex">
                  <div className="flex-col  justify-center items-center gap-[35px] inline-flex">
                    <div className="flex-col justify-center items-center gap-[30px] flex">
                      <div className="flex-col justify-start items-start gap-3 flex">
                        <div className="flex-col justify-start items-start flex gap-2">
                          <div className="text-pink-600 font-Mont text-lg font-extrabold ">
                            {t('contactus.Get in Touch')}
                          </div>
                          <div className="text-center font-Mont md:text-5xl text-[clamp(30px,3.5vw,3rem)] ">
                            <span className="text-gray-900  font-bold ">
                              {t('contactus.Reach Out')}{" "}
                            </span>
                            <span className="text-blue-900  font-bold ">
                              {t('contactus.to')}

                            </span>
                            <span className="text-gray-900 font-extrabold ">
                              {" "}
                            </span>
                            <span className="text-blue-900  font-bold ">
                              {t('contactus.Us')}
                            </span>
                          </div>
                        </div>
                        <h3 className="w-[100%] h-12 whitespace-normal word-wrap text-slate-500 text-[14px] sm:text-[16px]">
                          {t('contactus.Address any issue effortlessly with a simple question. Problem-solving simplified.')}

                        </h3>
                      </div>
                    </div>
                    <div className="flex-col w-[100%] justify-start items-start gap-[30px] flex">
                      <div className=" w-[100%] flex-col justify-start items-start gap-1.5 flex">
                        <div className="flex-col justify-start items-start gap-1.5 flex">
                          <div className="text-slate-700  text-sm font-bold ">
                            {t('contactus.Name')}

                          </div>
                        </div>

                        {/* Contact Us Name  */}
                        <div className="w-[100%]  h-11   bg-white rounded-md border border-neutral-300 justify-start items-center gap-2.5 inline-flex">
                          <input value={name} onChange={(e) => { setName(e.target.value) }} className="w-[100%] h-[100%] pl-5 text-gray-400 text-[12px] font-semibold " placeholder={t('contactus.Name')}>

                          </input>
                        </div>
                      </div>

                      {/* Product Name */}
                      <div className=" w-[100%] flex-col justify-start items-start gap-1.5 flex">
                        <div className="flex-col justify-start items-start gap-1.5 flex">
                          <div className="text-slate-700  text-sm font-bold ">
                            {t('contactus.Product Name')}

                          </div>
                        </div>
                        <div className="w-[100%]  h-11   bg-white rounded-md border border-neutral-300 justify-start items-center gap-2.5 inline-flex">
                          <input value={productName} onChange={(e) => { setProductName(e.target.value) }} className="w-[100%] h-[100%] pl-5 text-gray-400 text-[12px] font-semibold " placeholder={t('contactus.Product Name')}>

                          </input>
                        </div>
                      </div>

                      {/* Product Category  */}
                      <div className=" w-[100%] flex-col justify-start items-start gap-1.5 flex">
                        <div className="flex-col justify-start items-start gap-1.5 flex">
                          <div className="text-slate-700  text-sm font-bold ">
                            {t('contactus.Product Category')}

                          </div>
                        </div>
                        <div className="w-[100%]  h-11   bg-white rounded-md border border-neutral-300 justify-start items-center gap-2.5 inline-flex">
                          <input value={productCategory} onChange={(e) => { setProductCategory(e.target.value) }} className="w-[100%] h-[100%] pl-5 text-gray-400 text-[12px] font-semibold " placeholder={t('contactus.Product Category')}>

                          </input>
                        </div>
                      </div>

                      {/* Product Quantity  */}
                      <div className=" w-[100%] flex-col justify-start items-start gap-1.5 flex">
                        <div className="flex-col justify-start items-start gap-1.5 flex">
                          <div className="text-slate-700  text-sm font-bold ">
                            {t('contactus.Product Quantity')}

                          </div>
                        </div>
                        <div className="w-[100%]  h-11   bg-white rounded-md border border-neutral-300 justify-start items-center gap-2.5 inline-flex">
                          <input value={productQuantity} onChange={(e) => { setProductQuantity(e.target.value) }} className="w-[100%] h-[100%] pl-5 text-gray-400 text-[12px] font-semibold " placeholder={t('contactus.Product Quantity')}>

                          </input>
                        </div>
                      </div>

                      {/* Contact  */}
                      <div className=" w-[100%] flex-col justify-start items-start gap-1.5 flex">
                        <div className="text-slate-600 text-sm font-bold ">
                          {t('contactus.Contact')}{" "}
                        </div>
                        <div className="w-[100%]  h-11   bg-white rounded-md border border-neutral-300 justify-start items-center gap-2.5 inline-flex">
                          <input value={contact} onChange={(e) => { setContact(e.target.value) }} className="w-[100%] h-[100%] pl-5 text-gray-400 text-[12px] font-semibold " placeholder={t('contactus.phone number/email address')}>

                          </input>
                        </div>
                      </div>

                      {/* Message  */}
                      <div className=" w-[100%]  flex-col justify-start items-start gap-1.5 flex">
                        <div className="text-slate-600 text-sm font-bold ">
                          {t('contactus.Your Message')}

                        </div>
                        <div className="w-[100%] h-56   bg-white rounded-lg border border-neutral-300 justify-start items-start gap-2.5 inline-flex">
                          <div className="w-[100%] h-56  justify-start items-start gap-2.5 flex">
                            <textarea value={message} onChange={(e) => { setMessage(e.target.value) }} placeholder={t('contactus.Leave Us Your Message...')}
                              className="text-gray-400 p-5 w-[100%] h-[100%] text-[13px] font-semibold  rounded-lg border-none">
                            </textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="w-[100%] h-11 py-2.5 bg-blue-900 text-center text-slate-200 text-sm font-bold rounded-md justify-center items-center gap-2.5 inline-flex">
                        {t('contactus.Send Message')}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          )}

          {sentMsg && (
            <>
              <div className="w-[241px] text-center font-Mont">
                <span className="text-gray-900 text-3xl font-semibold ">
                  Message
                </span>
                <span className="text-black text-3xl font-semibold "> </span>
                <span className="text-blue-900 text-3xl font-semi bold ">
                  Sent.
                </span>
              </div>
              <div className="w-[431px] text-center text-gray-900 text-xl font-normal mt-2 ">
                We will connect with you shortly
              </div>
            </>
          )}
        </div>
        <div className="flex-col   gap-[30px] inline-flex justify-center items-center" style={{ maxWidth: "80vw" }}>
          <div className="rounded-3xl shadow flex-col justify-center items-center gap-25 flex">
            <img
              className=" md:w-[100%] w-[100%]  h-[80%] rounded-3xl"
              src={``}
            />
          </div>
          <div className=" md:w-[100%] w-[100%] h-[340px] md:px-10  pt-9 pb-[30px] bg-white rounded-3xl shadow justify-start items-start inline-flex">
            <div className="flex-col justify-start items-start w-[100%]  gap-5 inline-flex">
              <div className="h-[78px] md:px-6 px-2 py-5 bg-neutral-100 w-[100%] rounded-xl flex-col justify-start items-start gap-2.5 flex">
                <div className=" justify-start w-[100%] items-center gap-[23px] flex">
                  <div className="w-8 h-8 relative">
                    <img
                      className=" md:w-[100%] w-[30px]  h-[30px] rounded-3xl"
                      src={mail}
                    />
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <div className="text-slate-700 text-lg font-bold ">
                      {t('Email')}
                    </div>
                    <div className=" text-slate-600 text-xs font-semibold ">
                      contact@adirayglobal.com
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[78px] md:px-6 w-[100%] px-2 py-5 bg-neutral-100 rounded-xl flex-col justify-start items-start gap-2.5 flex">
                <div className="justify-start items-center w-[100%] gap-[23px] inline-flex">
                  <div className="w-8 h-8 relative">
                    <img
                      className=" md:w-[100%] w-[30px]   h-[30px] rounded-3xl"
                      src={phone}
                    />
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <div className="text-slate-700 text-lg font-bold ">
                      {t('Phone')}
                    </div>
                    <div className=" text-slate-600 text-xs font-semibold ">
                      9620199884 | 9525500039
                    </div>
                  </div>
                </div>
              </div>
              {/*<div className="h-[78px] md:px-6 px-2 py-5 bg-neutral-100 rounded-xl flex-col justify-start items-start gap-2.5 flex">
                <div className="w-[100%] justify-start items-center gap-[23px] inline-flex">
                  <div className="w-11 h-9 relative">
                    <img
                      className=" md:w-[100%] w-[30px]  h-[30px] rounded-3xl"
                      src={gps}
                    />
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <div className="text-slate-700 text-lg font-bold ">
                      Address
                    </div>
                    <div className="w-[100%] text-slate-600 text-xs font-semibold ">
                      D 1807, Shriram Greenfield, Bommenahalli, Bangalore 560049
                    </div>
                  </div>
                </div>
        </div>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
