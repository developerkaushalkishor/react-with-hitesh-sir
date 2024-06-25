import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";

export default function Roots() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
