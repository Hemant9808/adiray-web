
import { useState, useEffect } from "react";

import image1 from "../../new_assets/image1.webp";
import image2 from "../../new_assets/image2.webp";
import image3 from "../../new_assets/image3.webp";
import image4 from "../../new_assets/image4.webp";
import image5 from "../../new_assets/image5.webp";
import image6 from "../../new_assets/image6.webp";
import image7 from "../../new_assets/image7.webp";
import image8 from "../../new_assets/image8.webp";
import image9 from "../../new_assets/image9.webp";
import image10 from "../../new_assets/image10.webp";
import image11 from "../../new_assets/image11.webp";
import image12 from "../../new_assets/image12.webp";
import image13 from "../../new_assets/image13.webp";
import image14 from "../../new_assets/image14.webp";
import image15 from "../../new_assets/image15.webp";
import image16 from "../../new_assets/image16.webp";


import productmain from "../../new_assets/productmain.webp";
import CategoryCard from "../../components/CategoryCard";
import { useTranslation } from "react-i18next";
import Spinner from "../../components/Spinner";

export interface CategoryData {
  id: string;
  name: string;
  imageUrl: [string];
}

const Products = () => {
  const [categoryList, setCategoryList] = useState<
    CategoryData[] | undefined
  >();

  async function getCategoryList() {
    const response = await fetch("https://node-js-jwt-auth.onrender.com/api/category");
    const data = await response.json();
    setCategoryList(data);
    console.log(categoryList);
  }

  const [imageIndex, setImageIndex] = useState(0);


  const set1 = [image1, image2, image3, image4];
  const set2 = [image5, image6, image7, image8];
  const set3 = [image9, image10, image11, image12];
  const set4 = [image13, image14, image15, image16];


  const imageSets = [set1, set2, set3, set4];

  useEffect(() => {
    getCategoryList();

    const interval = setInterval(() => {
      setImageIndex(prevIndex => (prevIndex + 1));

    }, 4000); // Change image every 3 seconds

    return () => clearInterval(interval);

  }, []);

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
        <div className="flex flex-wrap gap-8 justify-center min-h-screen">
          {categoryList && categoryList?.length !== 0 ?
            (categoryList.map((category, index) => (
              <CategoryCard
                key={index}
                categoryId={category.id}
                categoryName={category.name}
                imageUrl={category.imageUrl}
              />
            ))) : <Spinner />}
        </div>
      </section>
    </section>
  );
};

export default Products;
