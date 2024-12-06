import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
  const {id} = useParams()
  const [product, setProduct] = useState(null);

  useEffect(()=>{
    fetch(`https://dummyjson.com/products/${id}`)
    .then(res => res.json())
      .then(res => {
        console.log(res)
        setProduct(res)
      })
      .catch(err => {
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])











  return (
    <>
    {product && <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row border border-black">
        <img
          src={product.thumbnail}
          className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{product.title}</h1>
          <p className="py-6">
            {product.description}
          </p>
          <p>width: {product.dimensions.width} height: {product.dimensions.height} depth: {product.dimensions.depth}</p>
          <p className='text-2xl font-bold'>Rs. {product.price}</p>
          <div className='flex'><h1 className='font-bold'>Policy : </h1> {product.returnPolicy}</div>
          <div className='flex'><h1 className='font-bold'>Shipping : </h1> {product.shippingInformation}</div>
          <p></p>
          
        </div>
      </div>
    </div>}

    
    
    
    </>
  )
}

export default SingleProduct