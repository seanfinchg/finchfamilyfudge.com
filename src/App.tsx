import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import OrderSummary from "./pages/OrderSummary";
import About from "./pages/About";
import { CartProvider } from "./context/CartContext";
import { ToastProvider } from "./context/ToastContext";

const App: React.FC = () => {
  return (
    <ToastProvider>
      <CartProvider>
        <Router>
          <div className="flex flex-col min-h-screen w-full">
            <Navbar />
            <main className="flex-grow bg-darkBg w-full flex">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/about" element={<About />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/order-summary" element={<OrderSummary />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </ToastProvider>
  );
};

export default App;
