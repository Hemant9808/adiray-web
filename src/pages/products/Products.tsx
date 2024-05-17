import { Link } from "react-router-dom";
import port1 from "../../assets/port1.mp4";
import port2 from "../../assets/port2.mp4";
import port3 from "../../assets/port3.mp4";
import port4 from "../../assets/port4.mp4";
import { useState,useEffect } from "react";

import clothes from "../../assets/clothes.png";
import apple from "../../assets/apple.jpeg";
import { Button } from "../../components/Button";
import productmain from "../../assets/productmain.png";
import { useTranslation } from "react-i18next";

import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";
import image6 from "../../assets/image6.jpg";
import image7 from "../../assets/image7.jpg";
import image8 from "../../assets/image8.jpg";
import image9 from "../../assets/image9.jpg";
import image10 from "../../assets/image10.png";
import image11 from "../../assets/image11.png";
import image12 from "../../assets/image12.png";
import image13 from "../../assets/image13.jpg";
import image14 from "../../assets/image14.jpg";
import image15 from "../../assets/image15.jpg";
import image16 from "../../assets/image16.jpg";





const Products = () => {
  const { t } = useTranslation();

  const [imageIndex1, setImageIndex1] = useState(0);
  const [imageIndex2, setImageIndex2] = useState(0);
  const [imageIndex3, setImageIndex3] = useState(0);
  const [imageIndex4, setImageIndex4] = useState(0);
  
  const set1 = [image1, image2, image3, image4];
  const set2 = [image5, image6, image7, image8];
  const set3 = [image9, image10, image11, image12];
  const set4 = [image13, image14, image15, image16];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex1(prevIndex => (prevIndex + 1) % set1.length);
      setImageIndex2(prevIndex => (prevIndex + 1) % set2.length);
      setImageIndex3(prevIndex => (prevIndex + 1) % set3.length);
      setImageIndex4(prevIndex => (prevIndex + 1) % set4.length);
    }, 2000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);
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
            <img
              className="w-full h-full object-cover rounded-lg"
              src={set1[imageIndex1]}
              alt="Category 1"
            />
            <Button className="absolute bottom-0 bg-blue-700 text-white w-full ">
              Category 1
            </Button>
          </Link>

          <Link to="category" className="relative w-80 h-96">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={set2[imageIndex2]}
              alt="Category 2"
            />
            <Button className="absolute bottom-0 bg-blue-700 text-white w-full ">
              Category 2
            </Button>
          </Link>

          <Link to="category" className="relative w-80 h-96">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={set3[imageIndex3]}
              alt="Category 3"
            />
            <Button className="absolute bottom-0 bg-blue-700 text-white w-full ">
              Category 3
            </Button>
          </Link>

          <Link to="category" className="relative w-80 h-96">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={set4[imageIndex4]}
              alt="Category 4"
            />
            <Button className="absolute bottom-0 bg-blue-700 text-white w-full ">
              Category 4
            </Button>
          </Link>
        </div>
      </section>







      {/*<section className="flex justify-center items-center py-20 px-5">
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
      </section>*/}
    </section>
  );
};

export default Products;
