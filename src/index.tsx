import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import '@/index.scss'
import { MainPage } from '@pages/MainPage/mainPage';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={< MainPage />}>
        </Route>
    )
);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <RouterProvider router={router} />
);
