import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { DefaultLayout } from '@/widgets/layouts/default-layout';
import { Home } from '@/pages/home';
import { Sitter } from '@/pages/sitter';
import { Error } from '@/pages/error';
import { Login } from '@/pages/login';
import { Booking } from '@/pages/booking';
import { withProviders } from './providers';
import { AuthGuard } from '@/features/auth/auth-guard/auth-guard';
import { RegisterSitter } from '@/pages/register-sitter/register-sitter';
import { RegisterClient } from '@/pages/register-client/register-client';
import { ProfilePage } from '@/pages/profile/profile';

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
        path: '/sitter/:sitterId',
        element: (
            <DefaultLayout>
                <Sitter />
            </DefaultLayout>
        ),
        errorElement: <Error />,
    },
    {
        path: '/login',
        element: (
            <DefaultLayout>
                <Login />
            </DefaultLayout>
        ),
        errorElement: <Error />,
    },
    {
        path: '/register-sitter',
        element: (
            <DefaultLayout>
                <RegisterSitter />
            </DefaultLayout>
        ),
        errorElement: <Error />,
    },
    {
        path: '/register-client',
        element: (
            <DefaultLayout>
                <RegisterClient />
            </DefaultLayout>
        ),
        errorElement: <Error />,
    },
    {
        path: '/profile',
        element: (
            <AuthGuard>
                <DefaultLayout>
                    <ProfilePage />
                </DefaultLayout>
            </AuthGuard>
        ),
        errorElement: <Error />,
    },
    {
        path: '/booking',
        element: (
            <AuthGuard>
                <DefaultLayout>
                    <Booking />
                </DefaultLayout>
            </AuthGuard>
        ),
        errorElement: <Error />,
    },
]);

export const App: React.FC = withProviders(() => <RouterProvider router={router} />);
