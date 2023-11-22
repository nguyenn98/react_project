import React, { useEffect } from 'react'

const Product = ({ id, img, title, money }) => {

  const handleClick = () => {
    const data = {
      id,
      img,
      title,
      money,
      quantity: 1
    };
    //Xử lý ngoại lệ
    /* const isExistLocal = localStorage.getItem("cart");
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
    return  */

    /* if (!localStorage.getItem('cart')){
      return localStorage.setItem("cart", JSON.stringify([data]))
    }
    const cart = JSON.parse(localStorage.getItem("cart"))

    const isIndex = cart.findIndex(product => product.id == id)
    if (isIndex != -1){
      cart[isIndex].quantity += data.quantity
      return localStorage.setItem('cart', JSON.stringify(cart))
    }

    cart.push(data)
    return localStorage.setItem('cart', JSON.stringify(cart)) */

    if (!localStorage.getItem("cart")) {
      return localStorage.setItem("cart", JSON.stringify([data]))
    }

    const cart = JSON.parse(localStorage.getItem("cart"))

    let isIndex = -1
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === id) {
        isIndex = i;
        console.log(isIndex);
        break;
      }
    }
    if (isIndex !== -1) {
      cart[isIndex].quantity += 1;
      return localStorage.setItem('cart', JSON.stringify(cart));
    }

    cart.push(data)
    return localStorage.setItem("cart", JSON.stringify(cart))

  }

  return (
    <div className='text-center mb-5 cursor-pointer shadow-md hover:shadow-2xl shadow-neutral-400 
        hover:opacity-90 transition ease-in-out duration-300 rounded-b-lg hover:border-[#854d0e] 
        dark:shadow-sm dark:shadow-amber-600 dark:hover:shadow-amber-950 dark:hover:shadow-xl'
      style={{ width: '290px', height: '445px', color: '#b18e71', border: '1px solid' }}>
      <img src={img} alt={img} className='h-96 object-cover' style={{ width: '290px', height: '265px' }} />
      <p className='font-semibold mt-4 h-12'>{title}</p>
      <p className='text-yellow-800'>$ {money}</p>
      <button className='w-32 h-9 rounded-md text-sm font-semibold text-yellow-700
         hover:text-slate-50 dark:hover:bg-rose-800 hover:bg-rose-700 transition duration-300 ease-in-out'
        style={{ border: '1px solid #a07f65' }}
        onClick={() => handleClick()} >ADD TO CART</button>
    </div>
  )
}

export default Product