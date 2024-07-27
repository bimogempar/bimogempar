import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import IndexPage from './pages';

const router = createBrowserRouter([
    { path: '/', element: <IndexPage /> }
]);

const App = () => {
    return <RouterProvider router={router} />;
}

export default App;