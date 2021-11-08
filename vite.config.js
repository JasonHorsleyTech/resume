const path = require('path');
import vue from "@vitejs/plugin-vue";

export default ({ command }) => ({
    plugins: [
        vue(),
    ],
    build: {
        manifest: true,
        rollupOptions: {
            input: 'src/main.js',
        },
    },
    resolve: {
        alias: [
            { find: "@", replacement: path.resolve(__dirname, '/src') }
        ],
    },
});
