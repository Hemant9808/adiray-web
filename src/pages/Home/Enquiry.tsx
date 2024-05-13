import commodities from "../../assets/commodities.mp4";
import { useTranslation } from 'react-i18next';

const Enquiry = () => {
  const { t } = useTranslation();
   
  return (
    <div className="flex flex-col items-center justify-center h-[1000px] bg-cover bg-center  ">
      <video
        className=" relative inset-0 w-full h-[100%] object-cover opacity-100 "
        style={{ marginTop: "0px" }}
        autoPlay
        loop
        muted
      >
        <source src={commodities} type="video/mp4" />
      </video>

      <div className="absolute flex flex-col  items-center h-[1000px] backdrop-blur-md   bg-[#121e2c69]  w-full ">
        <div className="w-[80vw] max-w-[900px]" style={{marginTop: "160px",  }}>
          <h1 className=" font-bold font-Mont text-[clamp(50px,2.5vw,4rem)] mb-6 z-10 text-center  text-white">
          {t('enquiry.Get your')}{" "}
            <span style={{ color: "#ffd700" }}>{t('enquiry.Products Delivered')}
 </span>{" "}{t('enquiry.to your destination from India')}
{" "}
          </h1>
          {/* Form */}
        </div>
        <div
          className="bg-white p-8 rounded-lg shadow-xl max-w-screen-md w-5/6"
          style={{ width: "450px" }}
        >
          <div className="w-full flex items-center justify-center"></div>
          <form>
            <div className="mb-4 ">
              <label
                className="block text-sm font-semibold  mr-8"
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
            <div className="mb-4 ">
              <label
                className="block text-sm font-semibold mr-8"
                htmlFor="email"
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
                htmlFor="dropdown"
              >
                {t('enquiry.Catagory')}
              </label>
              <select
                id="dropdown"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none mb-4"
               
              >
                
                <option value="" className="text-gray-500">Select </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div>
              <label
                className="block text-sm font-semibold mb-1 mr-9"
                htmlFor="dropdown"
              >
                {t('enquiry.Product Name')}
              </label>
              <select
                id="dropdown"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none mb-4"
              >
                <option value="">{t('Select')}</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="mb-4 ">
              <label
                className=" text-sm font-semibold mb-1 mr-8 "
                htmlFor="mobile"
              >
                {t('enquiry.Quantity')}
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                type="number"
                id="Quantity"
                placeholder={t('Enter your quantity')}
              />
            </div>
            <div className="mb-4 ">
              <label
                className="block text-sm font-semibold mb-1 mr-8"
                htmlFor="address"
              >
                {t('enquiry.Additional Comments')}
              </label>
              <textarea
                className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                id=" comments"
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
