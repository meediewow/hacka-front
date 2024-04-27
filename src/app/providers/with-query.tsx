import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export const withQuery = (Component: React.FC<React.PropsWithChildren>) => {
    const WithQuery: React.FC<React.PropsWithChildren> = (props) => {
        return (
            <QueryClientProvider client={queryClient}>
                <Component {...props} />
            </QueryClientProvider>
        );
    };
    return WithQuery;
};
