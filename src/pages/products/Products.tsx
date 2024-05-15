import { Link } from "react-router-dom";
import port1 from "../../assets/port1.mp4";
import port2 from "../../assets/port2.mp4";
import port3 from "../../assets/port3.mp4";
import port4 from "../../assets/port4.mp4";

import clothes from "../../assets/clothes.png";
import apple from "../../assets/apple.jpeg";
import { Button } from "../../components/Button";
import productmain from "../../assets/productmain.png";
import { useTranslation } from "react-i18next";

const Products = () => {
  const { t } = useTranslation();
  return (
    <section className="pt-[12vh]">
      <div className="relative h-64 overflow-hidden group">
        <img
          className="object-cover h-full w-full group-hover:scale-150 ease-in-out duration-1000"
          src={productmain}
          alt="clothes"
        />
        <div className="absolute inset-0 overflow-hidden bg-transparent  z-10  flex items-center justify-center">
          <h1 className="text-[clamp(30px,2.5vw,4rem)] text-white font-Mont font-semibold">
            {t("Our")} <span className="text-[#FFC900]">{t("Products")}</span>
          </h1>
        </div>
      </div>

      <section className="flex justify-center items-center py-20 px-5">
        <div className="flex flex-wrap gap-8 justify-center">
          <Link to="category" className="relative w-80 h-96">
            <video
              className="w-full h-full object-cover rounded-lg"
              width="320"
              height="240"
              autoPlay
              loop
              muted
            >
              <source src={port1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <Button className="absolute bottom-0 bg-blue-700 text-white w-full ">
              Category 1
            </Button>
          </Link>

          <Link to="category" className="relative w-80 h-96">
          <video
              className="w-full h-full object-cover rounded-lg"
              width="320"
              height="240"
              autoPlay
              loop
              muted
            >
              <source src={port2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <Button className="absolute bottom-0 bg-blue-700 text-white w-full ">
              Category 2
            </Button>
          </Link>

          <Link to="category" className="relative w-80 h-96">
          <video
              className="w-full h-full object-cover rounded-lg"
              width="320"
              height="240"
              autoPlay
              loop
              muted
            >
              <source src={port3} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <Button className="absolute bottom-0 bg-blue-700 text-white w-full ">
              Category 3
            </Button>
          </Link>

          <Link to="category" className="relative w-80 h-96">
          <video
              className="w-full h-full object-cover rounded-lg"
              width="320"
              height="240"
              autoPlay
              loop
              muted
            >
              <source src={port4} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <Button className="absolute bottom-0 bg-blue-700 text-white w-full ">
              Category 4
            </Button>
          </Link>
        </div>
      </section>
    </section>
  );
};

export default Products;
