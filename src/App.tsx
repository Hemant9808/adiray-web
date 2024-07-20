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
