module.exports = {
    mode: 'jit',
    purge: [
        './public/**/*.html',
        './src/**/*.{js,jsx,ts,tsx,vue}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'orange': '#FFA31A',
                'hoverOrange': '#FF7A00'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
