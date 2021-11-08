const path = require('path');
import vue from "@vitejs/plugin-vue";

export default ({ command }) => ({
    publicDir: "disable",
    base: command === "build" ? "/dist/" : "",
    plugins: [
        vue(),
    ],
    build: {
        manifest: true,
        outDir: 'public/dist',
        rollupOptions: {
            input: 'resources/js/app.js',
        },
    },
    resolve: {
        alias: [
            { find: "@", replacement: path.resolve(__dirname, '/src') }
        ],
    },
});
