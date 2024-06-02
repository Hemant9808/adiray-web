import React, { useEffect, useState } from "react";
import productmain from "../../assets/productmain.png"
import { Link, Outlet } from "react-router-dom";
import { CategoryData } from "./Products";
import { useLocation, useNavigate, useParams } from "react-router-dom"
import Spinner from "../../components/Spinner";
import axiosInstance from "../../config/axios";



export default function CategoryLayout() {
  const inputClasses = "pl-10 pr-4 w-[100%] py-3 shadow-md text-md  rounded-lg";
  const [category, setCategory] = useState<CategoryData[] | undefined>();
  const [filteredCategory, setFilteredCategory] = useState<CategoryData[] | undefined>();
  const [searchQuery, setSearchQuery] = useState('');
  const [noCategoryFound, setNoCategoryFound] = useState(false);
  const [noProductFound, setNoProductFound] = useState(false);
  const [categoryLoading, setCategoryLoading] = useState(true);
  const [productLoading, setProductLoading] = useState(true);

  async function getCategoryList() {
    setCategoryLoading(true);
    const response = await fetch('https://node-js-jwt-auth.onrender.com/api/category');
    const data = await response.json();
    setCategoryLoading(false);
    setCategory(data);
  }

  useEffect(() => {
    getCategoryList();
  }, []);

  async function getProductByName() {
    try {
      setProductLoading(true);
      const response = await axiosInstance.post('/category/product/query', {
        query: searchQuery
      });
      const data = response.data;
      setProductLoading(false);
      if (data.success) {
        console.log('data', data);
        setFilteredProducts(data.products);
        console.log("woejfowejfowejfioewjfeowijfoewjfwoiefjoaiwejfoiewjfowejfweoifj", data.categories);
        // setFilteredCategory(data.categories);
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
    //Get Product List based on categroyId if user cancels search
    if (searchQuery === '') {
      getProductList();
    }
    //Retrun if categories haven't already been fetched
    if (!category) {
      return;
    }
    const filtered = category.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())// Filter category based on query
    );
    if (filtered.length === 0) {
      setNoCategoryFound(true);
    }
    else {
      setNoCategoryFound(false);
    }
    getProductByName();
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
      setProductLoading(true);
      if (!categoryId)
        return;
      const response = await axiosInstance.get(`/category/product/${categoryId}`);
      const data = response.data;
      setProductLoading(false);
      setData(data.products);
      setCategoryName(data.name);
    } catch (err) {
      console.error(err);
      setFetchError(true);
    }
  }

  useEffect(() => {
    setFilteredProducts([]);
    getProductList();
  }, [categoryId]);

  useEffect(() => {
    const { categoryId } = params;
    setCategoryId(categoryId);
  }, [location])

  const navigate = useNavigate();

  async function handleEnquiry(productName: string) {
    const response = await axiosInstance.post('/category/categorybyproduct', {
      productName: productName,
    });
    const res = response.data;
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



          <Link to="/products"><button className="w-full text-[14px]  flex mb-3 text-red-400 mt-9 mb-8"
          >
            All Categories
          </button></Link>
          <button className="w-full text-[19px] font-semibold flex mb-2" >

            CATAGORIES
          </button>
          <div className="p-3 min-h-[400px]">
            {noCategoryFound && <div className="text-center">No Category Found</div>}
            {filteredCategory &&
              filteredCategory.length > 0 && filteredCategory.map((data, index) => {
                return (
                  <Link key={index} to={data.id} className="w-full text-slate-500 border-none rounded-md  text-[17px] mb-3 flex">
                    {" "}
                    {data.name}
                  </Link>
                )
              })

            }

            {
              productLoading && <div className="mt-8">
                <Spinner />
              </div>
            }
          </div>
        </div>
        <div className="w-full  rounded-md border border-solid md:ml-8">
          <div className="h-[70px] bg-slate-300 rounded-md flex items-center justify-between md:p-6 p-3">
            <div className=" flex  gap-6">

              <div className="font-bold text-sm w-10 ">S No.</div>
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

            {filteredProducts?.length > 0 && filteredProducts.map((item, index) => (
              <div className={`w-full min-h-[55px] ${index % 2 === 0 ? "bg-gray-100" : "bg-white"} flex items-center justify-between md:p-6 p-3`} key={index}>
                <div className=" flex gap-6">
                  <h4 className="w-10">{index + 1}</h4>
                  <div className="">{item.name}</div>
                </div>
                <button type="button" onClick={() => { handleEnquiry(item.name) }} className="bg-blue-800 w-[70px]  text-white rounded-md text-[14px] p-1">
                  Enquiry
                </button>
              </div>
            ))


            }
            {productLoading && <div className="mt-8"><Spinner /></div>}
          </>
        </div>
      </div>
    </div>
  );
}

