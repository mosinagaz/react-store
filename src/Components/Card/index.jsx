import React from "react";
import { Icon } from "@iconify/react";
import { useContext } from "react";
import { ShoppingCartContext } from '../../Contex';
const Card = (data) => {
  const context = useContext(ShoppingCartContext);
  const {title,price,images,category}= data.data;

  const showProduct = (producto)=>{
    context.openProductDetail();
    context.setProductDetail(producto)
  }

  const addProductsToCart = (event,productData) => {
    event.stopPropagation();
    context.setCount(context.count+1)
    context.setCartProducts([...context.cartProducts, productData])
    context.openCheckoutSideMenu();
    console.log('cart', context.cartProducts)
  }
  return (
    <div className='bg-white cursor-pointer w-56 h-60 rounded-lg p-2'
          onClick={ () => showProduct(data.data) }
        >
        <figure className='relative mb-3 w-full h-4/5'>
            <span className='absolute p-2 bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{category.name}</span>
            <img className='w-full h-full object-cover rounded-lg' src={images?.[0]} alt="headersphone" />
            <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
            onClick={(event) => addProductsToCart(event,data.data)}>
                <Icon  icon="uil:cart"/>
            </div>
        </figure>
        <p className='flex justify-between '>
            <span className='text-sm font-light'> {title}</span>
            <span className='text-sm font-medium'>{price} $</span>
        </p>
    </div>
  );
};
export default Card;
