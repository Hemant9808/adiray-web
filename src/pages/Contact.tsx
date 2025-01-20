import { useState } from "react";
import contactImage from "../new_assets/contact.webp";
import mail from "../new_assets/logo/mail.svg";
import phone from "../new_assets/logo/phone.svg";
import { useTranslation } from "react-i18next";
import axiosInstance from "../config/axios";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { z } from "zod";

const ContactFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  contact: z
    .string()
    .min(1, { message: "Contact is required" })
    .refine(
      (value) =>
        /\S+@\S+\.\S+/.test(value) || /^[0-9]{10,}$/.test(value),
      { message: "Provide a valid email or phone number" }
    ),
  message: z.string().min(1, { message: "Message is required" }),
});

export default function Contact() {
  const { t } = useTranslation();
  const [sentMsg, setSentMsg] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleFormSubmit() {
    const formData = { name, contact, message };


    try {
      // Validate form data using Zod
      ContactFormSchema.parse(formData);

      setErrors({}); // Clear errors if validation passes
      setIsSubmitting(true);
      // Submit form data via API
      const response = await axiosInstance.post("/send-mail/contact-us", {
        name,
        contact,
        message,
      });

      const data = response.data;
      if (data.success) {
        setSentMsg(true);
      } else {
        setSentMsg(false);
        console.error(data.message);
      }
    } catch (validationError) {
      if (validationError instanceof z.ZodError) {
        // Set errors based on Zod validation
        const zodErrors = validationError.flatten().fieldErrors;
        setErrors({
          name: zodErrors.name?.[0] || "",
          contact: zodErrors.contact?.[0] || "",
          message: zodErrors.message?.[0] || "",
        });
      } else {
        console.error("Unexpected error during validation:", validationError);
      }
    } finally {
      setIsSubmitting(false);
    }

  }

  return (
    <>
      <Helmet>
        <title>Adiray Global | Contact Us</title>
        <meta
          name="description"
          content="Adiray Global is a leading company providing top-notch services and products worldwide."
        />
        <meta
          name="keywords"
          content="Adiray Global, services, products, worldwide, leading company"
        />
        <meta name="author" content="Adiray Global" />
        <meta property="og:title" content="Adiray Global - Home" />
        <meta
          property="og:description"
          content="Adiray Global is a leading company providing top-notch services and products worldwide."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.adirayglobal.com" />
      </Helmet>
      <div className="w-[100%] h-auto p-[75px] bg-gradient-to-br from-blue-100 to-amber-50 flex-col justify-center items-center gap-2.5 inline-flex mt-[100px]">
        <div className="justify-center items-center gap-[30px] flex md:flex-col flex-col lg:flex-row ">
          <div
            className="p-[10px] w-[500px] h-[820px] bg-white  rounded-3xl shadow flex flex-col justify-center items-center "
            style={{ maxWidth: "90vw" }}
          >
            {!sentMsg && (
              <>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleFormSubmit();
                  }}
                >
                  <div className="w-[100%] h-[100%] pt-4   rounded-3xl shadow justify-start items-start inline-flex">
                    <div className="p-5 justify-center items-center gap-2.5 flex">
                      <div className="flex-col  justify-center items-center gap-[35px] inline-flex">
                        <div className="flex-col justify-center items-center gap-[30px] flex">
                          <div className="flex-col justify-start items-start gap-3 flex">
                            <div className="flex-col justify-start items-start flex gap-2">
                              <div className="text-pink-600 font-Mont text-lg font-extrabold ">
                                {t("contactus.Get in Touch")}
                              </div>
                              <div className="text-center font-Mont md:text-5xl text-[clamp(30px,3.5vw,3rem)] ">
                                <span className="text-gray-900  font-bold ">
                                  {t("contactus.Reach Out")}{" "}
                                </span>
                                <span className="text-blue-900  font-bold ">
                                  {t("contactus.to")}
                                </span>
                                <span className="text-gray-900 font-extrabold ">
                                  {" "}
                                </span>
                                <span className="text-blue-900  font-bold ">
                                  {t("contactus.Us")}
                                </span>
                              </div>
                            </div>
                            <h3 className="w-[100%] h-12 whitespace-normal word-wrap text-slate-500 text-[14px] sm:text-[16px]">
                              {t(
                                "contactus.Address any issue effortlessly with a simple question. Problem-solving simplified."
                              )}
                            </h3>
                          </div>
                        </div>
                        <div className="flex-col w-[100%] justify-start items-start gap-[30px] flex">
                          <div className=" w-[100%] flex-col justify-start items-start gap-1.5 flex">
                            <div className="flex-col justify-start items-start gap-1.5 flex">
                              <div className="text-slate-700  text-sm font-bold ">
                                {t("contactus.Name")}
                              </div>
                            </div>
                            <div className={`w-[100%]  h-11   bg-white rounded-md border border-neutral-300 justify-start items-center gap-2.5 inline-flex ${errors.name ? "border-red-500" : "border-neutral-300"
                              }`}>
                              <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-[100%] h-[100%] pl-5 text-gray-400 text-[12px] font-semibold "
                                placeholder={t("contactus.Name")}
                              ></input>
                            </div>
                            {errors.name && (
                              <div className="text-red-500 text-xs">{errors.name}</div>
                            )}
                          </div>
                          <div className=" w-[100%] flex-col justify-start items-start gap-1.5 flex">
                            <div className="text-slate-600 text-sm font-bold ">
                              {t("contactus.Contact")}{" "}
                            </div>
                            <div className={`w-[100%]  h-11 ${errors.contact ? "border-red-500" : "border-neutral-300"
                              }   bg-white rounded-md border border-neutral-300 justify-start items-center gap-2.5 inline-flex`}>
                              <input
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                                className="w-[100%] h-[100%] pl-5 text-gray-400 text-[12px]  font-semibold "
                                placeholder={t(
                                  "contactus.phone number/email address"
                                )}
                              ></input>
                            </div>
                            {errors.contact && (
                              <div className="text-red-500 text-xs">{errors.contact}</div>
                            )}
                          </div>
                          <div className=" w-[100%]  flex-col justify-start items-start gap-1.5  flex">
                            <div className="text-slate-600 text-sm font-bold ">
                              {t("contactus.Your Message")}
                            </div>
                            <div className={`w-[100%] h-56   bg-white rounded-lg border border-neutral-300 justify-start items-start gap-2.5 inline-flex ${errors.message ? "border-red-500" : "border-neutral-300"
                              }`}>
                              <div className="w-[100%] h-56  justify-start items-start gap-2.5 flex ">
                                <textarea
                                  value={message}
                                  onChange={(e) => setMessage(e.target.value)}
                                  placeholder={t(
                                    "contactus.Leave Us Your Message..."
                                  )}
                                  className="text-gray-400 p-5 w-[100%] h-[100%] text-[13px] font-semibold  rounded-lg border-none"
                                ></textarea>
                              </div>
                            </div>
                            {errors.message && (
                              <div className="text-red-500 text-xs">{errors.message}</div>
                            )}
                          </div>
                        </div>
                        <div className={` w-[100%] h-11 py-2.5 bg-blue-900 rounded-md justify-center items-center gap-2.5 inline-flex ${isSubmitting ? "bg-gray-400" : "bg-blue-600 text-white"
                          }`} >
                          <button
                            type="submit"
                            className="text-slate-200 text-sm font-bold  "
                            disabled={isSubmitting}
                          >
                            {isSubmitting
                              ? t("contactus.Sending...") // Change button text when submitting
                              : t("contactus.Send Message")}

                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </>
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
          <div
            className="flex-col   gap-[30px] inline-flex justify-center items-center"
            style={{ maxWidth: "80vw" }}
          >
            <div className="rounded-3xl shadow flex-col justify-center items-center gap-25 flex">
              <img
                className=" md:w-[100%] w-[100%]  h-[80%] rounded-3xl"
                src={contactImage}
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
                        {t("Email")}
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
                        {t("Phone")}
                      </div>
                      <div className=" text-slate-600 text-xs font-semibold ">
                        9620199884 | 9525500039
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  );
}
