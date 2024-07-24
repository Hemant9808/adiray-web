import { useState, useEffect } from "react";
import productmain from "../../assets/productmain.png";
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

  const [_imageIndex, setImageIndex] = useState(0);

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
