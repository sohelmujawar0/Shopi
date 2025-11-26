import React, { useContext } from "react";
import star_icon from "../../src/assets/star_icon.png";
import star_dull_icon from "../../src/assets/star_dull_icon.png";
import { ShopContext } from "../../src/Context/ShopContext";

const ProductDisplay = ({ product }) => {
  const { addTocart } = useContext(ShopContext);

  return (
    <div className="flex flex-col md:flex-row px-4 sm:px-6 md:px-10 py-10 gap-8 max-w-screen-xl mx-auto">
      <div className="flex gap-4 md:gap-6">
        <div className="flex flex-row md:flex-col gap-2 md:gap-2">
          <img src={product.image} alt={product.name} className="h-[80px] sm:h-[120px] md:h-[160px] w-auto object-cover rounded" />
          <img src={product.image} alt={product.name} className="h-[80px] sm:h-[120px] md:h-[160px] w-auto object-cover rounded" />
          <img src={product.image} alt={product.name} className="h-[80px] sm:h-[120px] md:h-[160px] w-auto object-cover rounded" />
        </div>

        <div className="flex-1 flex items-center justify-center md:justify-start">
          <img src={product.image} alt={product.name} className="h-[250px] sm:h-[400px] md:h-[500px] w-auto object-cover rounded" />
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <h1 className="text-[#3d3d3d] text-2xl sm:text-3xl md:text-4xl font-bold">{product.name}</h1>

        <div className="flex items-center mt-2 gap-2 sm:gap-3 text-[#1c1c1c] text-sm sm:text-base">
          {[...Array(4)].map((_, i) => (
            <img key={i} src={star_icon} alt="star" className="h-4 sm:h-5" />
          ))}
          <img src={star_dull_icon} alt="star dull" className="h-4 sm:h-5" />
          <p className="text-[12px] sm:text-sm">(130)</p>
        </div>

        <div className="flex my-4 gap-4 text-base sm:text-lg font-bold">
          <div className="text-[#818181] line-through">${product.old_price}</div>
          <div className="text-[#ff4141]">${product.new_price}</div>
        </div>

        <p className="text-[#4d4d4d] text-sm sm:text-base max-w-full sm:max-w-[500px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, eaque. Amet reiciendis minus modi eum soluta hic autem, rem corrupti quibusdam? Quam omnis saepe et expedita ratione, quasi unde repudiandae.
        </p>

        <div className="mt-4">
          <h2 className="text-[#656565] text-sm sm:text-base font-semibold">Select Size</h2>
          <div className="flex flex-wrap gap-2 sm:gap-4 my-2">
            {["S", "M", "L", "XL", "XXL"].map((s) => (
              <div
                key={s}
                className="px-3 sm:px-4 py-2 sm:py-3 bg-[#fbfbfb] border border-[#ebebeb] rounded cursor-pointer text-sm sm:text-base"
              >
                {s}
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => addTocart(product.id)}
          className="w-full sm:w-[300px] md:w-[400px] py-3 sm:py-4 text-[14px] sm:text-[16px] font-semibold bg-[#ff4141] text-white rounded mt-4 cursor-pointer"
        >
          ADD TO CART
        </button>

        <div className="mt-3 text-sm sm:text-base font-semibold">
          Category: <span className="font-normal">Women, T-Shirt, Crop Top</span>
        </div>

        <div className="mt-2 text-sm sm:text-base font-semibold">
          Tags: <span className="font-normal">Modern, Latest, Trend Shorts</span>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
