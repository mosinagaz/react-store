import { Icon } from '@iconify/react'

export const OrderCard = props => {
    const { id, title, imageUrl, price,handleDelete} = props;
  return (
    <div className='flex justify-between items-center'>
        <div className='flex items-center gap-2'>
            <figure className='w-20 h-15 my-1'>
                <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title} />
            </figure>
            <p className='text-sm font-light'>{title}</p>
        </div>
        <div className='flex items-center gap-2'>
            <p className='text-lg font-medium'>{price}</p>
            <Icon onClick={() => handleDelete(id)} icon="uil:x"/>
        </div>
    </div>
  )
}

