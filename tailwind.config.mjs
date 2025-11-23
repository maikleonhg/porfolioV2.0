/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                // El negro no es negro, es 'Void'
                void: '#0a0a0a',
                // Un gris oscuro para superficies
                concrete: '#1c1c1c',
                // El blanco no es blanco puro, lastima los ojos
                paper: '#e5e5e5',
                // Tu color de acento (Lazer Red o Acid Green)
                acid: '#ccff00', // Verde ácido
                alert: '#ff2a00', // Rojo láser
            },
            fontFamily: {
                serif: ['Cinzel', 'serif'],
                mono: ['Space Mono', 'monospace'],
                display: ['Anton', 'sans-serif'], // Para el estilo PEAKED
            },
            backgroundImage: {
                'noise': "url('/noise.png')", // Ya te diré como crear esta textura
            }
        },
    },
    plugins: [],
}
