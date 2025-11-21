import React from "react";
import Item from "./Item";
import data_product from "../../src/assets/data";

const RelatedProducts = () => {
  return (
    <div className="flex flex-col items-center gap-2 min-h-[90vh]">
      <h1 className="text-[#171717] text-4xl font-semibold">Related Products</h1>
      <hr className="w-[200px] h-[6px] rounded-[10px] bg-[#252525]" />

      <div className="mt-12 flex gap-8">
        {data_product.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
