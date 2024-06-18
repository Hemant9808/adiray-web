import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import commodities from "../../assets/commodities.mp4";
import { CategoryData } from "../products/Products";
import axiosInstance from "../../config/axios";

interface ProductData {
  name: string;
}

const Enquiry = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const location = useLocation();
  const [sentMsg, setSentMsg] = useState(false);
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

  async function getCategoryList() {
    const response = await axiosInstance.get("/category");
    const data = await response.data;
    setCategoryList(data);
    console.log(data)
  }

  async function getProductList() {
    try {
      // console.log("Getting Product list");
      // console.log('a'+categoryName+'e')  
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
      console.log('location state data', location.state.data);

      const { productName, categoryName, categoryId } = location.state.data;
      setProductName(productName);
      console.log(productList)
      setCategoryName(categoryName);
      setCategoryId(categoryId);
    }
  }, [location.state]);

  async function handleFormSubmit() {
    const response = await axiosInstance.post('/send-mail/enquiry', {
      name: name,
      productName: productName,
      productCategory: categoryName,
      productQuantity: productQuantity,
      country: country,
      contact: contact,
      message: message
    });
    const data = response.data;
    if (data.success) {
      setSentMsg(true);
      setTimeout(() => {
        navigate('/products');
      }, 3000)
    } else {
      setSentMsg(false);
      console.error(data.message);
    }
  }

  return (
    <div className="relative flex  bg-gray-800 flex-col items-center justify-center w-full min-h-screen bg-cover bg-center">
      <video
        // className="relative inset-0 w-full h-[100%] object-cover opacity-100"
        // style={{ marginTop: "0px" }}

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
          {!sentMsg &&
            <form onSubmit={(e) => { e.preventDefault(); handleFormSubmit(); }}>
              <div className="mb-4">
                <label
                  className="block text-sm font-semibold mb-1"
                  htmlFor="name"
                >
                  {t("enquiry.Name")}:
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t("enquiry.Name")}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-semibold mb-1"
                  htmlFor="contact"
                >
                  {t("enquiry.Contact")}
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                  type="text"
                  id="contact"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder={t("Phone")}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-semibold mb-1"
                  htmlFor="country"
                >
                  {t("enquiry.Country")}
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                  type="text"
                  id="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder={t("enquiry.Country")}
                />
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
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none mb-4"
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
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none mb-4"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                >
                  <option value="">{t("Select")}</option>
                  {productList && productList?.length > 0 &&
                    productList.map((product, index) => {
                      return (
                        <option key={index} value={product.name}>
                          {product.name}
                        </option>
                      );
                    })}
                </select>
              </div>


              <div className="mb-4">
                <label
                  className="text-sm font-semibold mb-1 mr-8"
                  htmlFor="quantity"
                >
                  {t("enquiry.Quantity")}
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                  type="number"
                  id="quantity"
                  value={productQuantity}
                  onChange={(e) => setProductQuantity(e.target.value)}
                  placeholder={t("Enter your quantity")}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-semibold mb-1"
                  htmlFor="comments"
                >
                  {t("enquiry.Additional Comments")}
                </label>
                <textarea
                  className="w-full h-48 px-3 py-2 border rounded-lg focus:outline-none"
                  id="comments"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t("Enter your Comments")}
                ></textarea>
              </div>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none w-full"
                type="submit"
              >
                {t("enquiry.Send your query")}
              </button>
            </form>
          }
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
  );
};

export default Enquiry;