// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import About from "./pages/About"; // Ensure About page is included

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-darkBg text-lightText">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<ProductPage />} />{" "}
            {/* Changed from :id to :slug */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/about" element={<About />} />{" "}
            {/* Added About route */}
            {/* Add a catch-all route for 404 pages if desired */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
