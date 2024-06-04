
import { useState, useEffect } from "react";

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

          {/* <div className="relative w-80 h-96 flex">
            {imageSets.map((set: any, setIndex: any) => (
              <div key={setIndex} className="mb-8">
                <ProductCard images={set} />
              </div>
            ))}
          </div> */}

          {/* <Link to="category" className="relative w-80 h-96">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={set1[imageIndex % set1.length ]}
              alt="Category 1"
            />
            <Button className="absolute bottom-0 bg-blue-700 text-white w-full ">
              Category 1
            </Button>
          </Link>

          <Link to="category" className="relative w-80 h-96">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={set2[imageIndex % set1.length]}
              alt="Category 2"
            />
            <Button className="absolute bottom-0 bg-blue-700 text-white w-full ">
              Category 2
            </Button>
          </Link>

          <Link to="category" className="relative w-80 h-96">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={set3[imageIndex % set1.length]}
              alt="Category 3"
            />
            <Button className="absolute bottom-0 bg-blue-700 text-white w-full ">
              Category 3
            </Button>
          </Link>

          <Link to="category" className="relative w-80 h-96">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={set4[imageIndex % set1.length]}
              alt="Category 4"
            />
            <Button className="absolute bottom-0 bg-blue-700 text-white w-full ">
              Category 4
            </Button>
          </Link>   */}
        </div>
      </section>
    </section>
  );
};

export default Products;
