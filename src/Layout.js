import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  const name={
    person:'admin'
  }
  return (
    <>
      <Header name ={name} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
