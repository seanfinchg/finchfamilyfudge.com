import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../components/PageTitle'; // Import PageTitle

const OrderSummary: React.FC = () => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const generatePaymentNote = () => {
    return cartItems
      .map(item => `${item.name} (${item.size.label})`)
      .join(', ');
  };

  const handleVenmo = () => {
    const note = encodeURIComponent(`Purchase of Fudge: ${generatePaymentNote()}`);
    const venmoLink = `https://venmo.com/StraightUpSean?txn=pay&amount=${totalPrice.toFixed(2)}&note=${note}`;
    window.open(venmoLink, '_blank');
    clearCart();
    navigate('/');
  };

  const handlePayPal = () => {
    const note = encodeURIComponent(`Purchase of Fudge: ${generatePaymentNote()}`);
    const paypalLink = `https://paypal.me/StraightUpSean/${totalPrice.toFixed(2)}?note=${note}`;
    window.open(paypalLink, '_blank');
    clearCart();
    navigate('/');
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto p-4 animate-fadeIn">
        <PageTitle title="Finch Family Fudge | Order Summary" /> {/* Set Page Title */}
        <h2 className="text-2xl font-bold mb-4 text-lightText">Order Summary</h2>
        <p className="text-lightText">
          Your cart is empty. <button onClick={() => navigate('/products')} className="text-finchGold">Shop now</button>.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 animate-fadeIn">
      <PageTitle title="Finch Family Fudge | Order Summary" /> {/* Set Page Title */}
      <h2 className="text-2xl font-bold mb-4 text-lightText">Order Summary</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index} className="flex justify-between items-center mb-2 bg-gray-800 p-2 rounded">
            <div className="text-lightText">
              <span className="font-semibold">{item.name}</span> - {item.size.label}
            </div>
            <div className="text-lightText">${item.size.price}</div>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-xl font-semibold text-lightText">Total: ${totalPrice.toFixed(2)}</span>
      </div>
      <div className="mt-6 flex flex-col space-y-4">
        <button
          onClick={handleVenmo}
          className="bg-finchGold text-darkBg px-4 py-2 rounded hover:bg-yellow-500"
        >
          Pay with Venmo
        </button>
        <button
          onClick={handlePayPal}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Pay with PayPal
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
