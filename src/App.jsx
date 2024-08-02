import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PageIndex from './pages/PageIndex';
import PageWorks from './pages/PageWorks';
import PageError from './pages/PageError';
import PageLogin from './pages/PageLogin';

const router = createBrowserRouter([
    { path: '/', element: <PageIndex />, errorElement: <PageError /> },
    { path: '/works', element: <PageWorks /> },
    { path: '/login', element: <PageLogin /> },
]);

const App = () => {
    return <RouterProvider router={router} />;
}

export default App;