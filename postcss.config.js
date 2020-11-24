const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')

const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
    plugins: [
        tailwindcss('./tailwind.js'),
        autoprefixer({
            add: true,
            grid: true
        }),

        process.env.NODE_ENV === 'production' ? purgecss({
            content: [`./public/**/*.html`, `./src/**/*.vue`, `./src/**/*.scss`],
            defaultExtractor(content) {
                const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '')
                return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
            },
        }): ''
    ]
}
