import React, { useContext, useState} from 'react'
import { Product_Context } from '../context/Product_Context'

const ProductReview = () => {
  const {page} = useContext(Product_Context)
  return (
    <div className='w-full h-[80vh] p-14'>
      <div className="border px-4 py-8 flex">
      <img src={page.image} alt="/" className='w-96'/>
        <div className="">
            <p>{page.title.name}</p>
              <div className="">
                {
                  page.features.map((list) => <p key={list} className=''>{list}</p>)
                }
              </div>
              <p>{page.price} Taka</p>
              
        </div>
      </div>
    </div>
  )
}

export default ProductReview