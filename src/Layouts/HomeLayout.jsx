import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Component/Header';
import Latestnews from '../Component/Latestnews';
import Navbar from '../Component/Navbar';
import LeftAsaid from '../Component/HomeLayot/LeftAsaid';
import RightAside from '../Component/homeLayot/RightAside';



const HomeLayout = () => {
    return (
        <div>
            <header><Header></Header>

            <section className='w-11/12 mx-auto py-5'>
                <Latestnews></Latestnews>
            </section>
            <nav className='w-11/12 mx-auto py-5'>
                <Navbar></Navbar>
            </nav>
            
            
            </header>
            

            <main className='w-11/12 mx-auto my-3 grid grid-cols-12 gap-5'>
                <aside className='col-span-3 sticky top-0 h-fit'>
                       <LeftAsaid></LeftAsaid>
                </aside>
               
                <section className='main col-span-6'>
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3 sticky top-0 h-fit'>
                      <RightAside></RightAside>
                </aside>
               
            </main>
        </div>
    );
};

export default HomeLayout;

