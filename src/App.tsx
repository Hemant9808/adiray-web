import { Suspense, lazy} from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import loader from './assets/loader.gif';
import Chatbot from './pages/AI chatbot/Chatbot';

// Lazy-loaded components
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
const JoinUs = lazy(() => import('./pages/JoinUs'));

import CategoryLayout from './pages/products/CategoryLayout';
import ForgotPassword from './components/ForgetPassword';

function App() {

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
    { path: "/chatbot", element: <Chatbot /> },
    { path: "/sitemap.xml", element: <Chatbot /> }
  ]);

  return (
    <Suspense fallback={<div className="flex items-center justify-center h-screen"><img className="w-[60px]" src={loader} alt="Loading..." /></div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
