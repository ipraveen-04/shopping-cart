import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "./redux/slice";
import { useEffect } from "react";
import { fetchProducts } from "./redux/productSlice";

const Product = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const productSelector = useSelector((state) => state.products.items);
  //   console.log(productSelector);

  const cartSelector = useSelector((state) => state.cart.items);
  //   console.log(cartSelector.length);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 my-9 mx-2">
      {/* <!-- Product Image --> */}
      {productSelector.length > 0 &&
        productSelector.map((item) => (
          <div
            key={item.id}
            className="bg-[#fff] hover:-translate-y-1 transition-transform duration-200 overflow-hidden rounded-s-lg flex flex-col shadow-[0_2px_6px_rgba(0,0,0,0.1)]"
          >
            <img
              className="w-full h-[180px] object-cover"
              src={item.thumbnail}
              alt={item.title}
            />
            <div className="p-[15px] flex flex-col gap-[4px] flex-grow">
              <div className="overflow-hidden text-ellipsis text-[16px] font-bold whitespace-nowrap">
                {item.title}
              </div>
              <div className="text-[13px] text-[#666]">{item.brand}</div>
              <div className="text-[16px] font-bold">${item.price}</div>
              <div className="text-[13px] text-[#666]">⭐{item.rating}</div>

              {cartSelector.find((cartItem) => cartItem.id === item.id) ? (
                <button
                  onClick={() => dispatch(removeItem(item))}
                  className="bg-[#e63946] hover:bg-[#af2631] p-3 text-[#fff] rounded mx-3 mt-auto"
                >
                  Remove from Cart
                </button>
              ) : (
                <button
                  onClick={() => dispatch(addItem(item))}
                  className="bg-[#457b9d] hover:bg-[#1d3557] text-[#fff] p-3 rounded mx-3 mt-auto"
                >
                  Add To Cart
                </button>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Product;
