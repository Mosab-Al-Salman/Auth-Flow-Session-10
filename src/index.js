import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home'
import Basic from './pages/Basic'
import Fromework from './pages/Fromework'
import Tips from './pages/Tips';
import { HelmetProvider } from 'react-helmet-async';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/Basic",
    element: <Basic />,
  },

  {
    path: "/Fromework",
    element: <Fromework />,
  },

  {
    path: "/Tips",
    element: <Tips />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
  <RouterProvider router={router} />
  </HelmetProvider>
  </React.StrictMode>
);

serviceWorkerRegistration.register();
