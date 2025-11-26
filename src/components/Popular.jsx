import React from "react";
import Item from "./Item";
import data_product from "../../src/assets/data";

const Popular = () => {
  return (
    <div className="flex flex-col items-center gap-3 py-16 px-4 sm:px-6 md:px-10">
      <h1 className="text-[#171717] text-2xl sm:text-3xl md:text-4xl font-semibold text-center">
        POPULAR IN WOMEN
      </h1>

      <hr className="w-40 h-1.5 sm:h-2 rounded-lg bg-[#252525]" />

      <div className="mt-12 flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 w-full max-w-screen-xl">
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

export default Popular;
