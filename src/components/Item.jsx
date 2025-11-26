import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="item group border border-black rounded-[20px] w-full sm:w-[180px] md:w-[200px] transition-transform duration-500 hover:scale-105 mx-auto">
      <Link to={`/product/${props.id}`}>
        <img
          src={props.image}
          alt={props.name}
          className="w-full sm:w-[180px] md:w-[200px] rounded-t-[20px] mx-auto"
          onClick={() => window.scrollTo(0, 0)}
        />
      </Link>

      <p className="my-2 px-2 text-[14px] sm:text-[15px] md:text-[16px]">{props.name}</p>

      <div className="flex gap-3 px-2 pb-2">
        <div className="text-[#374151] text-[14px] sm:text-[15px] md:text-[16px] font-semibold">
          ${props.new_price}
        </div>

        <div className="text-[#8c8c8c] text-[14px] sm:text-[15px] md:text-[16px] font-medium line-through">
          ${props.old_price}
        </div>
      </div>
    </div>
  );
};

export default Item;
