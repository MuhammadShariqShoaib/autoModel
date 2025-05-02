import React, { useState } from "react";

const CreditCardForm = () => {
  const [cardInfo, setCardInfo] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
  });

  // Format Card Number: Add space after every 4 digits
  const formatCardNumber = (value) => {
    return value
      .replace(/\D/g, "") // Remove non-digit characters
      .replace(/(.{4})/g, "$1 ") // Add space every 4 digits
      .trim();
  };

  // Format Expiry Date: Add "/" between month and year
  const formatExpiry = (value) => {
    return value
      .replace(/\D/g, "") // Remove non-digit characters
      .replace(/(\d{2})(\d{0,2})/, "$1/$2") // Add "/" after the month
      .slice(0, 5); // Limit to "MM/YY"
  };

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "number") {
      setCardInfo({
        ...cardInfo,
        number: formatCardNumber(value),
      });
    } else if (name === "expiry") {
      setCardInfo({
        ...cardInfo,
        expiry: formatExpiry(value),
      });
    } else {
      setCardInfo({
        ...cardInfo,
        [name]: value,
      });
    }
  };

  return (
    <div className="bg-gray-900 ">
    <div className="max-w-lg mx-auto h-screen p-8 bg-white shadow-2xl rounded-xl">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
        Enter Your Card Details
      </h2>

      {/* Credit Card Preview */}
      <div className="bg-orange-500  text-white p-6 rounded-xl mb-8">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold tracking-widest">
            {cardInfo.number || "#### #### #### ####"}
          </div>
          <div className="flex text-sm">
            <p className="mr-4">{cardInfo.name || "Cardholder"}</p>
            <p>{cardInfo.expiry || "MM/YY"}</p>
          </div>
        </div>
      </div>

      {/* Credit Card Form */}
      <form className="space-y-6">
        {/* Card Number */}
        <div>
          <label htmlFor="number" className="text-sm font-medium text-gray-700">
            Card Number
          </label>
          <input
            type="text"
            name="number"
            maxLength="19"
            placeholder="Card Number"
            className="w-full mt-2 px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-orange-600"
            value={cardInfo.number}
            onChange={handleChange}
          />
        </div>

        {/* Cardholder Name */}
        <div>
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Cardholder Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Cardholder Name"
            className="w-full mt-2 px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-orange-600"
            value={cardInfo.name}
            onChange={handleChange}
          />
        </div>

        {/* Expiry Date & CVC */}
        <div className="flex space-x-6">
          <div className="w-1/2">
            <label htmlFor="expiry" className="text-sm font-medium text-gray-700">
              Expiry Date (MM/YY)
            </label>
            <input
              type="text"
              name="expiry"
              maxLength="5"
              placeholder="MM/YY"
              className="w-full mt-2 px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-orange-600"
              value={cardInfo.expiry}
              onChange={handleChange}
            />
          </div>

          <div className="w-1/2">
            <label htmlFor="cvc" className="text-sm font-medium text-gray-700">
              CVC
            </label>
            <input
              type="text"
              name="cvc"
              maxLength="4"
              placeholder="CVC"
              className="w-full mt-2 px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-orange-600"
              value={cardInfo.cvc}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition duration-300"
          >
            Pay Now
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default CreditCardForm;
