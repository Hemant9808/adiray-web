import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import commodities from "../../new_assets/commodities.mp4";
import { CategoryData } from "../products/Products";
import axiosInstance from "../../config/axios";
import { Helmet } from "react-helmet";
import { z } from 'zod'
interface ProductData {
  name: string;
}

const EnquirySchema = z.object({
  name: z.string().min(1, "Name is required"),
  contact: z
    .string()
    .min(1, "Contact is required")
    .refine(
      (val) => /\S+@\S+\.\S+/.test(val) || /^[0-9]{10,}$/.test(val),
      "Provide a valid email or phone number"
    ),
  country: z.string().min(1, "Country is required"),
  categoryName: z.string().min(1, "Category is required"),
  productName: z.string().min(1, "Product Name is required"),
  productQuantity: z
    .number()
    .positive("Quantity must be a positive number")
    .refine((val) => val > 0, "Quantity is required"),
  message: z.string().min(1, "Additional comments are required"),
});

const Enquiry = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const location = useLocation();
  const [sentMsg, setSentMsg] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [productName, setProductName] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categoryList, setCategoryList] = useState<
    CategoryData[] | undefined
  >();
  const [productList, setProductList] = useState<ProductData[] | undefined>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function getCategoryList() {
    const response = await axiosInstance.get("/category");
    const data = await response.data;
    setCategoryList(data);
    console.log(data);
  }

  async function getProductList() {
    try {
      const encodedCategoryName = await encodeURIComponent(categoryName);
      const response = await axiosInstance.get(
        `/category/product/name/${encodedCategoryName}`
      );
      const data = await response.data;
      setProductList(data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    if (categoryList && categoryList.length > 0 && categoryName !== "") {
      getProductList();
    }
  }, [categoryName, categoryList]);

  useEffect(() => {
    getCategoryList();
  }, []);

  useEffect(() => {
    if (location.state && location.state.data) {
      console.log("location state data", location.state.data);

      const { productName, categoryName, categoryId } = location.state.data;
      setProductName(productName);
      console.log(productList);
      setCategoryName(categoryName);
      setCategoryId(categoryId);
    }
  }, [location.state]);

  async function handleFormSubmit() {

    const formData = {
      name,
      productName,
      productCategory: categoryName,
      productQuantity: productQuantity === "" ? 0 : Number(productQuantity),
      country,
      contact,
      message,
    };


    try {
      
      EnquirySchema.parse(formData);
      setErrors({}); 

      // Send the API request
      const response = await axiosInstance.post("/send-mail/enquiry", formData);
      const data = response.data;

      if (data.success) {
        setSentMsg(true); 
        setTimeout(() => {
          navigate("/products"); 
        }, 3000);
      } else {
        setSentMsg(false); 
        console.error(data.message);
      }
    } catch (validationError) {
     
      if (validationError instanceof z.ZodError) {
        const fieldErrors = validationError.flatten().fieldErrors;
        setErrors({
          name: fieldErrors.name?.[0] || "",
          productName: fieldErrors.productName?.[0] || "",
          productCategory: fieldErrors.productCategory?.[0] || "",
          productQuantity: fieldErrors.productQuantity?.[0] || "",
          country: fieldErrors.country?.[0] || "",
          contact: fieldErrors.contact?.[0] || "",
          message: fieldErrors.message?.[0] || "",
        });
      }
    } finally {
      setIsSubmitting(false);
    }

  }

  return (
    <>
      <Helmet>
        <title>Adiray Global | Enquiry</title>
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
      <div className="relative flex  bg-gray-800 flex-col items-center justify-center w-full min-h-screen bg-cover bg-center">
        <video
          className="absolute top-0   inset-0 w-full h-full object-cover opacity-70"
          autoPlay
          playsInline
          muted
          webkit-playsInline
        >
          <source src={commodities} type="video/mp4" />
        </video>

        <div className="relative flex flex-col   items-center justify-center  bg-opacity-60 backdrop-blur-md w-full h-full  p-4">
          <div className="w-[90%] max-w-[900px] mt-40 sm:mt-40 mt-[28%] px-4 text-center">
            <h1 className="font-bold font-Mont text-[clamp(2rem,5vw,3.5rem)] mb-6 text-white">
              {t("enquiry.Get your")}{" "}
              <span style={{ color: "#ffd700" }}>
                {t("enquiry.Products Delivered")}
              </span>{" "}
              {t("enquiry.to your destination from India")}
            </h1>
          </div>

          <div className="w-[90%] max-w-[700px] bg-white p-6 rounded-lg shadow-xl mb-5  sm:mt-10 md:mt-10 lg:mt-15">
            {!sentMsg && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleFormSubmit();
                }}
              >
                <div className="mb-4">
                  <label
                    className="block text-sm font-semibold mb-1"
                    htmlFor="name"
                  >
                    {t("enquiry.Name")}:
                  </label>
                  <input
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none ${errors.name ? "border-red-500" : "border-gray-300"
                      }`}
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t("enquiry.Name")}
                  />
                  {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm font-semibold mb-1"
                    htmlFor="contact"
                  >
                    {t("enquiry.Contact")}
                  </label>
                  <input
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none ${errors.contact ? "border-red-500" : "border-gray-300"
                      }`}
                    type="text"
                    id="contact"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder={t("Phone")}
                  />
                  {errors.contact && (
                    <p className="text-red-500 text-xs">{errors.contact}</p>
                  )}
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm font-semibold mb-1"
                    htmlFor="country"
                  >
                    {t("enquiry.Country")}
                  </label>
                  <input
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none ${errors.country ? "border-red-500" : "border-gray-300"
                      }`}
                    type="text"
                    id="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder={t("enquiry.Country")}
                  />
                  {errors.country && (
                    <p className="text-red-500 text-xs">{errors.country}</p>
                  )}
                </div>

                <div>
                  <label
                    className="block text-sm font-semibold mb-1 mr-9"
                    htmlFor="category"
                  >
                    {t("enquiry.Category")}
                  </label>
                  <select
                    id="category"
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none ${errors.categoryName ? "border-red-500" : "border-gray-300"
                      }`}
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                  >
                    <option value="" className="text-gray-500">
                      {t("Select")}
                    </option>
                    {categoryList &&
                      categoryList.map((category, index) => {
                        return (
                          <option key={index} value={category.name}>
                            {category.name}
                          </option>
                        );
                      })}
                  </select>
                  {errors.categoryName && (
                    <p className="text-red-500 text-xs">{errors.categoryName}</p>
                  )}
                </div>

                <div>
                  <label
                    className="block text-sm font-semibold mb-1 mr-9"
                    htmlFor="productName"
                  >
                    {t("enquiry.Product Name")}
                  </label>
                  <select
                    id="productName"
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none ${errors.productName ? "border-red-500" : "border-gray-300"
                      }`}
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                  >
                    <option value="">{t("Select")}</option>
                    {productList &&
                      productList?.length > 0 &&
                      productList.map((product, index) => {
                        return (
                          <option key={index} value={product.name}>
                            {product.name}
                          </option>
                        );
                      })}
                  </select>
                  {errors.productName && (
                    <p className="text-red-500 text-xs">{errors.productName}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    className="text-sm font-semibold mb-1 mr-8"
                    htmlFor="quantity"
                  >
                    {t("enquiry.Quantity")}
                  </label>
                  <input
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none ${errors.productQuantity ? "border-red-500" : "border-gray-300"
                      }`}
                    type="number"
                    id="quantity"
                    value={productQuantity}
                    onChange={(e) => setProductQuantity(e.target.value)}
                    placeholder={t("Enter your quantity")}
                  />
                  {errors.productQuantity && (
                    <p className="text-red-500 text-xs">{errors.productQuantity}</p>
                  )}
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm font-semibold mb-1"
                    htmlFor="comments"
                  >
                    {t("enquiry.Additional Comments")}
                  </label>
                  <textarea
                    className={`w-full h-48 px-3 py-2 border rounded-lg focus:outline-none ${errors.message ? "border-red-500" : "border-gray-300"
                      }`}
                    id="comments"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t("Enter your Comments")}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-xs">{errors.message}</p>
                  )}
                </div>
                <button
                  className={`bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none w-full ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t("enquiry.Submitting...") : t("enquiry.Send your query")}
                </button>
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
        </div>
      </div>
    </>
  );
};

export default Enquiry;
