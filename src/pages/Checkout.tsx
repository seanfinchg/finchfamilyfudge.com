// src/pages/Checkout.tsx
import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Checkout: React.FC = () => {
  useEffect(() => {
    document.title = "Finch Family Fudge | Checkout";
  }, []);

  const { cartItems, totalPrice } = useCart();
  const navigate = useNavigate();

  const [contactInfo, setContactInfo] = useState("");
  const [error, setError] = useState("");
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handlePayWithVenmo = () => {
    if (!contactInfo.trim()) {
      setError("Please enter your Instagram handle or phone number.");
      return;
    }

    const isPhoneNumber = /^\d{10}$/.test(contactInfo);
    if (!isPhoneNumber && !/^@[a-zA-Z0-9._]+$/.test(contactInfo)) {
      setError(
        "Please enter a valid Instagram handle (starting with @) or a 10-digit phone number."
      );
      return;
    }

    setError("");
    setShowConfirmModal(true);
  };

  const handleProceed = () => {
    const orderSummary = cartItems
      .map((item) => `${item.quantity}x ${item.name} (${item.size.label})`)
      .join(", ");
    const encodedNote = encodeURIComponent(
      `Order: ${orderSummary}. Contact: ${contactInfo}`
    );
    const venmoLink = `https://venmo.com/StraightUpSean?txn=pay&amount=${totalPrice.toFixed(
      2
    )}&note=${encodedNote}`;
    window.open(venmoLink, "_blank");
    setShowConfirmModal(false);
  };

  const handleCancel = () => {
    setShowConfirmModal(false);
    navigate("/cart");
  };

  return (
    <div className="container mx-auto p-4 animate-fadeIn">
      <h2 className="text-2xl font-bold mb-6 text-lightText">Checkout</h2>
      {cartItems.length === 0 ? (
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
      ) : (
        <div>
          <ul className="space-y-6">
            {cartItems.map((item, index) => (
              <li
                key={`${item.id}-${item.size.label}`}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-gray-800 p-4 rounded space-y-4 sm:space-y-0"
              >
                <div className="flex items-center space-x-6">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-24 h-24 object-contain rounded"
                  />
                  <div className="flex flex-col space-y-2">
                    <h3 className="text-xl font-semibold text-lightText">
                      {item.name}
                    </h3>
                    <p className="text-lightText">
                      {item.size.label} - ${item.size.price}
                    </p>
                    <p className="text-lightText font-bold">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <label
              htmlFor="contact"
              className="block text-lightText font-semibold mb-2"
            >
              Instagram Handle or Phone Number (Required)
            </label>
            <input
              id="contact"
              type="text"
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value.trim())}
              placeholder="e.g., @username or 1234567890"
              className="w-full p-3 border rounded-lg bg-gray-700 text-lightText"
            />
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>
          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center">
            <span className="text-xl font-semibold text-lightText">
              Total: ${totalPrice.toFixed(2)}
            </span>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <Button variant="red" onClick={() => navigate("/cart")}>
                Back to Cart
              </Button>
              <Button variant="venmo" onClick={handlePayWithVenmo}>
                Pay with Venmo
              </Button>
            </div>
          </div>
          {showConfirmModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-gray-800 p-6 rounded-lg w-11/12 md:w-1/3">
                <h3 className="text-xl font-semibold mb-4 text-lightText">
                  Confirm Venmo Payment
                </h3>
                <p className="text-lightText mb-6">
                  Please confirm that, if you are on a mobile device, you will
                  manually enter your order details{" "}
                  <strong>and your Instagram handle or phone number</strong> in
                  the Venmo payment message. If you do not do this, your order
                  will be refunded. If providing a phone number, expect contact
                  from a <strong>714 area code</strong>. Do you want to proceed?
                </p>
                <div className="flex justify-end space-x-4">
                  <Button variant="red" onClick={handleCancel}>
                    Cancel
                  </Button>
                  <Button variant="primary" onClick={handleProceed}>
                    Proceed
                  </Button>
                </div>
              </div>
            </div>
          )}
          <div className="mt-6">
            <p className="font-bold text-red-500">
              *Your order will not be processed unless the payment successfully
              goes through on Venmo.
            </p>
            <p className="font-bold text-red-500 mt-2">
              *If you are on mobile, please make sure you manually input the
              products you are purchasing{" "}
              <strong>and your Instagram handle or phone number</strong> in the
              "Message" section of the Venmo payment. If providing a phone
              number, expect contact from a <strong>714 area code</strong>.
              Otherwise, the order will be refunded.
            </p>
            <p className="mt-2 text-lightText">
              Cash is also accepted if purchased in person.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
