import { Icon } from '@iconify/react'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Contex'
import { OrderCard } from '../OrderCard'
import './styles.css'

export const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  const handleDelete = (id) =>{
    const filteredProduct = context.cartProducts.filter(product => product.id != id)
    context.setCartProducts(filteredProduct)

  }
  return (
    <aside className={`${context.isCheckourSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg h-[calc(100vh-95px)] bg-white`}>
      <div className='flex justify-between items-center p-4'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <div><Icon icon="uil:x" onClick={() => context.closeCheckoutSideMenu()}></Icon></div>
      </div>
      <div className='p-1 overflow-y-scroll'>
      {
        context.cartProducts.map(product=>(
            <OrderCard 
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
            handleDelete={handleDelete}
            />
        ))
      }
      </div>
    </aside>
  )
}
