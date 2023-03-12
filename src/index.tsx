import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import { MainPage } from '@pages/mainPage';

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
