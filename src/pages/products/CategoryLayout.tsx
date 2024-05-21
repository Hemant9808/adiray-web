import React, { useEffect, useState } from "react";
import productmain from "../../assets/productmain.png"
import { Link, Outlet } from "react-router-dom";
import { CategoryData } from "./Products";
import { useLocation, useNavigate, useParams } from "react-router-dom"



export default function CategoryLayout() {
  const inputClasses = "pl-10 pr-4 w-[100%] py-3 shadow-md text-md  rounded-lg";
  const [category, setCategory] = useState<CategoryData[] | undefined>();
  const [filteredCategory, setFilteredCategory] = useState<CategoryData[] | undefined>();
  const [searchQuery, setSearchQuery] = useState('');

  async function getCategoryList() {
    const response = await fetch('http://localhost:8080/api/category');
    const data = await response.json();
    setCategory(data);
  }

  useEffect(() => {
    getCategoryList();
  }, []);

  async function getProductByName() {
    try {
      const response = await fetch(`http://localhost:8080/api/category/product/query`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: searchQuery
        })
      });
      const data = await response.json();
      if (data.success) {
        console.log('data', data);
        setFilteredProducts(data.products);
        console.log("woejfowejfowejfioewjfeowijfoewjfwoiefjoaiwejfoiewjfowejfweoifj", data.categories);
        setFilteredCategory(data.categories);
        console.log('filteredCategory', filteredCategory);
      }
      else {
        console.log(data.message);
        console.log(data.error);
      }
    } catch (err) {
      console.error(err);
      setFetchError(true);
    }
  }

  //Query Handler
  useEffect(() => {
    if (searchQuery === '') {
      getProductList();
    }
    console.log('searchQuery: ', searchQuery);

    if (!category) {
      return;
    }
    console.log('category', category);
    const filtered = category.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (filtered === undefined)
      return;
    if (filtered.length === 0) {
      if (!searchQuery) {
        return;
      }
      getProductByName();
    }
    setFilteredCategory(filtered);
    console.log('filteredCategory', filtered);
  }, [category, searchQuery]);


  interface DataType {
    name: string;
  }

  const [categoryId, setCategoryId] = useState<string | undefined>();
  const [data, setData] = useState<DataType[] | undefined>();
  const [fetchError, setFetchError] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const location = useLocation();
  const params = useParams();
  const [filteredProducts, setFilteredProducts] = useState<DataType[]>([]);
  const [query, setQuery] = useState('');

  async function getProductList() {
    try {
      if (!categoryId)
        return;
      const response = await fetch(`http://localhost:8080/api/category/product/${categoryId}`);
      const data = await response.json();
      setData(data.products);
      setCategoryName(data.name);
    } catch (err) {
      console.error(err);
      setFetchError(true);
    }
  }

  useEffect(() => {
    getProductList();
  }, [categoryId]);

  useEffect(() => {
    const { categoryId } = params;
    setCategoryId(categoryId);
  }, [location])

  const navigate = useNavigate();

  async function handleEnquiry(productName: string) {
    const response = await fetch('http://localhost:8080/api/category/categorybyproduct', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        productName: productName,
      })
    });
    const res = await response.json();
    const data = {
      productName: productName,
      categoryName: res.categoryName,
      categoryId: res.categoryId,
    }
    navigate('/enquiry', { state: { data } });
  }

  useEffect(() => {
    if (data) {
      const filtered = data.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [data, query]);

  return (
    <div className="w-full h-auto flex flex-col justify-center items-center mb-4 ">
      <div className="relative h-64 w-full overflow-hidden group mb-20 mt-[100px]">
        <img className="object-cover h-full w-full group-hover:scale-150 ease-in-out duration-1000" src={productmain} alt="clothes" />
        <div className="absolute inset-0 overflow-hidden bg-transparent  z-10  flex items-center justify-center">
          <h1 className="text-[clamp(30px,2.5vw,4rem)] text-white font-Mont font-semibold">
            Our <span className="text-[#FFC900]">Products</span>
          </h1>
        </div>
      </div>

      <div className="w-[80vw] h-auto   flex mb-20">
        <div className="w-[30%] min-w-[200px] h-auto bg-gray-100  mr-4 hidden md:block p-4 rounded-lg ">

          <div className="relative w-[90%] flex items-center ">
            <input type="text" placeholder="Search..." className={inputClasses} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            <svg className="w-4 h-4 absolute left-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>



          <button className="w-full text-[14px]  flex mb-3 text-red-400 mt-9 mb-8"
          >
            All Categories
          </button>
          <button className="w-full text-[19px] font-semibold flex mb-2" >

            CATAGORIES
          </button>
          <div className="p-3">
            {filteredCategory && filteredCategory.map((data, index) => {
              return (
                <Link key={index} to={data.id} className="w-full text-slate-500 border-none rounded-md  text-[17px] mb-3 flex">
                  {" "}
                  {data.name}
                </Link>
              )
            })}
          </div>
        </div>
        <div className="w-full  rounded-md border border-solid md:ml-8">
          <div className="h-[70px] bg-slate-300 rounded-md flex items-center justify-between md:p-6 p-3">
            <div className=" flex  gap-6">

              <h4 className="font-bold text-sm ">Sl No.</h4>
              <div className=" font-bold text-sm">Product Name</div>
            </div>
            <div className=" w-[70px] md:mr-0 mr-4   rounded-md font-bold text-sm ">
              Enquiry
            </div>
          </div>

          <>
            {
              fetchError && (
                <div className="flex items-center justify-center h-screen">
                  <h1 className="text-red-500">Error fetching data</h1>
                </div>
              )
            }

            {filteredProducts && filteredProducts.map((item, index) => (
              <div
                className={`w-full h-[55px] ${index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } flex items-center justify-between  p-7`}
                key={index}
              >
                <div className=" flex md:gap-14 gap-10">

                  <h4>{index + 1}</h4>
                  <div className="">{item.name}</div>
                </div>
                <button type="button" onClick={() => { handleEnquiry(item.name) }} className="bg-blue-800 w-[70px]  text-white rounded-md text-[14px] p-1">
                  Enquiry
                </button>
              </div>
            ))}
          </>
        </div>
      </div>
    </div>
  );
}

