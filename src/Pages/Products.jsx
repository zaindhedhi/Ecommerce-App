import React, { useEffect, useState } from 'react'

const Products = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
      .then(res => {
        setProduct(res.products)
        console.log(product)
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
      <h1 className='text-center text-5xl font-bold  m-10 '>All Products</h1>
    <div className='flex flex-wrap gap-5 m-20 justify-center '>

    {error && <div>Error in Fetching data</div>}

      {loading && <span className=" size-20 loading loading-spinner text-info"></span>}


      {product && product.map((items) => {
        return     <div key={items.id} className="card bg-base-100 w-80 shadow-xl border border-black">
        <figure>
          <img
            src={items.thumbnail}
            alt="logo" />
        </figure>
        <div className="card-body border-t-4 border-black ">
          <h2 className="card-title">{items.title}</h2>
          <p>{items.description.slice(0 , 75)}</p>
          <p className='font-bold'>Price Rs = {items.price}</p>
          <div className="flex mt-5 gap-5 ">
            <button className=" font-bold btn btn-info">show more</button>
            <button className="font-bold btn btn-warning">Add To Cart</button>
          </div>
          
        </div>
      </div>
      })}



    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Products