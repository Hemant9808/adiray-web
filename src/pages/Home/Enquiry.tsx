import commodities from "../../assets/commodities.mp4";
import { useTranslation } from 'react-i18next';

const Enquiry = () => {
  const { t } = useTranslation();

  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen bg-cover bg-center">
      <video
        className="absolute top-0 inset-0 w-full h-full object-cover opacity-70"
        autoPlay
        loop
        muted
        playsInline
        webkit-playsInline
      >
        <source src={commodities} type="video/mp4" />
      </video>

      <div className="relative flex flex-col items-center justify-center w-full h-full bg-[#12e2c69] bg-opacity-60 backdrop-blur-md p-4">
        <div className="w-[90%] max-w-[900px] mt-32 px-4 text-center">
          <h1 className="font-bold font-Mont text-[clamp(2rem,5vw,3.5rem)] mb-6  text-white">
            {t('enquiry.Get your')}{" "}
            <span style={{ color: "#ffd700" }}>{t('enquiry.Products Delivered')}</span>{" "}
            {t('enquiry.to your destination from India')}
          </h1>
        </div>

        <div className="w-[90%] max-w-[700px] bg-white p-6 rounded-lg shadow-xl mt-12 sm:mt-16 md:mt-20 lg:mt-24">
          <form>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1" htmlFor="name">
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
              <label className="block text-sm font-semibold mb-1" htmlFor="contact">
                {t('enquiry.Contact')}
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                type="text"
                id="contact"
                placeholder={t('Phone')}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1" htmlFor="category">
                {t('enquiry.Category')}
              </label>
              <select
                id="category"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none"
              >
                <option value="" className="text-gray-500">Select</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1" htmlFor="productName">
                {t('enquiry.Product Name')}
              </label>
              <select
                id="productName"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none"
              >
                <option value="">{t('Select')}</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1" htmlFor="quantity">
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
              <label className="block text-sm font-semibold mb-1" htmlFor="comments">
                {t('enquiry.Additional Comments')}
              </label>
              <textarea
                className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                id="comments"
                placeholder={t('Enter your Comments')}
              ></textarea>
            </div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none w-full"
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
