/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./public/**/*.{html,js}",
        "./src/**/*.{html,js}"
    ],
    theme: {
        extend: {
            animation: {
                'bg-smooth': 'bg-smooth 15s linear infinite',
            },
            keyframes: {
                'bg-smooth': {
                    '0%': { 'background-position': '0%' },
                    '50%': { 'background-position': '100%' },
                    '100%': { 'background-position': '0%' }
                }
            }
        },
    },
    plugins: [],
}