import { useContext } from "react";
import { ShoppingCartContext } from "../../Contex";
import { Icon } from "@iconify/react";
import NavItem from "./NavItem"

export const Navbar = () => {
   const context = useContext(ShoppingCartContext);
    let activeStyle = "underline underline-offset-4";
  return (
    <nav className='flex justify-between items-center z-10 top-0 w-full bg-[#edf0f7] shadow-sm  py-5 px-8 text-sm font-light fixed'>
        <ul className='flex items-center gap-3'>
            <li className='font-semibold text-lg'>
               <NavItem to='/' >Store</NavItem> 
            </li>
            <li>
               <NavItem to='/' activeStyle={activeStyle}>All</NavItem> 
            </li>
            <li>
               <NavItem to='/clothes' activeStyle={activeStyle} >Clothes</NavItem> 
            </li>
            <li>
               <NavItem to='/electronics' activeStyle={activeStyle} >Electronics</NavItem> 
            </li>
            <li>
               <NavItem to='/fornitures' activeStyle={activeStyle} >Fornitures</NavItem> 
            </li>
            <li>
               <NavItem to='/toys' activeStyle={activeStyle} >Toys</NavItem> 
            </li>
            <li>
               <NavItem to='/others' activeStyle={activeStyle} >Others</NavItem> 
            </li>
        </ul>
        <ul className='flex items-center gap-3'>
            <li className='text-black-60'>
               osinaga@osinaga.com 
            </li>
            <li>
               <NavItem to='/my-orders' activeStyle={activeStyle} >My Orders</NavItem> 
            </li>
            <li>
               <NavItem to='/my-account' activeStyle={activeStyle} >My Acount </NavItem> 
            </li>
            <li>
               <NavItem to='/sig-in' activeStyle={activeStyle} >Sig In</NavItem> 
            </li>
            <li className="flex items-center">
               <Icon icon="fluent:cart-16-regular" width={20}></Icon> 
              <div className='text-sm'>{context.count}</div> 
            </li>
        </ul>
    </nav>
  )
}
