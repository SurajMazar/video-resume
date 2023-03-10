/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{ts,tsx}",
        "./src/components/**/*.{ts,tsx}",
        "./src/context/**/*.{ts,tsx}",
        "./src/themes/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary": "#6C63FF"
            }
        },
    },
    plugins: [],
}
