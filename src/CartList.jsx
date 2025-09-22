import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, clearAllItem } from "./redux/slice";
import { useNavigate } from "react-router-dom";

const CartList = () => {
  const cartSelector = useSelector((state) => state.cart.items);
  // console.log(cartSelector);

  const [cartItems, setCartItems] = useState(cartSelector);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setCartItems(cartSelector);
  }, [cartSelector]);

  const manageQuantity = (id, q) => {
    console.log(id, q);
    let quantity = parseInt(q) > 1 ? parseInt(q) : 1;
    const cartTempItems = cartSelector.map((item) => {
      return item.id == id ? { ...item, quantity } : item;
    });
    console.log(cartTempItems[0]);
    setCartItems(cartTempItems);
  };

  const handlePlaceOrder = () => {
    localStorage.clear();
    dispatch(clearAllItem());
    alert("Order Placed");
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4 sm:p-6">
      {/* Header with cart count */}
      <div className="flex justify-between items-center flex-wrap gap-2">
        <h2 className="text-xl sm:text-2xl font-bold">Shopping Cart</h2>
        <span className="text-black text-lg sm:text-xl font-bold px-3 py-1 bg-gray-100 rounded-full">
          {cartItems.length ? cartItems.length : 0}
        </span>
      </div>

      {/* Cart Items */}
      <div className="space-y-4 mt-4">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white shadow-md rounded-2xl p-4"
            >
              {/* Image */}
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg object-cover mx-auto sm:mx-0"
              />

              {/* Title + Quantity */}
              <div className="flex-1 sm:px-4 text-center sm:text-left">
                <h3 className="font-semibold text-base sm:text-lg">
                  {item.title}
                </h3>
                <div className="flex justify-center sm:justify-start items-center mt-2">
                  <p className="text-sm text-gray-500">Qty:</p>
                  <input
                    onChange={(e) => manageQuantity(item.id, e.target.value)}
                    value={item.quantity ? item.quantity : 1}
                    type="number"
                    min="1"
                    className="border outline-[#929fae] outline-2 mx-2 w-14 sm:w-16 rounded text-center"
                  />
                </div>
              </div>

              {/* Price + Delete */}
              <div className="flex flex-col items-center sm:items-end">
                <p className="text-gray-700 font-medium">
                  $
                  {(item.quantity
                    ? item.price * item.quantity
                    : item.price
                  ).toFixed(2)}
                </p>
                <button
                  onClick={() => dispatch(removeItem(item))}
                  className="mt-3 p-2 w-full sm:w-auto bg-[#457b9d] hover:bg-[#e63946] cursor-pointer rounded text-white text-sm sm:text-base"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        )}
      </div>

      {/* Cart Footer */}
      <div className="mt-6 flex flex-col sm:flex-row justify-between items-center border-t pt-4 gap-3">
        <span className="text-lg font-semibold">Total:</span>
        <span className="text-xl sm:text-2xl font-bold text-green-600">
          $
          {cartItems
            .reduce(
              (acc, item) =>
                item.quantity
                  ? acc + item.price * item.quantity
                  : acc + item.price,
              0
            )
            .toFixed(2)}
        </span>
      </div>

      {/* Checkout Button */}
      <button
        onClick={handlePlaceOrder}
        className="w-full mt-4 bg-[#457b9d] hover:bg-[#1d3557] text-white py-3 rounded-xl font-semibold transition"
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartList;
