import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import commodities from "../../assets/commodities.mp4";
import { CategoryData } from "../products/Products";

interface ProductData {
  name: string;
}

const Enquiry = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [productName, setProductName] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categoryList, setCategoryList] = useState<CategoryData[] | undefined>();
  const [productList, setProductList] = useState<ProductData[] | undefined>([]);

  async function getCategoryList() {
    const response = await fetch('http://localhost:8080/api/category');
    const data = await response.json();
    setCategoryList(data);
  }

  async function getProductList() {
    try {

      // console.log("Getting Product list");
      // console.log('a'+categoryName+'e')
      const encodedCategoryName = await encodeURIComponent(categoryName);
      // console.log("Making fetch request to: " + `http://localhost:8080/api/category/product/name/${encodedCategoryName}`)
      const response = await fetch(`http://localhost:8080/api/category/product/name/${encodedCategoryName}`);
      const data = await response.json();
      setProductList(data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    if (categoryList && categoryList.length > 0 && categoryName !== '') {
      getProductList();
    }
  }, [categoryName, categoryList])

  useEffect(() => {
    getCategoryList();
  }, []);

  useEffect(() => {
    if (location.state && location.state.data) {
      const { productName, categoryName, categoryId } = location.state.data;
      setProductName(productName);
      setCategoryName(categoryName);
      setCategoryId(categoryId);
    }
  }, [location.state]);

  return (
    <div className="flex flex-col items-center justify-center h-[1000px] bg-cover bg-center  ">
      <video
        className="relative inset-0 w-full h-[100%] object-cover opacity-100"
        style={{ marginTop: "0px" }}
        autoPlay
        muted
        playsInline
        loop
        webkit-playsinline
      >
        <source src={commodities} type="video/mp4" />
      </video>

      <div className="absolute flex flex-col items-center h-[1000px] backdrop-blur-md bg-[#121e2c69] w-full">
        <div className="w-[80vw] max-w-[900px]" style={{ marginTop: "160px" }}>
          <h1 className="font-bold font-Mont text-[clamp(50px,2.5vw,4rem)] mb-6 z-10 text-center text-white">
            {t('enquiry.Get your')}{" "}
            <span style={{ color: "#ffd700" }}>
              {t('enquiry.Products Delivered')}
            </span>{" "}
            {t('enquiry.to your destination from India')}
          </h1>
          {/* Form */}
        </div>
        <div
          className="bg-white p-8 rounded-lg shadow-xl max-w-screen-md w-5/6"
          style={{ width: "450px" }}
        >
          <div className="w-full flex items-center justify-center"></div>
          <form>
            <div className="mb-4">
              <label
                className="block text-sm font-semibold mr-8"
                htmlFor="name"
              >
                {t('enquiry.Name')}:
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                type="text"
                id="name"
                placeholder={t('enquiry.Name')}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-semibold mr-8"
                htmlFor="contact"
              >
                {t('enquiry.Contact')}
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                type="contact"
                id="contact"
                placeholder={t('Phone')}
              />
            </div>

            <div>
              <label
                className="block text-sm font-semibold mb-1 mr-9"
                htmlFor="category"
              >
                {t('enquiry.Category')}
              </label>
              <select
                id="category"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none mb-4"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
              >
                <option value="" className="text-gray-500">Select</option>
                {categoryList && categoryList.map((category, index) => {
                  return (
                    <option key={index} value={category.name}>{category.name}</option>
                  )
                })}

              </select>
            </div>
            {
              categoryName !== '' &&
              <div>
                <label
                  className="block text-sm font-semibold mb-1 mr-9"
                  htmlFor="productName"
                >
                  {t('enquiry.Product Name')}
                </label>
                <select
                  id="productName"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none mb-4"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                >
                  <option value="">{t('Select')}</option>
                  {productList && productList.map((product, index) => {
                    return (
                      <option key={index} value={product.name}>{product.name}</option>
                    )
                  })}
                </select>
              </div>
            }
            <div className="mb-4">
              <label
                className="text-sm font-semibold mb-1 mr-8"
                htmlFor="quantity"
              >
                {t('enquiry.Quantity')}
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                type="number"
                id="quantity"
                placeholder={t('Enter your quantity')}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-semibold mb-1 mr-8"
                htmlFor="comments"
              >
                {t('enquiry.Additional Comments')}
              </label>
              <textarea
                className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                id="comments"
                placeholder={t('Enter your Comments')}
              ></textarea>
            </div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none ml-22"
              style={{ width: "100%" }}
              type="submit"
            >
              {t('enquiry.Send your query')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Enquiry;
