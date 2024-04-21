import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import Chatbot from "./pages/AI chatbot/Chatbot";
const Enquiry = lazy(() => import("./pages/Home/Enquiry"));
const Signup = lazy(() => import("./pages/Home/Signup"));
const Login = lazy(() => import("./pages/Login"));
const Layout = lazy(() => import("./pages/Home/Layout"));
const Home = lazy(() => import("./pages/Home/Home"));
const Layouts = lazy(() => import("./pages/AI chatbot/Chatbot"));
const Contact = lazy(() => import("./pages/Contact"));


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

  return (
    <Suspense fallback={"loading.."}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App;