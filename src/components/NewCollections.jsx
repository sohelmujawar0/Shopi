import React from "react";
import new_collections from "../../src/assets/newcollections";
import Item from "./Item";

const NewCollections = () => {
  return (
    <div className="flex flex-col items-center gap-3 mb-24 px-4">
      <h1 className="text-[#171717] text-2xl sm:text-3xl md:text-4xl font-semibold text-center">
        NEW COLLECTIONS
      </h1>

      <hr className="w-40 h-1.5 sm:h-2 rounded-lg bg-[#252525]" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 mt-12 w-full max-w-screen-xl">
        {new_collections.map((item, i) => (
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

export default NewCollections;
