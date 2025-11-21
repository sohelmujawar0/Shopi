import React, { useContext } from "react";
import remove_icon from "../../src/assets/remove.webp";
import { ShopContext } from "../../src/Context/ShopContext";

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } =
    useContext(ShopContext);

  return (
    <div className="mx-[70px] my-[50px]">
      {/* Header */}
      <div className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-[30px] py-2 text-[#454545] text-[18px] font-semibold">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      <hr className="h-[3px] bg-[#e2e2e2] border-0" />

      {/* Cart Items */}
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-[30px] py-2 text-[#454545] text-[15px] font-medium">
                <img src={e.image} alt="" className="h-[50px]" />

                <p>{e.name}</p>
                <p>${e.new_price}</p>

                <button className="h-[40px] w-[100px] border border-gray-300">
                  {cartItems[e.id]}
                </button>

                <p>${e.new_price * cartItems[e.id]}</p>

                <img
                  src={remove_icon}
                  alt=""
                  className="w-[15px] mx-[30px] cursor-pointer"
                  onClick={() => removeFromCart(e.id)}
                />
              </div>

              <hr className="h-[3px] bg-[#e2e2e2] border-0" />
            </div>
          );
        }
        return null;
      })}

      {/* Bottom Section */}
      <div className="flex my-[70px]">
        {/* Total */}
        <div className="flex-1 flex flex-col mr-[200px] gap-[30px]">
          <h1 className="text-2xl font-bold">Cart Totals</h1>

          <div>
            <div className="flex justify-between py-[15px]">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>

            <hr className="h-[3px] bg-[#e2e2e2] border-0" />

            <div className="flex justify-between py-[15px]">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>

            <hr className="h-[3px] bg-[#e2e2e2] border-0" />

            <div className="flex justify-between py-[15px]">
              <p>Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
          </div>

          <button className="w-[250px] h-[50px] bg-[#ff5a5a] text-white text-[16px] font-semibold cursor-pointer rounded">
            PROCEED TO CHECKOUT
          </button>
        </div>

        {/* Promo Code */}
        <div className="flex-1 text-[16px] font-medium">
          <p className="text-[#555]">If you have a promo code, Enter it here</p>

          <div className="w-[300px] h-[50px] mt-[15px] bg-[#eaeaea] flex items-center">
            <input
              type="text"
              placeholder="promo code"
              className="bg-transparent outline-none border-none w-[300px] h-[50px] pl-[20px] text-[16px]"
            />

            <button className="w-[150px] h-[50px] bg-black text-white text-[16px] cursor-pointer">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
