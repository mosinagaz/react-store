import React from "react";
import { Icon } from "@iconify/react";
const Card = () => {
  return (
    <div className='bg-white cursor-pointer w-56 h-60 rounded-lg p-2'>
        <figure className='relative mb-3 w-full h-4/5'>
            <span className='absolute p-2 bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>Electronics</span>
            <img className='w-full h-full object-cover rounded-lg' src="https://images.pexels.com/photos/2531131/pexels-photo-2531131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="headersphone" />
            <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'>
                <Icon icon="uil:cart"/>
            </div>
        </figure>
        <p className='flex justify-between '>
            <span className='text-sm font-light'> Producto 1</span>
            <span className='text-sm font-medium'> $622</span>
        </p>
    </div>
  );
};
export default Card;
