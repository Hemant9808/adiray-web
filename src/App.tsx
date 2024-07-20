// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { Suspense, lazy,useState } from "react";
// import i18n from "./config/i18n"
// import loader from './assets/loader.gif'
// import Chatbot from "./pages/AI chatbot/Chatbot";

// const Enquiry = lazy(() => import("./pages/Home/Enquiry"));
// const Signup = lazy(() => import("./pages/Home/Signup"));
// const Login = lazy(() => import("./pages/Home/Login"));
// const Layout = lazy(() => import("./pages/Home/Layout"));
// const Home = lazy(() => import("./pages/Home/Home"));
// const Contact = lazy(() => import("./pages/Contact"));
// const Blog = lazy(() => import("./pages/Blogs/Blog"));
// const ProductList=lazy(() => import("./pages/products/ProductList"));
// const Products = lazy(() => import("./pages/products/Products"));
// const Blogpost = lazy(() => import("./pages/Blogs/Blogpost"));
// const MultiLang = lazy(() => import("./components/MultiLang"));
// const JoinUs = lazy(() => import("./pages/JoinUs"));

// import CategoryLayout from "./pages/products/CategoryLayout";
// import ForgotPassword from "./components/ForgetPassword";


// function App() {

//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Layout />,
//       children: [
//         {
//           path: "",
//           element: <Home />
//         },
//         {
//           path: "forgot-password",
//           element: <ForgotPassword />
//         },
//         {
//           path: "sign-up",
//           element: <Signup />
//         },
//         {
//           path: "login",
//           element: <Login />
//         },
//         {
//           path: "enquiry",
//           element: <Enquiry />
//         },
//         {
//           path: "contact",
//           element: <Contact />
//         },
//         {
//           path: "products/category",
//           element: <CategoryLayout />,
//           children: [
//             {
//               path: ':categoryId',
//               element: <ProductList />
//             }
//           ]
//         },
//         {
//           path: "products",
//           element: <Products />
//         },

//         {
//           path: "blog",
//           element: <Blog />
//         },
//         {
//           path: "blogpost/:id?",
//           element: <Blogpost />
//         },
//         {
//           path: "join-us",
//           element: <JoinUs />
//         },
//         {
//           path: "lang",
//           element: <MultiLang onSelectLanguage={function (_language: string): void {
//             throw new Error("Function not implemented.");
//           } }/>
//         }

//       ]
//     },
//     {
//       path: "/chatbot",
//       element: <Chatbot />,
//       children: [
//       ]
//     }
//   ])

//   const [showLanguageSelection, setShowLanguageSelection] = useState(true);
//   const [selectedLanguage, setSelectedLanguage] = useState<string>('');

//   const handleLanguageSelect = (language: string) => {
//     setSelectedLanguage(language);
//     setShowLanguageSelection(false);
//     i18n.changeLanguage(language).then(() => console.log("Language changed to", selectedLanguage)); //updated to log the new language
//     // Hide language selection popup after language selection
//   };


//   return (
//     <Suspense fallback={<div className="flex items-center justify-center h-screen"><img className="w-[60px]" src={loader} alt="Loading..." /></div>}> {/*fallback={"loading.."}*/}
//       {showLanguageSelection && <MultiLang onSelectLanguage={handleLanguageSelect} />}
//       {!showLanguageSelection && <RouterProvider router={router} />}
//     </Suspense>
//   )
// }

// export default App;


// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { Suspense, lazy, useState, useEffect } from "react";
// import i18n from "./config/i18n";
// import loader from './assets/loader.gif';
// import Chatbot from "./pages/AI chatbot/Chatbot";

// const Enquiry = lazy(() => import("./pages/Home/Enquiry"));
// const Signup = lazy(() => import("./pages/Home/Signup"));
// const Login = lazy(() => import("./pages/Home/Login"));
// const Layout = lazy(() => import("./pages/Home/Layout"));
// const Home = lazy(() => import("./pages/Home/Home"));
// const Contact = lazy(() => import("./pages/Contact"));
// const Blog = lazy(() => import("./pages/Blogs/Blog"));
// const ProductList = lazy(() => import("./pages/products/ProductList"));
// const Products = lazy(() => import("./pages/products/Products"));
// const Blogpost = lazy(() => import("./pages/Blogs/Blogpost"));
// const MultiLang = lazy(() => import("./components/MultiLang"));
// const JoinUs = lazy(() => import("./pages/JoinUs"));

// import CategoryLayout from "./pages/products/CategoryLayout";
// import ForgotPassword from "./components/ForgetPassword";

// function App() {

//   const [showLanguageSelection, setShowLanguageSelection] = useState(true);
//   const [selectedLanguage, setSelectedLanguage] = useState<string>('');

//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Layout />,
//       children: [
//         { path: "", element: <Home /> },
//         { path: "forgot-password", element: <ForgotPassword /> },
//         { path: "sign-up", element: <Signup /> },
//         { path: "login", element: <Login /> },
//         { path: "enquiry", element: <Enquiry /> },
//         { path: "contact", element: <Contact /> },
//         {
//           path: "products/category",
//           element: <CategoryLayout />,
//           children: [{ path: ':categoryId', element: <ProductList /> }]
//         },
//         { path: "products", element: <Products /> },
//         { path: "blog", element: <Blog /> },
//         { path: "blogpost/:id?", element: <Blogpost /> },
//         { path: "join-us", element: <JoinUs /> },
//       ]
//     },
//     { path: "/chatbot", element: <Chatbot /> }
//   ]);

//   useEffect(() => {
//     // Check if there's a saved language in sessionStorage
//     const storedLanguage = sessionStorage.getItem('language');
//     if (storedLanguage) {
//       setSelectedLanguage(storedLanguage);
//       i18n.changeLanguage(storedLanguage).then(() => {
//         console.log("Language changed to", storedLanguage);
//       });
//       setShowLanguageSelection(false);
//     }
//   }, []);

//   const handleLanguageSelect = (language: string) => {
//     setSelectedLanguage(language);
//     setShowLanguageSelection(false);
//     i18n.changeLanguage(language).then(() => {
//       console.log("Language changed to", language);
//       sessionStorage.setItem('language', language);
//     });
//   };

//   return (
//     <Suspense fallback={<div className="flex items-center justify-center h-screen"><img className="w-[60px]" src={loader} alt="Loading..." /></div>}>
//       {showLanguageSelection && <MultiLang onSelectLanguage={handleLanguageSelect} />}
//       {!showLanguageSelection && <RouterProvider router={router} />}
//     </Suspense>
//   );
// }

// export default App;



import { Suspense, lazy, useState, useEffect } from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import i18n from './config/i18n';
import loader from './assets/loader.gif';
import Chatbot from './pages/AI chatbot/Chatbot';

const Enquiry = lazy(() => import('./pages/Home/Enquiry'));
const Signup = lazy(() => import('./pages/Home/Signup'));
const Login = lazy(() => import('./pages/Home/Login'));
const Layout = lazy(() => import('./pages/Home/Layout'));
const Home = lazy(() => import('./pages/Home/Home'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blogs/Blog'));
const ProductList = lazy(() => import('./pages/products/ProductList'));
const Products = lazy(() => import('./pages/products/Products'));
const Blogpost = lazy(() => import('./pages/Blogs/Blogpost'));
const MultiLang = lazy(() => import('./components/MultiLang'));
const JoinUs = lazy(() => import('./pages/JoinUs'));

import CategoryLayout from './pages/products/CategoryLayout';
import ForgotPassword from './components/ForgetPassword';

function App() {
  const [showLanguageSelection, setShowLanguageSelection] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('');

  useEffect(() => {
    // Check sessionStorage for the language selection
    const storedLanguage = sessionStorage.getItem('language');

    if (storedLanguage) {
      // Apply stored language and hide language selection screen
      setSelectedLanguage(storedLanguage);
      i18n.changeLanguage(storedLanguage).then(() => console.log("Language changed to", storedLanguage));
      setShowLanguageSelection(false);
    } else {
      // Show language selection if no language is stored
      setShowLanguageSelection(true);
    }
  }, []);

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    sessionStorage.setItem('language', language); // Save the selected language to sessionStorage
    i18n.changeLanguage(language).then(() => console.log("Language changed to", language));
    setShowLanguageSelection(false); // Hide language selection screen
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        { path: "forgot-password", element: <ForgotPassword /> },
        { path: "sign-up", element: <Signup /> },
        { path: "login", element: <Login /> },
        { path: "enquiry", element: <Enquiry /> },
        { path: "contact", element: <Contact /> },
        {
          path: "products/category",
          element: <CategoryLayout />,
          children: [{ path: ':categoryId', element: <ProductList /> }]
        },
        { path: "products", element: <Products /> },
        { path: "blog", element: <Blog /> },
        { path: "blogpost/:id?", element: <Blogpost /> },
        { path: "join-us", element: <JoinUs /> },
      ]
    },
    { path: "/chatbot", element: <Chatbot /> }
  ]);

  return (
    <Suspense fallback={<div className="flex items-center justify-center h-screen"><img className="w-[60px]" src={loader} alt="Loading..." /></div>}>
      {showLanguageSelection && <MultiLang onSelectLanguage={handleLanguageSelect} />}
      {!showLanguageSelection && <RouterProvider router={router} />}
    </Suspense>
  );
}

export default App;
