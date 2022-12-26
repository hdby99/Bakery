import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './Components/Home';
import Checkout from './Components/Checkout';
import Layout from './Components/Layout';

import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
