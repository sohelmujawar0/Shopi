import React, { useContext } from 'react'
import star_icon from "../../src/assets/star_icon.png"
import star_dull_icon from "../../src/assets/star_dull_icon.png"
import { ShopContext } from '../../src/Context/ShopContext'

const ProductDisplay = ({ product }) => {
  const { addTocart } = useContext(ShopContext)

  return (
    <div className="flex mx-[50px]">
      
      {/* LEFT */}
      <div className="flex gap-[17px]">
        <div className="flex flex-col gap-[10px]">
          <img src={product.image} height="160" className="h-[160px]" />
          <img src={product.image} height="160" className="h-[160px]" />
          <img src={product.image} height="160" className="h-[160px]" />
        </div>

        <div>
          <img src={product.image} className="h-[500px]" />
        </div>
      </div>

      {/* RIGHT */}
      <div className="mx-[50px] flex flex-col">
        <h1 className="text-[#3d3d3d] text-[40px] font-[700]">{product.name}</h1>

        <div className="flex items-center mt-[10px] gap-[15px] text-[#1c1c1c] text-[16px]">
          <img src={star_icon} className="h-[20px]" />
          <img src={star_icon} className="h-[20px]" />
          <img src={star_icon} className="h-[20px]" />
          <img src={star_icon} className="h-[20px]" />
          <img src={star_dull_icon} className="h-[20px]" />
          <p>(130)</p>
        </div>

        <div className="flex my-[20px] gap-[30px] text-[20px] font-[700]">
          <div className="text-[#818181] line-through">${product.old_price}</div>
          <div className="text-[#ff4141]">${product.new_price}</div>
        </div>

        <div className="text-[#4d4d4d] max-w-[500px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
          eaque. Amet reiciendis minus modi eum soluta hic autem, rem corrupti
          quibusdam? Quam omnis saepe et expedita ratione, quasi unde repudiandae.
        </div>

        <div className="mt-[10px]">
          <h1 className="text-[#656565] text-[16px] font-[600]">Select Size</h1>

          <div className="flex my-[20px] gap-[20px]">
            {["S", "M", "L", "XL", "XXL"].map((s) => (
              <div
                key={s}
                className="px-[20px] py-[16px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer"
              >
                {s}
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => addTocart(product.id)}
          className="px-[40px] py-[20px] w-[400px] text-[16px] font-[600] bg-[#ff4141] text-white mb-[20px] cursor-pointer rounded"
        >
          ADD TO CART
        </button>

        <div className="mt-[10px] font-[600]">
          Category: <span className="font-normal">Women, T-Shirt, Crop Top</span>
        </div>

        <div className="mt-[10px] font-[600]">
          Tags: <span className="font-normal">Modern, Latest, Trend Shorts</span>
        </div>
      </div>
    </div>
  )
}

export default ProductDisplay
