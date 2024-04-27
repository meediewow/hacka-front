import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthLayout } from '@/widgets/layouts/auth-layout';
import { DefaultLayout } from '@/widgets/layouts/default-layout';
import { Home } from '@/pages/home';
import { Error } from '@/pages/error';
import { Login } from '@/pages/login';
import { withProviders } from './providers';
import { AuthGuard } from '@/features/auth/auth-guard/auth-guard';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <DefaultLayout>
                <Home />
            </DefaultLayout>
        ),
        errorElement: <Error />,
    },
    {
        path: '/login',
        element: (
            <AuthLayout>
                <Login />
            </AuthLayout>
        ),
        errorElement: <Error />,
    },
    {
        path: '/test',
        element: (
            <AuthGuard>
                <DefaultLayout>
                    <h1>TEST</h1>
                </DefaultLayout>
            </AuthGuard>
        ),
        errorElement: <Error />,
    },
]);

export const App: React.FC = withProviders(() => <RouterProvider router={router} />);
