import React from 'react'

const CartPage = () => {
  return (
    <>
    <h1 className='text-center text-5xl m-10 font-bold'>Your Cart</h1>

    <div className='flex flex-wrap gap-5 justify-center m-10 p-5'>

    <div className="card bg-base-100 w-80 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="flex flex-wrap gap-5 mt-5 ">
      <button className="w-full btn btn-primary">Price of This </button>
      <button className="w-full btn btn-primary">Remove Item</button>
    </div>
  </div>
</div>


<div className="card bg-base-100 w-80 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="flex flex-wrap gap-5 mt-5 ">
      <button className="w-full btn btn-primary">Price of This </button>
      <button className="w-full btn btn-primary">Remove Item</button>
    </div>
  </div>
</div>

<div className="card bg-base-100 w-80 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="flex flex-wrap gap-5 mt-5 ">
      <button className="w-full btn btn-primary">Price of This </button>
      <button className="w-full btn btn-primary">Remove Item</button>
    </div>
  </div>
</div>





    </div>
    
    
    
    
    </>
  )
}

export default CartPage