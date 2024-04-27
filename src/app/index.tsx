import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthLayout } from '@/widgets/layouts/auth-layout';
import { DefaultLayout } from '@/widgets/layouts/default-layout';
import { Home } from '@/pages/home';
import { Sitter } from '@/pages/sitter';
import { Error } from '@/pages/error';
import { Login } from '@/pages/login';
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
            <AuthLayout>
                <Login />
            </AuthLayout>
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
]);

export const App: React.FC = withProviders(() => <RouterProvider router={router} />);
