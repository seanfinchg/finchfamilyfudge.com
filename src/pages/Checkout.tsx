import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { IonIcon } from "@ionic/react";
import { logoVenmo } from "ionicons/icons";

const Checkout: React.FC = () => {
  useEffect(() => {
    document.title = "Finch Family Fudge | Checkout";
  }, []);

  const { cartItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Function to detect if the user is on a mobile device
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;
    const mobile = /android|iphone|ipad|iPod|windows phone/i.test(userAgent);
    setIsMobile(mobile);
  }, []);

  const generatePaymentNote = () => {
    return cartItems
      .map((item) => `${item.name} (${item.size.label}) x${item.quantity}`)
      .join(", ");
  };

  const venmoLink = `https://venmo.com/StraightUpSean?txn=pay&amount=${totalPrice.toFixed(
    2
  )}&note=${encodeURIComponent(`Order: ${generatePaymentNote()}`)}`;

  const handleVenmo = () => {
    if (isMobile) {
      setShowConfirmation(true);
    } else {
      proceedToVenmo();
    }
  };

  const proceedToVenmo = () => {
    window.open(venmoLink, "_blank");
    clearCart();
    navigate("/");
  };

  const handleConfirm = () => {
    setShowConfirmation(false);
    proceedToVenmo();
  };

  const handleCancel = () => {
    setShowConfirmation(false);
  };

  const handleBackToCart = () => {
    navigate("/cart");
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto p-4 animate-fadeIn">
        <h2 className="text-2xl font-bold mb-4 text-lightText">Checkout</h2>
        <p className="text-lightText">
          Your cart is empty.{" "}
          <button
            onClick={() => navigate("/products")}
            className="text-finchGold hover:underline"
          >
            Shop now
          </button>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 animate-fadeIn">
      <h2 className="text-2xl font-bold mb-4 text-lightText">Checkout</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li
            key={`${item.id}-${item.size.label}`}
            className="flex justify-between items-center mb-2 bg-gray-800 p-2 rounded"
          >
            <div className="text-lightText">
              <span className="font-semibold">{item.name}</span> -{" "}
              {item.size.label} x {item.quantity}
            </div>
            <div className="text-lightText">
              ${(item.size.price * item.quantity).toFixed(2)}
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-xl font-semibold text-lightText">
          Total: ${totalPrice.toFixed(2)}
        </span>
      </div>
      <div className="mt-6 flex flex-col space-y-4">
        <Button
          variant="venmo"
          onClick={handleVenmo}
          className="w-full flex items-center justify-center"
        >
          <IonIcon icon={logoVenmo} className="mr-2" />
          Pay with Venmo
        </Button>
        <Button
          variant="secondary"
          onClick={handleBackToCart}
          className="w-full"
        >
          Back to Cart
        </Button>
      </div>
      <p className="mt-4 text-red-500 text-center">
        *Your order will not be processed until the payment is successfully
        completed on Venmo.
      </p>
      <p className="mt-2 text-lightText text-center">
        Cash is also accepted if purchased in person.
      </p>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-11/12 max-w-md">
            <h3 className="text-xl font-bold mb-4">Confirm Venmo Payment</h3>
            <p className="mb-4">
              You are about to pay via Venmo on a mobile device. Please ensure
              you manually add your order details in the Venmo note to ensure
              your order is processed correctly.
            </p>
            <p className="mb-4 text-red-500">
              *If you do not add the order note, your order will not be
              completed.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleCancel}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="px-4 py-2 bg-finchGold text-darkBg rounded hover:bg-yellow-500"
              >
                Proceed to Venmo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
