import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import { useState } from "react";
import i18n from "./config/i18n"
import loader from './assets/loader.gif'
import Chatbot from "./pages/AI chatbot/Chatbot";
const Enquiry = lazy(() => import("./pages/Home/Enquiry"));
const Signup = lazy(() => import("./pages/Home/Signup"));
const Login = lazy(() => import("./pages/Login"));
const Layout = lazy(() => import("./pages/Home/Layout"));
const Home = lazy(() => import("./pages/Home/Home"));
const Layouts = lazy(() => import("./pages/AI chatbot/Chatbot"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blogs/Blog"));
const Category = lazy(() => import("./pages/products/CategoryLayout"));
const Products = lazy(() => import("./pages/products/Products"));
const Blogpost = lazy(() => import("./pages/Blogs/Blogpost"));
const MultiLang = lazy(() => import("./components/MultiLang"));


import CategoryLayout from "./pages/products/CategoryLayout";
import ProductList from "./pages/products/ProductList";



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "sign-up",
          element: <Signup />
        },
        {
          path: "login",
          element: <Login />
        },
        {
          path: "enquiry",
          element: <Enquiry />
        },
        {
          path: "contact",
          element: <Contact />
        },
        {
          path: "products/category",
          element: <CategoryLayout />,
          children: [
            {
              path: ':categoryId',
              element: <ProductList />
            }
          ]
        },
        {
          path: "products",
          element: <Products />
        },

        {
          path: "blog",
          element: <Blog />
        },
        {
          path: "blog/blogpost/:id?",
          element: <Blogpost />
        },
        {
          path: "lang",
          element: <MultiLang/>
        }

      ]
    },
    {
      path: "/chatbot",
      element: <Chatbot />,
      children: [
      ]
    }
  ])

  const [showLanguageSelection, setShowLanguageSelection] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('');

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    setShowLanguageSelection(false);
    i18n.changeLanguage(language).then(() => console.log("Language changed to", selectedLanguage)); // Hide language selection popup after language selection
  };


  return (
    <Suspense fallback={<div className="flex items-center justify-center h-screen"><img className="w-[60px]" src={loader} alt="Loading..." /></div>}> {/*fallback={"loading.."}*/}
      {showLanguageSelection && <MultiLang onSelectLanguage={handleLanguageSelect} />}
      {!showLanguageSelection && <RouterProvider router={router} />}
    </Suspense>
  )
}

export default App;