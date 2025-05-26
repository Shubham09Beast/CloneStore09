
import React from 'react'
import Product from './Product'


export default function ProductList(props) {
  return (
    <div>
      {props.productList.map((product, i) => (
        <Product product={product} key={i} incrementQty={props.incrementQty} index={i} />
      ))}
    </div>
  )
}

