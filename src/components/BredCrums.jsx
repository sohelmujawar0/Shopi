import React from 'react'
import arrow_icon from "../../src/assets/arrow_icon.png"
const Bredcrums = (props) => {
const {product} = props;
  return (
    <div className='flex items-center gap-2 text-[#5e5e5e]
     text-[16px] font-semibold justify-center mt-[30px] mb-[30px] capitalize'>
Home <img src={arrow_icon} alt="" height="10px"/> SHOP <img src={arrow_icon}
 alt="" height="10px" />{product.category} <img src={arrow_icon}
  alt="" height="10px" /> {product.name} 
    </div>
  )
}

export default Bredcrums