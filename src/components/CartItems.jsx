import React, { useContext } from "react";
import remove_icon from "../../src/assets/remove.webp";
import { ShopContext } from "../../src/Context/ShopContext";

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } =
    useContext(ShopContext);

  return (
    <div className="max-w-screen-xl mx-auto px-4 my-10">
      <div className="hidden md:grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-6 py-2 text-[#454545] text-lg font-semibold">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      <hr className="h-[3px] bg-[#e2e2e2] border-0" />

      {all_product.map((e) =>
        cartItems[e.id] > 0 ? (
          <div key={e.id}>
            <div className="grid md:grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] grid-cols-2 items-center gap-4 py-4 text-[#454545] text-[15px] font-medium">
              <img src={e.image} alt="" className="h-[50px]" />

              <p>{e.name}</p>

              <p className="md:block hidden">${e.new_price}</p>

              <button className="h-[40px] w-[80px] border border-gray-300">
                {cartItems[e.id]}
              </button>

              <p className="md:block hidden">
                ${e.new_price * cartItems[e.id]}
              </p>

              <img
                src={remove_icon}
                alt=""
                className="w-[15px] cursor-pointer"
                onClick={() => removeFromCart(e.id)}
              />
            </div>

            <hr className="h-[2px] bg-[#e2e2e2] border-0" />
          </div>
        ) : null
      )}

      <div className="flex flex-col lg:flex-row gap-10 my-16">
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="text-2xl font-bold">Cart Totals</h1>

          <div>
            <div className="flex justify-between py-3">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>

            <hr className="h-[2px] bg-[#e2e2e2] border-0" />

            <div className="flex justify-between py-3">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>

            <hr className="h-[2px] bg-[#e2e2e2] border-0" />

            <div className="flex justify-between py-3">
              <p>Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
          </div>

          <button className="w-full max-w-[250px] h-[50px] bg-[#ff5a5a] text-white text-[16px] font-semibold rounded">
            PROCEED TO CHECKOUT
          </button>
        </div>

        <div className="flex-1 text-[16px] font-medium">
          <p className="text-[#555]">If you have a promo code, enter it here</p>

          <div className="flex mt-4 bg-[#eaeaea] h-[50px] w-full max-w-[450px]">
            <input
              type="text"
              placeholder="Promo code"
              className="bg-transparent outline-none border-none flex-1 px-4 text-[16px]"
            />

            <button className="w-[120px] h-[50px] bg-black text-white text-[16px]">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
