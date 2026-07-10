import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Enquiry from "./pages/Enquiry";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
    <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enquiry" element={<Enquiry />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
