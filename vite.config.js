const { resolve } = require('path');
import vue from "@vitejs/plugin-vue";

export default ({ command }) => ({
    plugins: [
        vue(),
    ],
    build: {
        manifest: true,
        rollupOptions: {
            input: resolve(__dirname, 'index.html'),
        },
    },
    resolve: {
        alias: [
            { find: "@", replacement: resolve(__dirname, '/src') }
        ],
    },
});
