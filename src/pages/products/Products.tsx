
import { Link } from "react-router-dom";

import { useState,useEffect } from "react";

import { Button } from "../../components/Button";

import productmain from "../../assets/productmain.png";
import CategoryCard from "../../components/CategoryCard";
import { useTranslation } from "react-i18next";



export interface CategoryData {
  id: string;
  name: string;
  imageUrl: [string];
}

const Products = () => {


  const [categoryList, setCategoryList] = useState<CategoryData[] | undefined>();

  async function getCategoryList() {
    const response = await fetch('http://localhost:8080/api/category');
    const data = await response.json();
    setCategoryList(data);
  }

<!--   const [imageIndex, setImageIndex] = useState(0);
  
  
  const set1 = [image1, image2, image3, image4];
  const set2 = [image5, image6, image7, image8];
  const set3 = [image9, image10, image11, image12];
  const set4 = [image13, image14, image15, image16]; -->


  // const imageSets = [set1, set2, set3, set4];

  useEffect(() => {

    getCategoryList();

<!--     const interval = setInterval(() => {
      setImageIndex(prevIndex => (prevIndex + 1));
      
    }, 4000); // Change image every 3 seconds

    return () => clearInterval(interval); -->

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
      
        <div className="flex flex-wrap gap-8 justify-center">

          {
            categoryList && categoryList.map((category, index) => {
              return (
                <CategoryCard key={index} categoryId={category.id} categoryName={category.name} imageUrl={category.imageUrl} />
              )
            })
          }


 
      {/* <div className="relative w-80 h-96 flex">
      {imageSets.map((set, setIndex) => (
        <div key={setIndex} className="mb-8">
          <ProductCard images={set} />
        </div>
         ))}
        </div> */}

<!--            <Link to="category" className="relative w-80 h-96">
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
          </Link>  -->

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
