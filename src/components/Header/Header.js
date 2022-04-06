import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';
import Anchore from '../Anchor/Anchore';


const Header = () => {
    const [open,setOpen] = useState(false)

    const routes = [
        {id: 1, name:'Home', link:'/home'},
        {id: 2, name:'About', link:'/about'},
        {id: 3, name:'Service', link:'/service'},
        {id: 4, name:'Blog', link:'/blog'},
        {id: 5, name:'Help', link:'/help'},
    ]
    return (
        <nav className='bg-pink-200'>
            <div onClick={()=> setOpen(!open)} className='md:hidden cursor-pointer'>
                {open ? <ImCross className='h-8 w-8'/> : <AiOutlineMenu className='h-8 w-8'/>}
            </div><br />
            <ul className={`md:flex justify-center bg-pink-200 w-full md:static absolute duration-1000 ${open ? 'top-16':'top-[-120px]'}`}>
                {
                    routes.map(route => <Anchore
                    keyt={route.id}
                    route={route}
                    ></Anchore>)
                }
            </ul>
        </nav>
    );
};

export default Header;