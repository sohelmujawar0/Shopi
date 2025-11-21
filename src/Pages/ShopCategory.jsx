import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from "../assets/dropdown_icon.png"
import Item from '../components/Item'

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category">

      {/* Banner */}
      <img
        className="block w-[82%] mx-auto my-[30px]"
        src={props.banner}
        alt=""
      />

      {/* Index + Sort */}
      <div className="flex justify-between items-center mx-[170px]">
        <p className="text-[18px]">
          <span className="font-semibold">Showing 1-12</span> out of 36 products
        </p>

        <div className="px-[20px] py-[10px] rounded-[40px] border border-[#888] flex items-center gap-2 cursor-pointer">
          Sort by
          <img src={dropdown_icon} alt="" className="h-[20px]" />
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-4 mx-[170px] mt-[20px] gap-y-[80px]">
        {all_product.map((item, i) => {
          return props.category === item.category ? (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ) : null;
        })}
      </div>

      {/* Load More */}
      <div className="flex justify-center items-center w-[200px] h-[60px] mx-auto my-[70px] rounded-[75px] bg-[#ededed] text-[#272424] text-[18px] font-medium cursor-pointer">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
