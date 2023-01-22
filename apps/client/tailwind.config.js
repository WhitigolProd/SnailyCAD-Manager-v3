/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
    darkMode: true,
    theme: {
        extend: {},
    },
    plugins: [require('tw-elements/dist/plugin')],
};
