import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'node:path';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            manifest: {
                short_name: 'Weather',
                name: 'Weather: Do I need an umbrella?',
                description: 'Weather forecast information',
                id: '/',
                scope: '/',
                display: 'standalone',
                start_url: '/',
                theme_color: '#3367D6',
                background_color: '#3367D6',
                icons: [
                    {
                        src: '/maskable_icon_x512.png',
                        type: 'image/svg+xml',
                        sizes: '512x512',
                    },
                    {
                        src: '/maskable_icon_x192.png',
                        type: 'image/png',
                        sizes: '192x192',
                    },
                    {
                        src: '/maskable_icon_x512.png',
                        type: 'image/png',
                        sizes: '512x512',
                    },
                ],
                shortcuts: [
                    {
                        name: "How's the weather today?",
                        short_name: 'Today',
                        description: 'View weather information for today',
                        url: '/maskable_icon_x192',
                        icons: [{ src: '/maskable_icon_x192.png', sizes: '192x192' }],
                    },
                    {
                        name: "How's the weather tomorrow?",
                        short_name: 'Tomorrow',
                        description: 'View weather information for tomorrow',
                        url: '/maskable_icon_x192',
                        icons: [{ src: '/maskable_icon_x192.png', sizes: '192x192' }],
                    },
                ],
                screenshots: [
                    {
                        src: '/maskable_icon_x512.png',
                        type: 'image/png',
                        sizes: '512x512',
                        form_factor: 'narrow',
                    },
                    {
                        src: '/maskable_icon_x512.png',
                        type: 'image/jpg',
                        sizes: '512x512',
                        form_factor: 'wide',
                    },
                ],
            },
            registerType: 'autoUpdate',
            devOptions: {
                enabled: true,
            },
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
});
