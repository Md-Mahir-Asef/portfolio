/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            screens: {
                xs: "340px", // Custom breakpoint for 340px screens - comes after default sm (640px)
            },
            spacing: {
                18: "4.5rem",
                88: "22rem",
            },
            maxWidth: {
                xs: "20rem", // 320px
                sm: "24rem", // 384px
            },
        },
    },
    plugins: [],
};
