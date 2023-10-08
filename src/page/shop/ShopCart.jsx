import React, { useState } from 'react'
import { TiDeleteOutline } from 'react-icons/ti'

const ShopCart = () => {
    const localCart = JSON.parse(localStorage.getItem("cart"));
    const [cart, setCart] = useState(localCart);
    const [totalCart, setTotalCart] = useState(0);

    const sum = () => {
        const total = cart.reduce((accumulator, currentValue) => parseInt(accumulator) + parseInt((currentValue.money * currentValue.quantity)), 0);
        console.log(total);
        setTotalCart(total);
    }

    const handleRemoveItem = (id) => {
        const arrFilter = cart.filter(product => product.id != id);
        setCart(arrFilter);
        localStorage.setItem("cart", JSON.stringify(arrFilter));
    }

    return (
        <div className='mb-14'>
            <div className='text-center mt-14'>
                <h1 style={{ fontSize: '51px', fontFamily: 'serif' }}>Cart</h1>
                <p className='w-12 h-1 mt-4' style={{ border: '2px solid #ba865d', marginLeft: '655px' }}></p>
            </div>
            <div className='mt-24'
                style={{ border: '1px solid lightgrey', width: '740px', marginLeft: '25%' }} >
                <div className='flex items-center text-stone-900 font-semibold pt-2'
                    style={{ borderBottom: '1px solid lightgrey', height: '60px', backgroundColor: '#F5F5F5' }}>
                    <p className='ml-64 mr-40'>Product</p>
                    <p className='mr-12'>Price</p>
                    <p className='mr-10'>Quantity</p>
                    <p>Subtotal</p>
                </div>

                {cart.map((e) => {
                    return (
                        <div key={e.id} className='flex items-center text-stone-900 font-semibold pt-2'
                            style={{ borderBottom: '1px solid lightgrey', height: '120px' }}>
                            <button onClick={() => handleRemoveItem(e.id)}>
                                < TiDeleteOutline className='w-7 h-10 ml-3 mr-4 -mt-1.5 text-slate-600 hover:text-red-600' />
                            </button>
                            <img src={e.img} className='mr-4 w-24 h-24' />
                            <p className='mr-3.5 w-72 h-11 text-sm pt-2'>{e.title}</p>
                            <p className='mr-7 w-16 h-9 text-sm pt-2'>$ {parseInt(e.money)}</p>
                            <p className='mr-12 w-14 h-12 rounded-xl pt-2.5 pl-5 text-lg'>{e.quantity}</p>
                            <p className=' w-16 h-9 text-sm pt-2'>$ {parseInt(e.money) * parseInt(e.quantity)}</p>
                        </div>
                    )

                })}
            </div>
            <div className='mt-4 flex items-center' style={{ marginLeft: '350px' }}>

                <h1 className='mr-64 mt-4' style={{ fontSize: '48px', fontFamily: 'serif' }}>Cart Totals: ${totalCart}</h1>

                <button onClick={() => sum()} className='bg-stone-950 h-12 w-36 rounded-md'>
                    <p className='text-slate-50 text-sm pt-2.5'>UPDATE CART</p>
                </button>
            </div>

        </div>
    )
}

export default ShopCart