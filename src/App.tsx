import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './components/Cart';
import OrderSummary from './pages/OrderSummary';
import { CartProvider } from './context/CartContext';
import { ToastProvider } from './context/ToastContext';

const App: React.FC = () => {
  return (
    <ToastProvider>
      <CartProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow bg-darkBg w-full">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
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
