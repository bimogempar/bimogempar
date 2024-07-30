import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

const MainLayout = ({ children }) => {
    return (
        <div className="flex min-h-screen flex-col justify-between pt-6 max-w-md mx-auto">
            <Nav />
            <div className='mb-auto'>
                <div className="text-center grid place-items-center px-4 space-y-4">
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout;
