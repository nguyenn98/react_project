import React from 'react'

const Product = ({id, img, title, money}) => {
  const handleClick = () => {
    const data =  {
      id,
      img,
      title,
      money,
      quantity: 1
    };

    const isExistLocal = localStorage.getItem("cart");
    if (!isExistLocal) {
       localStorage.setItem("cart", JSON.stringify([data]));
       return;
    }

    const cart = JSON.parse(localStorage.getItem("cart"));
    const isExistProduct = cart.findIndex(product => product.id == id);
    if (isExistProduct != -1) {
      cart[isExistProduct].quantity += data.quantity;
      localStorage.setItem("cart", JSON.stringify(cart));
      return
    }

    cart.push(data);
    localStorage.setItem("cart", JSON.stringify(cart));
    return;
  }
  return (
    <div className='text-center mb-5' 
        style={{width: '290px', height: '425px', color: '#b18e71', border: '1px solid lightgrey'}}>
        <img src={img} alt={img} className='h-96' style={{width: '290px', height: '265px'}}/>
        <p className='font-semibold mt-4'>{title}</p>
        <p className='text-yellow-800'>$ {money}</p>
        <button onClick={() => handleClick()} className='w-32 h-9 rounded-md text-sm font-semibold text-yellow-700' 
            style={{border: '1px solid #a07f65'}}>ADD TO CART</button>
    </div>
  )
}

export default Product