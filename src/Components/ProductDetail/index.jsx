import { Icon } from '@iconify/react'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Contex'
import './styles.css'

export const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);
  return (
    <aside className={`${context.isProductOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg h-[calc(100vh-95px)] bg-white`}>
      <div className='flex justify-between items-center p-4'>
        <h2 className='font-medium text-xl'>Detalle</h2>
        <div><Icon icon="uil:x" onClick={() => context.closeProductDetail()}></Icon></div>
      </div>
      <div className='m-3'>
        <figure>
          <img className='w-full h-full rounded-lg' src={context.productDetail.image} alt={context.productDetail.title} />
        </figure>
        <p className='flex flex-col mt-2'>
            <span className='text-2xl font-medium mb-2 text-black'>{context.productDetail.price} $</span>
            <span className='text-md font-medium'> {context.productDetail.title}</span>
            <span className='text-sm font-light'> {context.productDetail.description}</span>
        </p>
      </div>
    </aside>
  )
}
