import React, { useContext } from 'react'
import { Product_Context } from '../context/Product_Context'
import SingleProduct from './SingleProduct'


const Products = () => {
    const {products,search} = useContext(Product_Context)

  return (
    <div>
      <div className="grid place-items-center grid-cols-4 gap-3 p-4">
        {products.filter((item) => item.title.name.toLocaleLowerCase().includes(search)).map((item) => <SingleProduct key={item.id} product={item}/>)}
      </div>
    </div>
  )
}

export default Products