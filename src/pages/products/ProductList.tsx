import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom"

interface DataType {
    name: string;
}
export default function ProductList() {

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

    function handleEnquiry(productName: string) {
      const data = {
            productName: productName,
           categoryName: categoryName,
            categoryId: categoryId,
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
        <>
            {
                fetchError && (
                    <div className="flex items-center justify-center h-screen">
                        <h1 className="text-red-500">Error fetching data</h1>
                    </div>
                )
            }
            <div className="w-full mb-3">
                <input type="text" placeholder="Search" className="w-full py-2 px-4 rounded-lg"
                    value={query} onChange={(e) => setQuery(e.target.value)}
                />
            </div>
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
    )
}