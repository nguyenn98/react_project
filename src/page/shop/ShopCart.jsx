import React, { useState } from 'react'

import { TiDeleteOutline } from 'react-icons/ti'
import { AiOutlineShoppingCart } from 'react-icons/ai'

import { Link } from 'react-router-dom'

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
        <div className='-mb-16 pb-5 pt-1'>
            <div className='text-center mt-14'>
                <h1 className='-ml-1.5 mt-1.5 dark:text-slate-50' style={{ fontSize: '53.5px', fontFamily: 'serif' }}>
                    Cart
                </h1>
                <p className='w-12 h-1' style={{ border: '2px solid #b18e71', marginLeft: '651px', marginTop: '21.5px' }}></p>
            </div>
            {!(localCart[0]) ?
                <div>
                    <div className='rounded-xl flex border-stone-400'
                        style={{
                            width: '720px', height: '73px', border: '1px solid #dbd6d6', marginTop: '85px',
                            marginLeft: '315px'
                        }}>
                        <div className='dark:text-slate-50 text-stone-600 ml-5' style={{ marginTop: '13px' }}>
                            <AiOutlineShoppingCart className=' w-6 h-9' />
                        </div>
                        <p className='dark:text-slate-50 text-stone-600 ml-4' style={{ fontSize: '18.4px', marginTop: '16.2px' }}>
                            Your cart is currently empty.
                        </p>
                    </div>
                    <Link to={'/shop-demo'}>
                        <button className='border-2 w-40 h-11 mt-9 pb-0.5 tracking-wide rounded-md font-bold bg-zinc-700 text-white'
                            style={{ marginLeft: '23.31%' }}>
                            Return to shop
                        </button>
                    </Link>
                </div>
                :
                <div>
                    <div className='mt-[92px]'
                        style={{ border: '1px solid lightgrey', width: '740px', marginLeft: '23%' }} >
                        <div className='flex items-center text-stone-900 bg-[#F5F5F5] font-semibold pt-2
                            dark:text-slate-50 dark:bg-neutral-800'
                            style={{ borderBottom: '1px solid lightgrey', height: '60px' }}>
                            <p className='ml-64 mr-40'>Product</p>
                            <p className='mr-12'>Price</p>
                            <p className='mr-10'>Quantity</p>
                            <p>Subtotal</p>
                        </div>
                        {
                            cart.map((e) => {
                                return (
                                    <div key={e.id} className='flex items-center text-stone-900 font-semibold pt-2'
                                        style={{ borderBottom: '1px solid lightgrey', height: '120px' }}>
                                        <button onClick={() => handleRemoveItem(e.id)}>
                                            < TiDeleteOutline className='w-7 h-10 ml-3 mr-4 -mt-1.5 text-slate-600
                                            hover:text-red-700 dark:text-zinc-500 dark:hover:text-rose-400
                                            transition duration-300 ease-in-out' />
                                        </button>
                                        <img src={e.img} alt={e.img} className='mr-4 w-24 h-24' />
                                        <p className='mr-3.5 w-72 h-11 text-sm pt-2 dark:text-[#b7967b]'>
                                            {e.title}
                                        </p>
                                        <p className='mr-7 w-16 h-9 text-sm pt-2 dark:text-slate-100'>
                                            $ {parseInt(e.money)}.00
                                        </p>
                                        <p className='mr-12 w-14 h-12 rounded-xl pt-2.5 pl-5 text-lg dark:text-slate-100'>
                                            {e.quantity}
                                        </p>
                                        <p className=' w-16 h-9 text-sm pt-2 dark:text-slate-100'>
                                            $ {parseInt(e.money) * parseInt(e.quantity)}.00
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='mt-[30px] flex items-center' style={{ marginLeft: '325px' }}>
                        <h1 className='mr-40 mt-3 w-[420px] dark:text-slate-100'
                            style={{ fontSize: '47px', fontFamily: 'serif' }}>
                            <span className='text-4xl'>Cart Totals:</span> ${!(totalCart) ? '00' : totalCart}.00
                        </h1>
                        <button className='bg-stone-950 hover:bg-[#2e2720] hover:opacity-95 h-[46px] 
                                w-[140px] rounded-md dark:border-[1px] dark:border-slate-50 dark:hover:border-[#b7967b]
                                transition-colors duration-300'
                            onClick={() => sum()} >
                            <p className='text-slate-50 text-sm pt-[11.8px]'>UPDATE CART</p>
                        </button>
                    </div>
                </div>}
        </div>
    )
}

export default ShopCart