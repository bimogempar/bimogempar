import React from 'react';
import MainLayout from '../components/MainLayout';
import { useRouteError } from 'react-router-dom';
import HeadTitle from '../components/HeadTitle';

const PageError = () => {
    const error = useRouteError();
    return (
        <HeadTitle title="error">
            <MainLayout>
                <h1 className='text-2xl'>Oops!</h1>
                <img src="https://www.icegif.com/wp-content/uploads/2022/11/icegif-196.gif" alt="" layout="fill" className='w-[75%]' />
                <p className='text-sm opacity-70'>Sorry, an unexpected error has occurred.</p>
                <p className='text-xs opacity-50'>
                    <i>{error.statusText || error.message}</i>
                </p>
            </MainLayout>
        </HeadTitle>
    )
}

export default PageError;