import React from 'react'

export const OrderCard = () => {
    const {id, title, imageUrl, price} = props;
  return (
    <div className='flex justify-between items-center'>
        <div className='flex items-center gap-2'>
            <figure className='w-20 h-20'>
                <img className='w-full h-full rounded-lg object-cover' src="" alt="" />
            </figure>
            <p className='text-sm font-light'></p>
        </div>
        <div>
            <p></p>
            
        </div>
    </div>
  )
}

