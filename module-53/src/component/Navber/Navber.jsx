import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'

const Navber = () => {
    const [open,setOpen]= useState(false)
    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Contact", path: "/contact" },
        { id: 4, name: "Products", path: "/products" },
        { id: 5, name: "Product Detail", path: "/products/:id" }
      ];
      

    return (
        <div className='bg-purple-400 '>
            <div className='md:hidden' onClick={()=>setOpen(!open)}>
                <span>{open===true?<XMarkIcon className="h-6 w-6 text-purple-700" />:<Bars3Icon className="h-6 w-6 text-purple-700" />}</span>
            
            
            </div>
            <ul className={`md:flex  absolute md:static p-2  bg-purple-400 duration-500 ${open?'top-6':'-top-36'}`}>
                {
                    routes.map(route=> <Link key={route.id} route={route}></Link>)
                }
            </ul>
            
        </div>
    );
};

export default Navber;