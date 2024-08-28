import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet";

const Layout = () => {
  return (
    <>
      <Helmet>
        <title>Adiray Global - Home</title>
        <meta
          name="description"
          content="Adiray Global is a leading company providing top-notch services and products worldwide."
        />
        <meta
          name="keywords"
          content="Adiray Global, services, products, worldwide, leading company"
        />
        <meta name="author" content="Adiray Global" />
        <meta property="og:title" content="Adiray Global - Home" />
        <meta
          property="og:description"
          content="Adiray Global is a leading company providing top-notch services and products worldwide."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.adirayglobal.com" />
      </Helmet>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
