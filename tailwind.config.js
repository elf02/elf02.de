/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'selector',
    content: [
        "./public/**/*.{html,js}",
        "./src/**/*.{html,js}"
    ],
    theme: {
        fontFamily: {
            jetbrainsmono: ['"JetBrains Mono"', 'monospace']
        },
        backgroundImage: {
            'gradient-elf02': 'linear-gradient(90deg, rgba(21, 128, 61, 1) 0%, rgba(21, 128, 61, 1) 10%, rgba(251, 146, 60, 1) 10%, rgba(251, 146, 60, 1) 20%, rgba(234, 88, 12, 1) 20%, rgba(234, 88, 12, 1) 30%, rgba(220, 38, 38, 1) 30%, rgba(220, 38, 38, 1) 40%, rgba(162, 28, 175, 1) 40%, rgba(162, 28, 175, 1) 50%, rgba(37, 99, 235, 1) 50%, rgba(37, 99, 235, 1) 60%, rgba(21, 128, 61, 1) 60%, rgba(21, 128, 61, 1) 70%, rgba(251, 146, 60, 1) 70%, rgba(251, 146, 60, 1) 80%, rgba(234, 88, 12, 1) 80%, rgba(234, 88, 12, 1) 90%, rgba(220, 38, 38, 1) 90%, rgba(220, 38, 38, 1) 100%)'
        },
        extend: {
            fontSize: {
                clamp: 'clamp(3.5rem, 2.923rem + 2.308vw, 5rem)'
            },
            animation: {
                'elf02': 'font-pump 1.5s ease-in-out forwards, bg-smooth 15s linear 1.6s infinite'
            },
            keyframes: {
                'bg-smooth': {
                    '0%': { 'background-position': '0%' },
                    '50%': { 'background-position': '100%' },
                    '100%': { 'background-position': '0%' }
                },
                'font-pump': {
                    '0%': {
                        'font-variation-settings': "'wght' 100",
                        'letter-spacing': '30px',
                    },
                    '100%': {
                        'font-variation-settings': "'wght' 800",
                        'letter-spacing': '0px',
                    }
                }
            }
        },
    },
    plugins: [],
}