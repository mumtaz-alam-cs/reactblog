import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./common/components/layout/footer";
import Header from "./common/components/layout/header";
import Home from "./pages/home/components/index";
import Detail from "./pages/detail/components/index";
import Contact from "./pages/contact/components/index";
import AboutUs from "./pages/about/components/index";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/detail/:id" element={<Detail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
