import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PageIndex from './pages/PageIndex';

const router = createBrowserRouter([
    { path: '/', element: <PageIndex /> }
]);

const App = () => {
    return <RouterProvider router={router} />;
}

export default App;