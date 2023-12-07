import { Icon } from '@iconify/react'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Contex'
import './styles.css'

export const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);
  return (
    <aside className={`${context.isCheckourSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg h-[calc(100vh-95px)] bg-white`}>
      <div className='flex justify-between items-center p-4'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <div><Icon icon="uil:x" onClick={() => context.closeCheckoutSideMenu()}></Icon></div>
      </div>
    </aside>
  )
}
