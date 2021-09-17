module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            inset: {
                0: 0,
                // ...
                32: '32rem',
                40: '40rem',
                56: '48rem',
                60: '53rem',
                64: '70rem',
                72: '100rem',
                108: '256rem'
            },
            mt: {
                60: '160rem',
                80: '202rem',
                84: '220rem'
            },
            ml: {
                80: '40rem'
            },
            width: {
                96: '30rem',
                98: '106rem'
            },
            margin: {
                30: '20rem',
                72: '40rem'
            }
        },
        colors: {
            light: '#F5F3F0',
            DEFAULT: '#047857',
            emerald: '#022b0f',
            white: '#FFFFFF',
            yellow: '#CB912C',
            gray: '#000000'
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
}
