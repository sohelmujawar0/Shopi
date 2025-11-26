import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../assets/dropdown_icon.png";
import Item from "../components/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <img
        className="w-full max-w-screen-xl mx-auto my-6 px-4"
        src={props.banner}
        alt=""
      />

      <div className="max-w-screen-xl mx-auto px-4 mt-4 flex flex-col sm:flex-row justify-between sm:items-center gap-3">
        <p className="text-[16px] sm:text-[18px]">
          <span className="font-semibold">Showing 1-12</span> out of 36 products
        </p>

        <div className="px-4 py-2 rounded-[40px] border border-[#888] flex items-center gap-2 cursor-pointer w-fit">
          Sort by
          <img src={dropdown_icon} alt="" className="h-[18px]" />
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-16 gap-x-4">
        {all_product.map((item, i) =>
          props.category === item.category ? (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ) : null
        )}
      </div>

      <div className="flex justify-center items-center w-[160px] h-[50px] sm:w-[200px] sm:h-[60px] mx-auto my-12 rounded-[75px] bg-[#ededed] text-[#272424] text-[16px] sm:text-[18px] font-medium cursor-pointer">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
