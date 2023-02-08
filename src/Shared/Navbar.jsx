import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo/LOGO.png'
import {CiSearch, CiShoppingCart, CiUser} from 'react-icons/ci'
const Navbar = () => {
    return (
        <header className=" bg-gray-100 text-gray-700" >
	<div className="px-16 flex justify-between mx-auto items-center py-5">
		<ul className="flex justify-start items-center gap-5 overflow-auto w-[33%]">
		<NavLink to='/' className={({isActive}) => isActive ? "border-b-2 hover:rounded border-orange-200 hover:border-b-2 hover:border-gray-200 ":"" }><li className='hover:bg-gradient-to-l hover:bg-orange-200 duration-300 hover:from-gray-200 py-1 px-3 rounded'>Home</li></NavLink>	
		<NavLink to='/shop' className={({isActive}) => isActive ? "border-b-2 hover:rounded border-orange-200 hover:border-b-2 hover:border-gray-200  ":"" }><li className='hover:bg-gradient-to-l hover:bg-orange-200 duration-300 hover:from-gray-200 py-1 px-3 rounded'>Shop</li></NavLink>	
		<NavLink to='/about' className={({isActive}) => isActive ? "border-b-2 hover:rounded border-orange-200 hover:border-b-2 hover:border-gray-200  ":"" }><li className='hover:bg-gradient-to-l hover:bg-orange-200 duration-300 hover:from-gray-200 py-1 px-3 rounded'>About Us</li></NavLink>	
		<NavLink to='/contact' className={({isActive}) => isActive ? "border-b-2 hover:rounded border-orange-200 hover:border-b-2 hover:border-gray-200  ":"" }><li className='hover:bg-gradient-to-l hover:bg-orange-200 duration-300 hover:from-gray-200 py-1 px-3 rounded'>Contact us</li></NavLink>	
		</ul>

       <div className='w-[33%] flex justify-center'>
	   <img src={logo} alt="logo" className='w-16 h-16' />
	   </div>
		
		<div className="flex items-center gap-4 justify-end w-[33%] pr-8">
			<CiSearch className='w-6 h-6 text-gray-700'></CiSearch>
			<CiUser className='w-6 h-6 text-gray-700'></CiUser>
			<CiShoppingCart className='w-6 h-6 text-gray-700'></CiShoppingCart>
		</div>
	</div>
</header>
    );
};

export default Navbar;